function forceScrollTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

forceScrollTop();

window.addEventListener("beforeunload", forceScrollTop);
window.addEventListener("pageshow", forceScrollTop);
window.addEventListener("load", forceScrollTop);

document.addEventListener("DOMContentLoaded", () => {
  forceScrollTop();

  gsap.registerPlugin(ScrollTrigger);

  document.body.classList.add("is-loading");
  forceScrollTop();
  ScrollTrigger.clearScrollMemory();

  const languageSelect = document.getElementById("languages");
  const contentElements = document.querySelectorAll("[data-lang]");

  const name = document.querySelector(".name-main");
  const headerName = document.querySelector(".header-name-target");
  const isaEl = document.querySelector(".typing-isa");
  const roles = document.querySelectorAll(".intro-role");

  const cursor = document.querySelector(".cursor");
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  let rolesReady = false;
  let introScrollTrigger = null;
  let galleryLanguageUpdater = null;

  const isaText = " is a";

  function getCurrentLanguage() {
    return languageSelect ? languageSelect.value : "en";
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;

    contentElements.forEach((element) => {
      element.style.display =
        element.getAttribute("data-lang") === lang ? "" : "none";
    });

    if (galleryLanguageUpdater) {
      galleryLanguageUpdater();
    }

    ScrollTrigger.refresh();
  }

  if (name) {
    name.innerHTML = name.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>",
    );
  }

  if (isaEl) {
    isaEl.textContent = "";
  }

  gsap.set(".intro-text", { opacity: 0 });
  gsap.set(".revealer svg", { scale: 0 });
  gsap.set(".profile-img", { opacity: 0, y: 20 });
  gsap.set(".intro-base", { opacity: 0 });
  gsap.set(".name-main .letter", { opacity: 0, y: 20 });
  gsap.set(roles, { opacity: 0, y: 20, display: "inline-block" });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function scrollToGallery() {
    const gallery = document.querySelector(".next-page");
    if (!gallery) return;

    window.scrollTo({
      top: gallery.offsetTop,
      behavior: "smooth",
    });
  }

  name?.addEventListener("click", scrollToTop);
  headerName?.addEventListener("click", scrollToTop);

  roles.forEach((role) => {
    role.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToGallery();
    });
  });

  const delays = [0.3, 0.8, 1.3];

  document.querySelectorAll(".revealer svg").forEach((el, i) => {
    gsap.to(el, {
      scale: 45,
      duration: 1.5,
      ease: "power4.inOut",
      delay: delays[i],
      onComplete: () => {
        if (i === delays.length - 1) {
          gsap.to(".loader", {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => {
              forceScrollTop();
              document.querySelector(".loader")?.remove();
              document.body.classList.remove("is-loading");
              playIntroAnimation();
            },
          });
        }
      },
    });
  });

  function typeText(el, text, speed = 70, onComplete) {
    if (!el) {
      if (onComplete) onComplete();
      return;
    }

    let i = 0;
    el.textContent = "";

    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else if (onComplete) {
        onComplete();
      }
    }

    type();
  }

  function playIntroAnimation() {
    gsap.set(".intro-text", { opacity: 1 });

    gsap.to([".profile-img", ".intro-base"], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.to(".name-main .letter", {
      opacity: 1,
      duration: 0.05,
      stagger: 0.08,
      ease: "none",
      onComplete: () => {
        typeText(isaEl, isaText, 70, () => {
          gsap.to(roles, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
            onComplete: () => {
              rolesReady = true;
              initScrollAnimation();
              initGalleryAnimation();
              applyLanguage(getCurrentLanguage());
              ScrollTrigger.refresh();
            },
          });
        });
      },
    });
  }

  function initScrollAnimation() {
    const nameMain = document.querySelector(".name-main");
    const target = document.querySelector(".header-name-target");
    const fadeEls = document.querySelectorAll(".fade-on-scroll, .profile-img");

    if (!nameMain || !target) return;
    if (introScrollTrigger) introScrollTrigger.kill();

    const getMove = () => {
      gsap.set(nameMain, { x: 0, y: 0 });

      const nameRect = nameMain.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      return {
        x:
          targetRect.left +
          targetRect.width / 2 -
          (nameRect.left + nameRect.width / 2),
        y:
          targetRect.top +
          targetRect.height / 2 -
          (nameRect.top + nameRect.height / 2),
      };
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,

        onUpdate: (self) => {
          if (self.progress > 0.985) {
            gsap.set(target, { opacity: 1 });
            gsap.set(nameMain, { opacity: 0 });
          } else {
            gsap.set(target, { opacity: 0 });
            gsap.set(nameMain, { opacity: 1 });
          }
        },
      },
    });

    introScrollTrigger = tl.scrollTrigger;

    tl.to(
      fadeEls,
      {
        opacity: 0,
        y: -30,
        ease: "none",
      },
      0,
    ).to(
      nameMain,
      {
        x: () => getMove().x,
        y: () => getMove().y,
        ease: "none",
      },
      0,
    );
  }

  function initGalleryAnimation() {
    const section = document.querySelector(".next-page");
    if (!section || section.dataset.ready === "true") return;
    section.dataset.ready = "true";

    const minimap = section.querySelector(".minimap");
    const indicator = section.querySelector(".indicator");
    const itemElements = section.querySelectorAll(".item");
    const preview = section.querySelector(".img-preview");
    const titleEl = section.querySelector(".gallery-title");
    const subtitleEl = section.querySelector(".gallery-subtitle");

    if (!minimap || !indicator || !preview || !titleEl || !subtitleEl) return;
    if (!itemElements.length) return;

    let currentIndex = 0;
    let isInsideGallery = false;
    let isAnimating = false;
    let lastWheelTime = 0;

    const activeOpacity = 0.3;
    const wheelCooldown = 550;

    function isMobileGallery() {
      return window.innerWidth <= 768;
    }

    function updateIndicator(index) {
      const item = itemElements[0];
      const itemSize = isMobileGallery()
        ? item.getBoundingClientRect().width
        : item.getBoundingClientRect().height;

      gsap.to(indicator, {
        x: isMobileGallery() ? index * itemSize : 0,
        y: isMobileGallery() ? 0 : index * itemSize,
        duration: 0.45,
        ease: "power3.out",
      });
    }

    function updateMiniOpacity(index) {
      itemElements.forEach((item, i) => {
        const media = item.querySelector("img, video");
        if (!media) return;
        media.style.opacity = i === index ? activeOpacity : "1";
      });
    }

    function getProjectText(item) {
      const lang = getCurrentLanguage();

      const title =
        lang === "zh"
          ? item.dataset.titleZh || item.dataset.title
          : item.dataset.titleEn || item.dataset.title;

      const subtitle =
        lang === "zh"
          ? item.dataset.subtitleZh || item.dataset.subtitle
          : item.dataset.subtitleEn || item.dataset.subtitle;

      return { title, subtitle };
    }

    function updateText(index, animate = true) {
      const item = itemElements[index];
      if (!item) return;

      const { title, subtitle } = getProjectText(item);

      function updateSubtitleClasses() {
        subtitleEl.classList.toggle(
          "subtitle-zh",
          getCurrentLanguage() === "zh",
        );
      }

      if (!animate) {
        titleEl.textContent = title;
        subtitleEl.innerHTML = subtitle;
        updateSubtitleClasses();
        gsap.set(titleEl, { opacity: 1, y: 0 });
        gsap.set(subtitleEl, { opacity: 0.65, y: 0 });
        return;
      }

      gsap.to([titleEl, subtitleEl], {
        opacity: 0,
        y: -6,
        duration: 0.15,
        ease: "power2.out",
        onComplete: () => {
          titleEl.textContent = title;
          subtitleEl.innerHTML = subtitle;
          updateSubtitleClasses();

          gsap.fromTo(
            [titleEl, subtitleEl],
            { opacity: 0, y: 6 },
            {
              opacity: (i) => (i === 0 ? 1 : 0.65),
              y: 0,
              duration: 0.22,
              ease: "power2.out",
            },
          );
        },
      });
    }

    function updatePreview(index) {
      const item = itemElements[index];
      const media = item.querySelector("img, video");
      if (!media) return;

      const clone = media.cloneNode(true);

      clone.muted = true;
      clone.loop = true;
      clone.playsInline = true;
      clone.autoplay = true;

      gsap.to(preview, {
        opacity: 0,
        duration: 0.12,
        ease: "power2.out",
        onComplete: () => {
          preview.innerHTML = "";
          preview.appendChild(clone);

          if (clone.tagName.toLowerCase() === "video") {
            clone.play();
          }

          gsap.to(preview, {
            opacity: 1,
            duration: 0.2,
            ease: "power2.out",
          });
        },
      });
    }

    function setProject(index) {
      if (isAnimating) return;
      if (index < 0 || index >= itemElements.length) return;
      if (index === currentIndex) return;

      isAnimating = true;
      currentIndex = index;

      updateMiniOpacity(index);
      updateIndicator(index);
      updateText(index);
      updatePreview(index);

      setTimeout(() => {
        isAnimating = false;
      }, wheelCooldown);
    }

    galleryLanguageUpdater = () => {
      updateText(currentIndex, false);
    };

    ScrollTrigger.create({
      trigger: section,
      start: "top bottom",
      end: "top top",
      scrub: true,
      onUpdate: (self) => {
        gsap.set(minimap, {
          opacity: self.progress,
        });
      },
    });

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${window.innerHeight * 2}`,
      pin: true,
      pinSpacing: true,
      invalidateOnRefresh: true,

      onEnter: () => {
        isInsideGallery = true;
      },
      onEnterBack: () => {
        isInsideGallery = true;
      },
      onLeave: () => {
        isInsideGallery = false;
      },
      onLeaveBack: () => {
        isInsideGallery = false;
      },
    });

    section.addEventListener(
      "wheel",
      (e) => {
        if (!isInsideGallery) return;

        if (e.deltaY < 0 && currentIndex === 0) return;

        e.preventDefault();

        const now = Date.now();
        if (now - lastWheelTime < wheelCooldown) return;
        lastWheelTime = now;

        if (e.deltaY > 8) {
          setProject(currentIndex + 1);
        } else if (e.deltaY < -8) {
          setProject(currentIndex - 1);
        }
      },
      { passive: false },
    );

    function openProject(item) {
      if (item?.dataset.projectUrl) {
        window.location.href = item.dataset.projectUrl;
      }
    }

    itemElements.forEach((item, index) => {
      item.addEventListener("click", () => {
        if (index === currentIndex) {
          openProject(item);
        } else {
          setProject(index);
        }
      });

      item.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        openProject(item);
      });
    });

    [preview, titleEl].forEach((element) => {
      element.addEventListener("click", () => {
        openProject(itemElements[currentIndex]);
      });
    });

    window.addEventListener("resize", () => {
      updateIndicator(currentIndex);
    });

    updateMiniOpacity(0);
    updateIndicator(0);
    updateText(0, false);
  }

  document.querySelectorAll(".intro-role").forEach((role) => {
    role.addEventListener("click", (e) => {
      e.preventDefault();

      document.querySelector(".next-page")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  if (languageSelect) {
    languageSelect.addEventListener("change", (event) => {
      applyLanguage(event.target.value);
    });
  }

  applyLanguage(getCurrentLanguage());

  const menuToggle = document.querySelector("#menu-toggle");
  const mobileMenu = document.querySelector("#mobile-menu");
  const mobileClose = document.querySelector(".mobile-close");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");

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

  const preview = document.querySelector(".role-preview");
  const previewImg = document.querySelector(".preview-image");
  const previewVideo = document.querySelector(".preview-video");
  const imageHoverItems = document.querySelectorAll(".image-hover");

  function isVideo(src) {
    return /\.(mp4|mov|webm|ogg)$/i.test(src);
  }

  imageHoverItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      if (!rolesReady || !preview || !previewImg || !previewVideo) return;

      const assets = item.dataset.assets
        .split(",")
        .map((src) => src.trim())
        .filter(Boolean);

      const randomSrc = assets[Math.floor(Math.random() * assets.length)];

      if (isVideo(randomSrc)) {
        previewImg.style.display = "none";
        previewVideo.style.display = "block";
        previewVideo.src = randomSrc;
        previewVideo.currentTime = 0;
        previewVideo.play();
      } else {
        previewVideo.pause();
        previewVideo.removeAttribute("src");
        previewVideo.load();
        previewVideo.style.display = "none";

        previewImg.style.display = "block";
        previewImg.src = randomSrc;
      }

      const rect = item.getBoundingClientRect();
      const previewW = 260;
      const previewH = 200;

      const x = gsap.utils.clamp(
        12,
        window.innerWidth - previewW - 12,
        rect.left + gsap.utils.random(-120, 120),
      );

      const y = gsap.utils.clamp(
        12,
        window.innerHeight - previewH - 12,
        rect.top + gsap.utils.random(-120, 120),
      );

      gsap.set(preview, {
        x,
        y,
        scale: 0.85,
      });

      gsap.to(preview, {
        opacity: 1,
        scale: 1,
        duration: 0.45,
        ease: "power3.out",
      });
    });

    item.addEventListener("mouseleave", () => {
      previewVideo?.pause();

      if (!preview) return;

      gsap.to(preview, {
        opacity: 0,
        scale: 0.85,
        duration: 0.3,
        ease: "power3.out",
      });
    });
  });

  if (isMobile) {
    if (cursor) cursor.style.display = "none";
    document.body.style.cursor = "auto";
    return;
  }

  if (!cursor) return;

  const editCursor = (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  };

  const expandCursor = () => {
    cursor.classList.add("expand");
  };

  const shrinkCursor = () => {
    cursor.classList.remove("expand");
  };

  const hoverElements = document.querySelectorAll(
    ".hover-this, .magnetic-name, .header-name-target, header a, header select, footer a, .item, .gallery-title, .img-preview",
  );

  function magneticMove(e) {
    if (
      this.matches("select") ||
      this.matches(".header-name-target") ||
      this.matches(".item") ||
      this.matches(".gallery-title") ||
      this.matches(".img-preview")
    ) {
      return;
    }

    const target = this.querySelector("span") || this;
    if (!target) return;

    const rect = this.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const move = 25;
    const xMove = (x / rect.width) * (move * 2) - move;
    const yMove = (y / rect.height) * (move * 2) - move;

    target.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === "mouseleave") {
      target.style.transform = "";
    }
  }

  hoverElements.forEach((element) => {
    element.addEventListener("mousemove", magneticMove);
    element.addEventListener("mouseleave", magneticMove);
    element.addEventListener("mouseenter", expandCursor);
    element.addEventListener("mouseleave", shrinkCursor);
  });

  window.addEventListener("mousemove", editCursor);

  document.querySelectorAll(".project-img").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item, {
        scale: 1.04,
        duration: 0.35,
        ease: "power3.out",
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        scale: 1,
        duration: 0.35,
        ease: "power3.out",
      });
    });
  });

  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });
});

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});
