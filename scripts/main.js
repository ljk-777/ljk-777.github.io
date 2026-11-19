(() => {
  const languageButton = document.querySelector("#language-toggle");
  const themeButton = document.querySelector("#theme-toggle");
  const pageTools = document.querySelector(".page-tools");
  const translatedNodes = [...document.querySelectorAll("[data-i18n]")];
  const english = new Map(translatedNodes.map((node) => [node, node.textContent]));
  const chinese = {
    skip: "跳到正文",
    affiliation: "计算机科学与技术本科生 · 北京邮电大学",
    introStart: "我目前是",
    bupt: "北京邮电大学",
    introVisionStart: "计算机科学与技术专业大三本科生，曾与",
    advisorGuoxin: "张国欣",
    introGuoxinThanks: "合作开展计算机视觉研究，并感谢他引导我进入视觉语言动作模型（VLA）研究领域",
    introAutoLabStart: "。目前也在",
    labUniversitySeparator: "（",
    sjtu: "上海交通大学",
    introAdvisor: "）担任远程科研助理，在",
    advisorZhang: "张志鹏教授",
    introEnd: "指导下参与机器人上下文学习研究。",
    introResearch: "我的研究兴趣包括计算机视觉、机器人学习、视觉语言动作模型（VLA）与强化学习，尤其关注机器人如何利用示范和上下文信息，实现策略适配与泛化。",
    researchTitle: "研究",
    viewFigure: "查看完整框架图",
    underReview: " · 在审",
    educationTitle: "教育背景",
    educationDate: "2024.09 – 至今",
    degree: "计算机学院 · 计算机科学与技术专业本科生",
    educationDetails: "大二学年排名：5 / 359（前 1.39%） · 本科生优秀奖学金",
    experienceTitle: "科研实习",
    experiencePeriod: "进行中",
    experienceRole: "科研助理 · 远程",
    experienceAdvisor: "指导老师：",
    experienceDescription: "参与机器人上下文学习研究，关注策略适配以及跨任务、跨环境泛化。",
  };

  let language = "en";
  try { language = localStorage.getItem("marine-homepage-language") === "zh" ? "zh" : "en"; } catch { /* Preferences are optional. */ }

  function updateThemeButton() {
    const dark = document.documentElement.dataset.theme === "dark";
    const label = language === "zh" ? (dark ? "切换到浅色模式" : "切换到夜间模式") : (dark ? "Switch to light mode" : "Switch to dark mode");
    themeButton.setAttribute("aria-pressed", String(dark));
    themeButton.setAttribute("aria-label", label);
    themeButton.title = label;
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    for (const node of translatedNodes) {
      node.textContent = language === "zh" ? (chinese[node.dataset.i18n] ?? english.get(node)) : english.get(node);
    }
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    languageButton.textContent = language === "zh" ? "EN" : "中文";
    languageButton.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
    pageTools.setAttribute("aria-label", language === "zh" ? "页面偏好设置" : "Page preferences");
    updateThemeButton();
  }

  languageButton.hidden = false;
  themeButton.hidden = false;
  setLanguage(language);
  languageButton.addEventListener("click", () => {
    setLanguage(language === "en" ? "zh" : "en");
    try { localStorage.setItem("marine-homepage-language", language); } catch { /* Keep the page usable without storage. */ }
  });
  themeButton.addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#191c22" : "#ffffff";
    updateThemeButton();
    try { localStorage.setItem("marine-homepage-theme", theme); } catch { /* The current visit still supports theme switching. */ }
  });
})();
