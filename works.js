document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("languages");
  const contentElements = document.querySelectorAll("[data-lang]");

  const cursor = document.querySelector(".cursor");
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const filterButtons = document.querySelectorAll(".work-filter");
  const workCards = document.querySelectorAll(".work-card");

  const menuToggle = document.querySelector("#menu-toggle");
  const mobileMenu = document.querySelector("#mobile-menu");
  const mobileClose = document.querySelector(".mobile-close");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");

  function getCurrentLanguage() {
    return languageSelect ? languageSelect.value : "en";
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;

    contentElements.forEach((element) => {
      element.style.display =
        element.getAttribute("data-lang") === lang ? "" : "none";
    });
  }

  if (languageSelect) {
    languageSelect.addEventListener("change", (event) => {
      applyLanguage(event.target.value);
    });
  }

  applyLanguage(getCurrentLanguage());

  menuToggle?.addEventListener("click", () => {
    mobileMenu?.classList.add("active");
  });

  mobileClose?.addEventListener("click", () => {
    mobileMenu?.classList.remove("active");
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu?.classList.remove("active");
    });
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      workCards.forEach((card) => {
        const category = card.dataset.category;

        if (filter === "all" || filter === category) {
          card.style.display = "grid";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  document.querySelectorAll(".work-thumb video").forEach((video) => {
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.play().catch(() => {});
  });

  if (isMobile) {
    if (cursor) cursor.style.display = "none";
    document.body.style.cursor = "auto";
    return;
  }

  if (!cursor) return;

  function editCursor(e) {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  }

  function expandCursor() {
    cursor.classList.add("expand");
  }

  function shrinkCursor() {
    cursor.classList.remove("expand");
  }

  const hoverElements = document.querySelectorAll(
    "header a, header select, footer a, .header-name-target, .work-card, .work-filter",
  );

  hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", expandCursor);
    element.addEventListener("mouseleave", shrinkCursor);
  });

  window.addEventListener("mousemove", editCursor);
});
