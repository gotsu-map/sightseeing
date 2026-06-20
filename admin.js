const adminLoginBox = document.querySelector("#adminLoginBox");
const adminPass = document.querySelector("#adminPass");
const adminLoginButton = document.querySelector("#adminLoginButton");
const adminMessage = document.querySelector("#adminMessage");
const adminPanel = document.querySelector("#adminPanel");
const adminStats = document.querySelector("#adminStats");
const adminCourseList = document.querySelector("#adminCourseList");
const adminReviewList = document.querySelector("#adminReviewList");
const refreshDataButton = document.querySelector("#refreshDataButton");
const exportDataButton = document.querySelector("#exportDataButton");
const clearAllUserDataButton = document.querySelector("#clearAllUserDataButton");
const adminDataBox = document.querySelector("#adminDataBox");
const importDataButton = document.querySelector("#importDataButton");

let backendMode = "local";
let backendClient = null;
let courses = [];
let reviews = [];
let isAdminAuthenticated = false;

function requireAdmin() {
  if (isAdminAuthenticated) return true;
  adminMessage.textContent = "管理コードでログインしてください。";
  adminPanel.hidden = true;
  adminLoginBox.hidden = false;
  return false;
}

function setupBackend() {
  const config = window.GOTSU_BACKEND || {};
  const enabled = config.provider === "supabase"
    && config.supabaseUrl
    && config.supabaseAnonKey
    && window.supabase;

  if (!enabled) return;
  backendMode = "supabase";
  backendClient = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
}

function getLocalCourses() {
  return JSON.parse(localStorage.getItem("gotsuUserCourses") || "[]");
}

function getLocalReviews() {
  return JSON.parse(localStorage.getItem("gotsuReviews") || "[]");
}

function saveLocalCourses(items) {
  localStorage.setItem("gotsuUserCourses", JSON.stringify(items));
}

function saveLocalReviews(items) {
  localStorage.setItem("gotsuReviews", JSON.stringify(items));
}

function normalizeRows(rows) {
  return (rows || []).map((row) => row.payload).filter(Boolean);
}

async function loadData() {
  if (backendMode === "supabase") {
    const [courseResult, reviewResult] = await Promise.all([
      backendClient.from("courses").select("payload").order("created_at", { ascending: false }),
      backendClient.from("reviews").select("payload").order("created_at", { ascending: false })
    ]);
    if (courseResult.error) throw courseResult.error;
    if (reviewResult.error) throw reviewResult.error;
    courses = normalizeRows(courseResult.data);
    reviews = normalizeRows(reviewResult.data);
    saveLocalCourses(courses);
    saveLocalReviews(reviews);
    return;
  }

  courses = getLocalCourses();
  reviews = getLocalReviews();
}

async function upsertCourse(course) {
  if (backendMode !== "supabase") return;
  const { error } = await backendClient.from("courses").upsert({
    id: course.id,
    payload: course,
    updated_at: new Date().toISOString()
  });
  if (error) throw error;
}

async function upsertReview(review) {
  if (backendMode !== "supabase") return;
  const { error } = await backendClient.from("reviews").upsert({
    id: review.id,
    payload: review,
    updated_at: new Date().toISOString()
  });
  if (error) throw error;
}

async function deleteCourse(course) {
  if (backendMode !== "supabase" || !course?.id) return;
  const { error } = await backendClient.from("courses").delete().eq("id", course.id);
  if (error) throw error;
}

async function deleteReview(review) {
  if (backendMode !== "supabase" || !review?.id) return;
  const { error } = await backendClient.from("reviews").delete().eq("id", review.id);
  if (error) throw error;
}

function renderAdmin() {
  adminStats.innerHTML = `
    <span class="pill">保存先 ${backendMode === "supabase" ? "Supabase" : "ブラウザ内"}</span>
    <span class="pill">ユーザー作成コース ${courses.length}件</span>
    <span class="pill">投稿レビュー ${reviews.length}件</span>
  `;

  adminCourseList.innerHTML = courses.length ? courses.map((course, index) => `
    <article class="admin-item">
      <div>
        <h4>${course.name}</h4>
        <p>${course.time || "-"} / ${course.cost || "-"} / 平均還元率 ${course.averageReturnRate || "-"}%</p>
        <p>${course.summary || ""}</p>
      </div>
      <button class="button ghost danger" type="button" data-delete-course="${index}">削除</button>
    </article>
  `).join("") : `<p class="empty">ユーザー作成コースはまだありません。</p>`;

  adminReviewList.innerHTML = reviews.length ? reviews.map((review, index) => `
    <article class="admin-item">
      <div>
        <h4>${review.course || "コース未設定"}</h4>
        <p>${review.date || "日付未設定"} / ${review.name || "匿名"} / 評価 ${review.rating || "-"} / ${review.party || "-"}</p>
        <p>${review.good || ""}</p>
        ${review.tips ? `<p>注意点: ${review.tips}</p>` : ""}
      </div>
      <button class="button ghost danger" type="button" data-delete-review="${index}">削除</button>
    </article>
  `).join("") : `<p class="empty">投稿レビューはまだありません。</p>`;
}

async function openAdmin() {
  isAdminAuthenticated = true;
  adminPanel.hidden = false;
  adminLoginBox.hidden = true;
  adminMessage.textContent = "";
  await loadData();
  renderAdmin();
}

adminLoginButton.addEventListener("click", () => {
  if (adminPass.value !== "gotsu-admin") {
    adminMessage.textContent = "管理コードが違います。";
    return;
  }
  openAdmin().catch((error) => {
    adminMessage.textContent = "データの読み込みに失敗しました。";
    console.error(error);
  });
});

refreshDataButton.addEventListener("click", () => {
  if (!requireAdmin()) return;
  loadData().then(renderAdmin).catch((error) => {
    adminMessage.textContent = "再読み込みに失敗しました。";
    console.error(error);
  });
});

adminCourseList.addEventListener("click", (event) => {
  if (!requireAdmin()) return;
  const button = event.target.closest("[data-delete-course]");
  if (!button) return;
  const [removed] = courses.splice(Number(button.dataset.deleteCourse), 1);
  saveLocalCourses(courses);
  deleteCourse(removed).then(renderAdmin).catch(console.error);
  renderAdmin();
});

adminReviewList.addEventListener("click", (event) => {
  if (!requireAdmin()) return;
  const button = event.target.closest("[data-delete-review]");
  if (!button) return;
  const [removed] = reviews.splice(Number(button.dataset.deleteReview), 1);
  saveLocalReviews(reviews);
  deleteReview(removed).then(renderAdmin).catch(console.error);
  renderAdmin();
});

exportDataButton.addEventListener("click", () => {
  if (!requireAdmin()) return;
  adminDataBox.value = JSON.stringify({
    exportedAt: new Date().toISOString(),
    courses,
    reviews
  }, null, 2);
});

importDataButton.addEventListener("click", async () => {
  if (!requireAdmin()) return;
  try {
    const data = JSON.parse(adminDataBox.value);
    if (!Array.isArray(data.courses) || !Array.isArray(data.reviews)) {
      throw new Error("Invalid data shape");
    }
    courses = data.courses;
    reviews = data.reviews;
    saveLocalCourses(courses);
    saveLocalReviews(reviews);
    if (backendMode === "supabase") {
      await Promise.all([
        ...courses.map(upsertCourse),
        ...reviews.map(upsertReview)
      ]);
    }
    renderAdmin();
    adminMessage.textContent = "JSONから復元しました。";
  } catch (error) {
    adminMessage.textContent = "JSONの形式を確認してください。";
  }
});

clearAllUserDataButton.addEventListener("click", async () => {
  if (!requireAdmin()) return;
  const ok = window.confirm("ユーザー作成コースと投稿レビューをすべて削除します。よろしいですか？");
  if (!ok) return;
  const oldCourses = [...courses];
  const oldReviews = [...reviews];
  courses = [];
  reviews = [];
  saveLocalCourses(courses);
  saveLocalReviews(reviews);
  renderAdmin();
  if (backendMode === "supabase") {
    await Promise.all([
      ...oldCourses.map(deleteCourse),
      ...oldReviews.map(deleteReview)
    ]).catch(console.error);
  }
});

setupBackend();
localStorage.removeItem("gotsuAdminUnlocked");
