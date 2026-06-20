const defaultCourses = [
  {
    id: "honmachi-kagura",
    source: "初期案",
    name: "江津本町・赤瓦と神楽の入口コース",
    tags: ["文化"],
    target: "初めて江津を訪れる人、まち歩きと文化を半日強で体験したい人",
    time: "約7時間45分",
    cost: "4,100円",
    averageReturnRate: 69,
    summary: "江津駅前から始め、赤瓦の町並み、神社、江津本町の歴史、ランチ、石見神楽へつなげる王道型。",
    steps: [
      ["C014", "江津駅前パレットごうつ散策", "約30分", "観光情報センターを併設した駅前複合施設をめぐる。"],
      ["C003", "江津本町甍街道さんぽ", "約1時間", "石州赤瓦が美しい旧町並みを歩く。"],
      ["C004", "山辺神社参拝", "約30分", "創建652年の古社。「ねがい石」が知られる。"],
      ["C020", "江津本町の歴史散策", "約1時間", "天領として栄えた江津本町の歴史をたどる。"],
      ["C040", "蔵庭でベジタリアンランチ", "約1時間", "古民家をリノベーションした地元野菜のカフェ。"],
      ["C013", "石見神楽 定期公演観覧", "約2時間30分", "駅前パレットごうつで開催される石見神楽の定期公演。"]
    ]
  },
  {
    id: "arifuku-onsen",
    source: "初期案",
    name: "有福温泉レトロ散策と外湯めぐりコース",
    tags: ["温泉", "文化"],
    target: "温泉街の雰囲気、食、語り部体験をゆっくり味わいたい人",
    time: "約6時間45分",
    cost: "8,000円",
    averageReturnRate: 79,
    summary: "有福温泉に絞り、温泉街の歴史と外湯文化を学んでから、食事と入浴で締める。",
    steps: [
      ["R001", "有福温泉街レトロ散策", "約1時間", "秘境・有福温泉の温泉街をめぐる。"],
      ["C022", "有福温泉の歴史を学ぶ", "約45分", "1300年余りの歴史を持つ名湯の伝承を聞く。"],
      ["R007", "有福温泉 外湯文化の語り部体験", "約1時間", "外湯それぞれの趣を語り部とともに知る。"],
      ["R010", "有福BIANCOで本格イタリアン", "約1時間30分", "温泉街で日本海の幸を使った本格イタリアン。"],
      ["R002", "有福温泉 外湯三湯めぐり", "約1時間30分", "三つの外湯を日帰りでめぐる。"]
    ]
  },
  {
    id: "sea-roadside",
    source: "初期案",
    name: "海と道の駅の軽やか日帰りコース",
    tags: ["海"],
    target: "家族連れ、短時間で海沿いの観光を楽しみたい人",
    time: "約7時間30分",
    cost: "6,700円",
    averageReturnRate: 67,
    summary: "アクアス、道の駅、海水浴場、海鮮の食事を組み合わせる、景色と食がわかりやすいコース。",
    steps: [
      ["C001", "しまね海洋館アクアス見学", "約2時間", "シロイルカで人気の水族館。"],
      ["C002", "道の駅サンピコごうつ", "約45分", "特産品や軽食が並ぶ立ち寄りスポット。"],
      ["C008", "浅利海水浴場でひとやすみ", "約1時間", "青い海と風車を望む海岸線。"],
      ["C034", "食彩空間 海人で海鮮コース", "約1時間30分", "新鮮な魚介を使ったコース料理。"],
      ["C009", "黒松海水浴場の散策", "約45分", "透明度の高い海と美しい砂浜。"]
    ]
  },
  {
    id: "iwamiyaki-craft",
    source: "初期案",
    name: "石見焼・手仕事を深掘りするコース",
    tags: ["手仕事", "文化"],
    target: "ものづくり、窯元、地域産業に関心がある人",
    time: "約7時間15分",
    cost: "9,400円",
    averageReturnRate: 74,
    summary: "石見焼の知識、窯元訪問、作り手との交流、陶芸体験を一日でつなぐ。",
    steps: [
      ["C018", "石見焼の歴史と特徴を知る", "約45分", "石見焼の歴史と特徴を学ぶ展示見学。"],
      ["R003", "石州嶋田窯 窯元めぐり", "約1時間", "江津市後地町の窯元を直接訪ねる。"],
      ["R006", "石州嶋田窯 窯元主との交流", "約1時間", "窯元主から直接技法を聞く。"],
      ["C024", "石見焼 陶芸体験", "約1時間30分", "実際に土に触れて陶芸を体験する。"],
      ["C038", "トラットリア キツキでイタリアン", "約1時間30分", "地元食材を使ったイタリア料理。"]
    ]
  },
  {
    id: "local-return",
    source: "初期案",
    name: "高還元カード優先の地域応援コース",
    tags: ["地域応援", "手仕事"],
    target: "地域にお金が落ちる旅行を意識したい人",
    time: "約5時間30分",
    cost: "7,900円",
    averageReturnRate: 82,
    summary: "地域還元率の高いカードを中心に、窯元、赤瓦の町並み、地元飲食を組み合わせる。",
    steps: [
      ["R003", "石州嶋田窯 窯元めぐり", "約1時間", "地域還元率85%の窯元訪問。"],
      ["R006", "石州嶋田窯 窯元主との交流", "約1時間", "地域還元率84%の作り手交流。"],
      ["R004", "江津本町甍街道と石州赤瓦の街並み", "約1時間30分", "赤瓦の町並みを地元ガイドと歩く。"],
      ["R010", "有福BIANCOで本格イタリアン", "約1時間30分", "有福温泉街で食を楽しむ。"]
    ]
  }
];

const defaultReviews = [
  {
    course: "江津本町・赤瓦と神楽の入口コース",
    name: "試作レビュー",
    date: "2026-06-20",
    rating: 5,
    party: "友人",
    transport: "車",
    actualTime: "7時間くらい",
    good: "赤瓦の町並みと神楽を一日でつなげられるので、江津らしさが伝わりやすい。",
    tips: "神楽の開催日確認は必須。昼食の場所も先に決めておくと安心。"
  },
  {
    course: "有福温泉レトロ散策と外湯めぐりコース",
    name: "温泉好き",
    date: "2026-06-20",
    rating: 4,
    party: "夫婦・パートナー",
    transport: "車",
    actualTime: "6時間半",
    good: "外湯の文化を聞いてから入る流れがよかった。",
    tips: "食事と入浴の順番は好みが分かれそう。"
  }
];

const courseGrid = document.querySelector("#courseGrid");
const timeline = document.querySelector("#timeline");
const selectedCourseName = document.querySelector("#selectedCourseName");
const selectedCourseSummary = document.querySelector("#selectedCourseSummary");
const courseSelect = document.querySelector("#courseSelect");
const reviewForm = document.querySelector("#reviewForm");
const reviewList = document.querySelector("#reviewList");
const formMessage = document.querySelector("#formMessage");
const builderForm = document.querySelector("#builderForm");
const cardCategoryFilter = document.querySelector("#cardCategoryFilter");
const cardSearch = document.querySelector("#cardSearch");
const cardSelect = document.querySelector("#cardSelect");
const addCardButton = document.querySelector("#addCardButton");
const clearBuilderButton = document.querySelector("#clearBuilderButton");
const selectedCards = document.querySelector("#selectedCards");
const builderStats = document.querySelector("#builderStats");
const builderMessage = document.querySelector("#builderMessage");
const adminLoginBox = document.querySelector("#adminLoginBox");
const adminPass = document.querySelector("#adminPass");
const adminLoginButton = document.querySelector("#adminLoginButton");
const adminMessage = document.querySelector("#adminMessage");
const adminPanel = document.querySelector("#adminPanel");
const adminStats = document.querySelector("#adminStats");
const adminCourseList = document.querySelector("#adminCourseList");
const adminReviewList = document.querySelector("#adminReviewList");
const exportDataButton = document.querySelector("#exportDataButton");
const clearAllUserDataButton = document.querySelector("#clearAllUserDataButton");
const adminDataBox = document.querySelector("#adminDataBox");
const importDataButton = document.querySelector("#importDataButton");

let allCards = [];
let builderCards = [];
let selectedCourse = defaultCourses[0];
let adminUnlocked = localStorage.getItem("gotsuAdminUnlocked") === "true";

function yen(value) {
  return Number(value || 0).toLocaleString("ja-JP") + "円";
}

function durationToMinutes(duration) {
  if (!duration || duration === "1泊") return 0;
  const hours = duration.match(/(\d+)時間/);
  const minutes = duration.match(/(\d+)分/);
  return (hours ? Number(hours[1]) * 60 : 0) + (minutes ? Number(minutes[1]) : 0);
}

function minutesToText(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours && minutes) return `約${hours}時間${minutes}分`;
  if (hours) return `約${hours}時間`;
  return `約${minutes}分`;
}

function getUserCourses() {
  return JSON.parse(localStorage.getItem("gotsuUserCourses") || "[]");
}

function saveUserCourses(courses) {
  localStorage.setItem("gotsuUserCourses", JSON.stringify(courses));
}

function getAllCourses() {
  return [...defaultCourses, ...getUserCourses()];
}

function getReviews() {
  const saved = getSavedReviews();
  return [...saved, ...defaultReviews];
}

function getSavedReviews() {
  return JSON.parse(localStorage.getItem("gotsuReviews") || "[]");
}

function saveReviews(reviews) {
  localStorage.setItem("gotsuReviews", JSON.stringify(reviews));
}

function summarizeCards(cards) {
  const stayMinutes = cards.reduce((sum, card) => sum + durationToMinutes(card.duration), 0);
  const transferMinutes = Math.max(0, cards.length - 1) * 20;
  const totalCost = cards.reduce((sum, card) => sum + Number(card.guest_cost_yen || 0), 0);
  const averageReturnRate = cards.length
    ? Math.round(cards.reduce((sum, card) => sum + Number(card.regional_return_rate_percent || 0), 0) / cards.length)
    : 0;
  return {
    time: minutesToText(stayMinutes + transferMinutes),
    stayMinutes,
    transferMinutes,
    cost: yen(totalCost),
    averageReturnRate
  };
}

function cardToStep(card) {
  return [
    card.code,
    card.title,
    card.duration || "滞在時間未設定",
    card.description || `${card.category}のカード`
  ];
}

function renderCourses(filter = "all") {
  const courses = getAllCourses();
  const visible = courses.filter((course) => filter === "all" || course.tags.includes(filter));
  courseGrid.innerHTML = visible.map((course) => `
    <button class="course-card ${course.id === selectedCourse.id ? "is-selected" : ""}" type="button" data-course="${course.id}">
      <div class="course-meta">
        <span class="pill">${course.source}</span>
        ${course.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
      </div>
      <h3>${course.name}</h3>
      <p>${course.target}</p>
      <div class="course-meta">
        <span class="pill">${course.time}</span>
        <span class="pill">${course.cost}</span>
        <span class="pill">平均還元率 ${course.averageReturnRate || "-"}%</span>
      </div>
      <p>${course.summary}</p>
    </button>
  `).join("");
  if (!visible.length) {
    courseGrid.innerHTML = `<p class="empty">このテーマのコースはまだありません。</p>`;
  }
}

function renderTimeline() {
  selectedCourseName.textContent = selectedCourse.name;
  selectedCourseSummary.textContent = selectedCourse.summary;
  timeline.innerHTML = selectedCourse.steps.map((step, index) => `
    <article class="timeline-item">
      <span class="timeline-number">${index + 1}</span>
      <div>
        <h3>${step[0]} ${step[1]}</h3>
        <p><strong>${step[2]}</strong> ${step[3]}</p>
      </div>
    </article>
  `).join("");
  courseSelect.value = selectedCourse.name;
}

function renderCourseOptions() {
  const courses = getAllCourses();
  courseSelect.innerHTML = courses.map((course) => `<option>${course.name}</option>`).join("");
}

function renderReviews() {
  reviewList.innerHTML = getReviews().map((review) => `
    <article class="review-card">
      <p class="stars">${"★".repeat(Number(review.rating))}${"☆".repeat(5 - Number(review.rating))}</p>
      <h3>${review.course}</h3>
      <p>${review.date} / ${review.name || "匿名"} / ${review.party} / ${review.transport}</p>
      <p><strong>実際の時間:</strong> ${review.actualTime}</p>
      <p><strong>よかった点:</strong> ${review.good}</p>
      ${review.tips ? `<p><strong>注意点:</strong> ${review.tips}</p>` : ""}
    </article>
  `).join("");
}

function renderAdmin() {
  if (!adminPanel || adminPanel.hidden) return;

  const courses = getUserCourses();
  const reviews = getSavedReviews();
  adminStats.innerHTML = `
    <span class="pill">ユーザー作成コース ${courses.length}件</span>
    <span class="pill">投稿レビュー ${reviews.length}件</span>
  `;

  adminCourseList.innerHTML = courses.length ? courses.map((course, index) => `
    <article class="admin-item">
      <div>
        <h4>${course.name}</h4>
        <p>${course.time} / ${course.cost} / 平均還元率 ${course.averageReturnRate || "-"}%</p>
        <p>${course.summary}</p>
      </div>
      <button class="button ghost danger" type="button" data-admin-delete-course="${index}">削除</button>
    </article>
  `).join("") : `<p class="empty">ユーザー作成コースはまだありません。</p>`;

  adminReviewList.innerHTML = reviews.length ? reviews.map((review, index) => `
    <article class="admin-item">
      <div>
        <h4>${review.course}</h4>
        <p>${review.date || "日付未設定"} / ${review.name || "匿名"} / 評価 ${review.rating || "-"} / ${review.party || "-"}</p>
        <p>${review.good || ""}</p>
        ${review.tips ? `<p>注意点: ${review.tips}</p>` : ""}
      </div>
      <button class="button ghost danger" type="button" data-admin-delete-review="${index}">削除</button>
    </article>
  `).join("") : `<p class="empty">投稿レビューはまだありません。</p>`;
}

function openAdminPanel() {
  adminUnlocked = true;
  localStorage.setItem("gotsuAdminUnlocked", "true");
  adminPanel.hidden = false;
  adminLoginBox.hidden = true;
  adminMessage.textContent = "";
  renderAdmin();
}

function renderCategoryOptions() {
  const categories = [...new Set(allCards.map((card) => card.category).filter(Boolean))];
  cardCategoryFilter.innerHTML = [
    `<option value="all">すべて</option>`,
    ...categories.map((category) => `<option value="${category}">${category}</option>`)
  ].join("");
}

function renderCardOptions() {
  const keyword = cardSearch.value.trim().toLowerCase();
  const category = cardCategoryFilter.value;
  const candidates = allCards
    .filter((card) => card.category !== "宿泊")
    .filter((card) => category === "all" || card.category === category)
    .filter((card) => {
      const haystack = `${card.code} ${card.title} ${card.category} ${card.description}`.toLowerCase();
      return !keyword || haystack.includes(keyword);
    });

  cardSelect.innerHTML = candidates.map((card) => `
    <option value="${card.code}">
      ${card.code} ${card.title} / ${card.category} / ${card.duration} / ${yen(card.guest_cost_yen)} / 還元率${card.regional_return_rate_percent}%
    </option>
  `).join("");
}

function renderBuilderPreview() {
  const summary = summarizeCards(builderCards);
  builderStats.innerHTML = `
    <span class="pill">${builderCards.length}枚</span>
    <span class="pill">${summary.time}</span>
    <span class="pill">${summary.cost}</span>
    <span class="pill">平均還元率 ${summary.averageReturnRate || "-"}%</span>
  `;

  if (!builderCards.length) {
    selectedCards.innerHTML = `<p class="empty">まだカードが選ばれていません。左の一覧からカードを追加してください。</p>`;
    return;
  }

  selectedCards.innerHTML = builderCards.map((card, index) => `
    <article class="selected-card">
      <span class="timeline-number">${index + 1}</span>
      <div>
        <h4>${card.code} ${card.title}</h4>
        <p>${card.category} / ${card.duration} / ${yen(card.guest_cost_yen)} / 地域還元率${card.regional_return_rate_percent}%</p>
      </div>
      <button class="icon-button" type="button" data-remove-card="${card.code}" aria-label="${card.title}を削除">×</button>
    </article>
  `).join("");
}

function addSelectedCard() {
  const code = cardSelect.value;
  const card = allCards.find((item) => item.code === code);
  if (!card) return;
  if (builderCards.some((item) => item.code === code)) {
    builderMessage.textContent = "このカードはすでに追加されています。";
    return;
  }
  builderCards.push(card);
  builderMessage.textContent = "";
  renderBuilderPreview();
}

function saveBuiltCourse(event) {
  event.preventDefault();
  if (!builderCards.length) {
    builderMessage.textContent = "カードを1枚以上選んでください。";
    return;
  }

  const form = new FormData(builderForm);
  const summary = summarizeCards(builderCards);
  const theme = form.get("newCourseTheme");
  const course = {
    id: `user-${Date.now()}`,
    source: "ユーザー作成",
    name: form.get("newCourseName").trim(),
    tags: [...new Set([theme, "ユーザー作成"])],
    target: form.get("newCourseTarget").trim(),
    time: summary.time,
    cost: summary.cost,
    averageReturnRate: summary.averageReturnRate,
    summary: form.get("newCourseMemo").trim() || `${builderCards.length}枚のカードから作成した日帰りコースです。`,
    steps: builderCards.map(cardToStep),
    cardCodes: builderCards.map((card) => card.code)
  };

  const courses = getUserCourses();
  courses.unshift(course);
  saveUserCourses(courses);
  selectedCourse = course;
  builderCards = [];
  builderForm.reset();
  renderBuilderPreview();
  renderCourseOptions();
  renderCourses(document.querySelector(".filter.is-active").dataset.filter);
  renderTimeline();
  renderAdmin();
  builderMessage.textContent = "コースを保存しました。日帰りコース案とレビュー投稿フォームに追加されています。";
  document.querySelector("#courses").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderCourses(button.dataset.filter);
  });
});

courseGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-course]");
  if (!card) return;
  selectedCourse = getAllCourses().find((course) => course.id === card.dataset.course);
  renderCourses(document.querySelector(".filter.is-active").dataset.filter);
  renderTimeline();
});

courseSelect.addEventListener("change", () => {
  selectedCourse = getAllCourses().find((course) => course.name === courseSelect.value);
  renderCourses(document.querySelector(".filter.is-active").dataset.filter);
  renderTimeline();
});

reviewForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(reviewForm);
  const review = Object.fromEntries(form.entries());
  review.recommend = form.getAll("recommend");
  review.id = `review-${Date.now()}`;
  review.createdAt = new Date().toISOString();
  const saved = getSavedReviews();
  saved.unshift(review);
  saveReviews(saved);
  reviewForm.reset();
  courseSelect.value = selectedCourse.name;
  formMessage.textContent = "レビューを保存しました。下の一覧に追加されています。";
  renderReviews();
  renderAdmin();
});

cardCategoryFilter.addEventListener("change", renderCardOptions);
cardSearch.addEventListener("input", renderCardOptions);
addCardButton.addEventListener("click", addSelectedCard);
cardSelect.addEventListener("dblclick", addSelectedCard);
builderForm.addEventListener("submit", saveBuiltCourse);
clearBuilderButton.addEventListener("click", () => {
  builderCards = [];
  renderBuilderPreview();
  builderMessage.textContent = "選択カードをクリアしました。";
});
selectedCards.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-card]");
  if (!button) return;
  builderCards = builderCards.filter((card) => card.code !== button.dataset.removeCard);
  renderBuilderPreview();
});

adminLoginButton.addEventListener("click", () => {
  if (adminPass.value === "gotsu-admin") {
    openAdminPanel();
    return;
  }
  adminMessage.textContent = "管理コードが違います。試作では gotsu-admin です。";
});

adminCourseList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-admin-delete-course]");
  if (!button) return;
  const courses = getUserCourses();
  courses.splice(Number(button.dataset.adminDeleteCourse), 1);
  saveUserCourses(courses);
  selectedCourse = getAllCourses()[0];
  renderCourseOptions();
  renderCourses(document.querySelector(".filter.is-active").dataset.filter);
  renderTimeline();
  renderAdmin();
});

adminReviewList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-admin-delete-review]");
  if (!button) return;
  const reviews = getSavedReviews();
  reviews.splice(Number(button.dataset.adminDeleteReview), 1);
  saveReviews(reviews);
  renderReviews();
  renderAdmin();
});

exportDataButton.addEventListener("click", () => {
  adminDataBox.value = JSON.stringify({
    exportedAt: new Date().toISOString(),
    courses: getUserCourses(),
    reviews: getSavedReviews()
  }, null, 2);
});

importDataButton.addEventListener("click", () => {
  try {
    const data = JSON.parse(adminDataBox.value);
    if (!Array.isArray(data.courses) || !Array.isArray(data.reviews)) {
      throw new Error("Invalid data shape");
    }
    saveUserCourses(data.courses);
    saveReviews(data.reviews);
    selectedCourse = getAllCourses()[0];
    renderCourseOptions();
    renderCourses(document.querySelector(".filter.is-active").dataset.filter);
    renderTimeline();
    renderReviews();
    renderAdmin();
    adminMessage.textContent = "JSONから復元しました。";
  } catch (error) {
    adminMessage.textContent = "JSONの形式を確認してください。";
  }
});

clearAllUserDataButton.addEventListener("click", () => {
  const ok = window.confirm("ユーザー作成コースと投稿レビューをすべて削除します。よろしいですか？");
  if (!ok) return;
  saveUserCourses([]);
  saveReviews([]);
  selectedCourse = defaultCourses[0];
  renderCourseOptions();
  renderCourses(document.querySelector(".filter.is-active").dataset.filter);
  renderTimeline();
  renderReviews();
  renderAdmin();
});

async function init() {
  const response = await fetch("cards.json");
  allCards = await response.json();
  renderCategoryOptions();
  renderCardOptions();
  renderBuilderPreview();
  renderCourseOptions();
  renderCourses();
  renderTimeline();
  renderReviews();
  if (adminUnlocked) openAdminPanel();
}

init().catch((error) => {
  builderMessage.textContent = "カードデータの読み込みに失敗しました。";
  console.error(error);
});
