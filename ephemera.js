const ephemeraProjects = [
  {
    id: "we-clean-what-remains",
    category: { en: "Games & Interactive Experiences", zh: "游戏与互动体验" },
    title: { en: "We Clean What Remains", zh: "我们清理残余物" },
    image: "wcwrassets/wcwr3.gif",
    href: "project.html?id=we-clean-what-remains",
    size: "large",
    offsetX: 0,
    offsetY: 0,
    rotation: -0.4,
  },
  {
    id: "labyrinth",
    category: { en: "Games & Interactive Experiences", zh: "游戏与互动体验" },
    title: { en: "LABYRINTH", zh: "迷宫" },
    image: "mazeassets/design1.png",
    href: "project.html?id=labyrinth",
    size: "medium",
    offsetX: 14,
    offsetY: 34,
    rotation: 0.5,
  },
  {
    id: "spinphony",
    category: { en: "Games & Interactive Experiences", zh: "游戏与互动体验" },
    title: { en: "Spinphony", zh: "旋转交响" },
    image: "Spinphonyassets/visual1.png",
    href: "project.html?id=spinphony",
    size: "small",
    offsetX: -8,
    offsetY: -10,
    rotation: -0.7,
  },
  {
    id: "office",
    category: { en: "Games & Interactive Experiences", zh: "游戏与互动体验" },
    title: { en: "Queen of Hearts in the Office", zh: "红心皇后办公室加班" },
    image: "qhio/alice.gif",
    href: "project.html?id=office",
    size: "large",
    offsetX: 10,
    offsetY: 18,
    rotation: 0.3,
  },
  {
    id: "desktop",
    category: { en: "Games & Interactive Experiences", zh: "游戏与互动体验" },
    title: { en: "Desktop??", zh: "桌面？？" },
    image: "asset/web.gif",
    href: "project.html?id=desktop",
    size: "medium",
    offsetX: -12,
    offsetY: 42,
    rotation: -0.2,
  },
  {
    id: "lost-and-found",
    category: { en: "Creative Coding & Experiments", zh: "创意编程与实验" },
    title: { en: "Lost and Found", zh: "失物招领" },
    image: "creative-coding-pages-assets/Project1LOST&FOUND.png",
    href: "creative-coding-pages/p01.html",
    size: "large",
    offsetX: -6,
    offsetY: 28,
    rotation: -0.5,
  },
  {
    id: "form-generator",
    category: { en: "Creative Coding & Experiments", zh: "创意编程与实验" },
    title: { en: "Form Generator", zh: "表单生成器" },
    image: "creative-coding-pages-assets/Project2cat.png",
    href: "creative-coding-pages/p02.html",
    size: "small",
    offsetX: -4,
    offsetY: 22,
    rotation: -0.8,
  },
  {
    id: "experimental-clock",
    category: { en: "Creative Coding & Experiments", zh: "创意编程与实验" },
    title: { en: "Experimental Clock", zh: "实验性时钟" },
    image: "creative-coding-pages-assets/Project3EXPERIMENTAL-CLOCK.png",
    href: "creative-coding-pages/p03.html",
    size: "medium",
    offsetX: 9,
    offsetY: 38,
    rotation: 0.6,
  },
  {
    id: "exquisite-corpse",
    category: { en: "Creative Coding & Experiments", zh: "创意编程与实验" },
    title: { en: "Exquisite Corpse", zh: "精美尸体" },
    image: "creative-coding-pages-assets/Project4EXQUISITE-CORPSE.png",
    href: "creative-coding-pages/p04.html",
    size: "large",
    offsetX: 10,
    offsetY: 18,
    rotation: 0.3,
  },
  {
    id: "optical-illusion",
    category: { en: "Creative Coding & Experiments", zh: "创意编程与实验" },
    title: { en: "Optical Illusion", zh: "视觉错误" },
    image: "creative-coding-pages-assets/Project5OPTICAL-ILLUSION.png",
    href: "creative-coding-pages/p05.html",
    size: "medium",
    offsetX: 12,
    offsetY: -8,
    rotation: 0.4,
  },
  {
    id: "data-portrait",
    category: { en: "Creative Coding & Experiments", zh: "创意编程与实验" },
    title: { en: "Data Portrait", zh: "数据肖像" },
    image: "creative-coding-pages-assets/Project6DATA-PORTRAIT.png",
    href: "creative-coding-pages/p06.html",
    size: "small",
    offsetX: 8,
    offsetY: 5,
    rotation: 0.8,
  },
  {
    id: "autobiographical-game",
    category: { en: "Creative Coding & Experiments", zh: "创意编程与实验" },
    title: { en: "Autobiographical Game", zh: "自传式游戏" },
    image: "creative-coding-pages-assets/Project7AUTOBIOGRAPHICAL-GAME.png",
    href: "creative-coding-pages/p07.html",
    size: "large",
    offsetX: -9,
    offsetY: 4,
    rotation: -0.3,
  },
  {
    id: "experimental-camera",
    category: { en: "Creative Coding & Experiments", zh: "创意编程与实验" },
    title: { en: "Experimental Camera", zh: "实验性相机" },
    image: "indexAsset/bg3.png",
    href: "creative-coding-pages/p08.html",
    size: "small",
    offsetX: 11,
    offsetY: 30,
    rotation: 0.7,
  },
  {
    id: "consentful-interface",
    category: { en: "Creative Coding & Experiments", zh: "创意编程与实验" },
    title: { en: "Consentful Interface", zh: "知情同意界面" },
    image: "indexAsset/bg2.png",
    href: "creative-coding-pages/p09.html",
    size: "medium",
    offsetX: -5,
    offsetY: -6,
    rotation: -0.6,
  },
  {
    id: "and-yet-i-miss-you",
    category: { en: "Editorial & Graphic Design", zh: "编辑与平面设计" },
    title: { en: "And Yet I Miss You", zh: "然而我仍想念你" },
    image: "indexAsset/1.png",
    href: "#",
    size: "large",
    offsetX: -9,
    offsetY: 4,
    rotation: -0.3,
  },
  {
    id: "my-small-stubborn-steps",
    category: { en: "Editorial & Graphic Design", zh: "编辑与平面设计" },
    title: { en: "My Small, Stubborn Steps", zh: "我微小而固执的脚步" },
    image: "indexAsset/2.png",
    href: "#",
    size: "small",
    offsetX: 11,
    offsetY: 30,
    rotation: 0.7,
  },
  {
    id: "romance-scams-unmasked",
    category: { en: "Editorial & Graphic Design", zh: "编辑与平面设计" },
    title: { en: "Romance Scams: Unmasked", zh: "爱情骗局：揭下面具" },
    image: "indexAsset/3.png",
    href: "#",
    size: "medium",
    offsetX: -5,
    offsetY: -6,
    rotation: -0.6,
  },
  {
    id: "stay-dangerous",
    category: { en: "Editorial & Graphic Design", zh: "编辑与平面设计" },
    title: { en: "Stay Dangerous", zh: "保持危险" },
    image: "indexAsset/4.png",
    href: "#",
    size: "large",
    offsetX: 7,
    offsetY: 24,
    rotation: 0.4,
  },
  {
    id: "found-alphabet",
    category: { en: "Editorial & Graphic Design", zh: "编辑与平面设计" },
    title: { en: "Found Alphabet", zh: "发现的字母" },
    image: "indexAsset/5.png",
    href: "#",
    size: "small",
    offsetX: -8,
    offsetY: 14,
    rotation: -0.9,
  },
  {
    id: "crying-in-h-mart",
    category: { en: "Editorial & Graphic Design", zh: "编辑与平面设计" },
    title: { en: "Crying in H Mart", zh: "在 H Mart 哭泣" },
    image: "indexAsset/6.png",
    href: "#",
    size: "medium",
    offsetX: 10,
    offsetY: 38,
    rotation: 0.5,
  },
  {
    id: "flowerful",
    category: { en: "Editorial & Graphic Design", zh: "编辑与平面设计" },
    title: { en: "flowerful", zh: "花意盎然" },
    image: "indexAsset/7.png",
    href: "#",
    size: "large",
    offsetX: -6,
    offsetY: 2,
    rotation: -0.4,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const languageStorageKey = "portfolio-language";
  const languageSelect = document.getElementById("languages");
  const gallery = document.querySelector(".ephemera-gallery");
  const index = document.querySelector(".ephemera-index");
  const mobileQuery = window.matchMedia("(max-width: 768px)");
  let isMobile = mobileQuery.matches;

  function getSavedLanguage() {
    try {
      const saved = localStorage.getItem(languageStorageKey);
      return saved === "en" || saved === "zh" ? saved : null;
    } catch {
      return null;
    }
  }

  function saveLanguage(lang) {
    try {
      localStorage.setItem(languageStorageKey, lang);
    } catch {
      // Language switching remains available when storage is blocked.
    }
  }

  function language() {
    return languageSelect?.value === "zh" ? "zh" : "en";
  }

  function translated(value) {
    return value?.[language()] || value?.en || "";
  }

  function createTranslationSpans(value) {
    return ["en", "zh"].map((lang) => {
      const span = document.createElement("span");
      span.dataset.lang = lang;
      span.textContent = value?.[lang] || value?.en || "";
      if (lang !== language()) span.style.display = "none";
      return span;
    });
  }

  function configureLink(link, project) {
    link.href = project.href || "#";
    if (/^https?:\/\//i.test(project.href || "")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  }

  function createGalleryCard(project) {
    const card = document.createElement("a");
    card.className = "ephemera-card";
    card.dataset.projectId = project.id;
    card.dataset.size = project.size;
    card.style.setProperty("--offset-x", `${project.offsetX}px`);
    card.style.setProperty("--offset-y", `${project.offsetY}px`);
    card.style.setProperty("--rotation", `${project.rotation || 0}deg`);
    configureLink(card, project);

    const figure = document.createElement("figure");
    const media = document.createElement("div");
    media.className = "ephemera-media";
    const image = document.createElement("img");
    image.src = project.image;
    image.loading = "lazy";
    image.alt = translated(project.title);
    const caption = document.createElement("figcaption");
    caption.append(...createTranslationSpans(project.title));
    media.append(image);
    figure.append(media, caption);
    card.append(figure);
    return card;
  }

  function groupProjects() {
    const groups = new Map();
    ephemeraProjects.forEach((project) => {
      const key = project.category.en;
      if (!groups.has(key))
        groups.set(key, { category: project.category, projects: [] });
      groups.get(key).projects.push(project);
    });
    return [...groups.values()];
  }

  function createIndexCategory(group) {
    const wrapper = document.createElement("div");
    wrapper.className = "ephemera-category";
    const heading = document.createElement("h2");
    heading.append(...createTranslationSpans(group.category));
    const list = document.createElement("ol");

    group.projects.forEach((project, position) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.className = "ephemera-project-link";
      link.dataset.projectId = project.id;
      configureLink(link, project);
      const number = document.createElement("span");
      number.className = "ephemera-number";
      number.textContent = `${String(position + 1).padStart(2, "0")}—`;
      link.append(number, ...createTranslationSpans(project.title));
      item.append(link);
      list.append(item);
    });

    wrapper.append(heading, list);
    return wrapper;
  }

  function updateLanguage() {
    const lang = language();
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-lang]").forEach((element) => {
      element.style.display = element.dataset.lang === lang ? "" : "none";
    });
    document.querySelectorAll(".ephemera-card img").forEach((image) => {
      const project = ephemeraProjects.find(
        (item) =>
          item.id === image.closest(".ephemera-card")?.dataset.projectId,
      );
      if (project) image.alt = translated(project.title);
    });
    document.querySelectorAll("[data-project-id]").forEach((link) => {
      const project = ephemeraProjects.find(
        (item) => item.id === link.dataset.projectId,
      );
      if (project && link.matches("a")) {
        link.setAttribute(
          "aria-label",
          lang === "zh"
            ? `查看项目：${project.title.zh}`
            : `View project: ${project.title.en}`,
        );
      }
    });
  }

  function render() {
    if (!gallery || !index) return;
    const galleryInner = document.createElement("div");
    galleryInner.className = "ephemera-gallery-inner";
    galleryInner.append(...ephemeraProjects.map(createGalleryCard));
    gallery.replaceChildren(galleryInner);
    index.replaceChildren(...groupProjects().map(createIndexCategory));
    updateLanguage();
  }

  function bindProjectInteractions() {
    const elements = document.querySelectorAll("[data-project-id]");
    function highlight(projectId) {
      gallery?.classList.add("is-filtering");
      index?.classList.add("is-filtering");
      document
        .querySelectorAll(`[data-project-id="${projectId}"]`)
        .forEach((element) => {
          element.classList.add("is-highlighted");
        });
    }
    function clearHighlight() {
      gallery?.classList.remove("is-filtering");
      index?.classList.remove("is-filtering");
      elements.forEach((element) => element.classList.remove("is-highlighted"));
    }
    elements.forEach((element) => {
      element.addEventListener("mouseenter", () =>
        highlight(element.dataset.projectId),
      );
      element.addEventListener("mouseleave", clearHighlight);
      element.addEventListener("focus", () =>
        highlight(element.dataset.projectId),
      );
      element.addEventListener("blur", clearHighlight);
      element.addEventListener("click", (event) => {
        if (element.getAttribute("href") === "#") event.preventDefault();
      });
    });
  }

  function setupMobileMenu() {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");
    const close = document.querySelector(".mobile-close");
    function setOpen(open) {
      menu?.classList.toggle("active", open);
      menu?.setAttribute("aria-hidden", String(!open));
      toggle?.setAttribute("aria-expanded", String(open));
    }
    toggle?.addEventListener("click", () => setOpen(true));
    close?.addEventListener("click", () => setOpen(false));
    menu?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });
  }

  function setupCursor() {
    const cursor = document.querySelector(".cursor");
    if (!cursor) return;
    function updateCursorMode() {
      isMobile = mobileQuery.matches;
      cursor.style.display = isMobile ? "none" : "block";
    }
    window.addEventListener("mousemove", (event) => {
      if (!isMobile) {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
      }
    });
    document.querySelectorAll("a, button, select").forEach((element) => {
      element.addEventListener("mouseenter", () => {
        if (!isMobile) cursor.classList.add("expand");
      });
      element.addEventListener("mouseleave", () =>
        cursor.classList.remove("expand"),
      );
    });
    mobileQuery.addEventListener?.("change", updateCursorMode);
    updateCursorMode();
  }

  const savedLanguage = getSavedLanguage();
  if (languageSelect && savedLanguage) languageSelect.value = savedLanguage;
  render();
  bindProjectInteractions();
  setupMobileMenu();
  setupCursor();

  languageSelect?.addEventListener("change", (event) => {
    saveLanguage(event.target.value);
    updateLanguage();
  });
});
