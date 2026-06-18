document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const name = document.querySelector(".name-main");
  const headerName = document.querySelector(".header-name-target");
  const isaEl = document.querySelector(".typing-isa");
  const roles = document.querySelectorAll(".intro-role");
  const cursor = document.querySelector(".cursor");
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  let rolesReady = false;
  let introScrollTrigger = null;
  const isaText = "是一位从事";

  initSetup();
  initLoader();
  initNavigation();
  initMobileMenu();
  initHoverPreview();
  initCursor();

  function initSetup() {
    name.innerHTML = name.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>",
    );

    isaEl.textContent = "";

    gsap.set(".intro-text", { opacity: 0 });
    gsap.set(".revealer svg", { scale: 0 });
    gsap.set(".profile-img", { opacity: 0, y: 20 });
    gsap.set(".intro-base", { opacity: 0 });
    gsap.set(".name-main .letter", { opacity: 0, y: 20 });
    gsap.set(roles, { opacity: 0, y: 20, display: "inline-block" });
  }

  function initLoader() {
    const delays = [0.3, 0.8, 1.3];

    document.querySelectorAll(".revealer svg").forEach((el, i) => {
      gsap.to(el, {
        scale: 45,
        duration: 1.5,
        ease: "power4.inOut",
        delay: delays[i],
        onComplete: () => {
          if (i !== delays.length - 1) return;

          gsap.to(".loader", {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => {
              document.querySelector(".loader")?.remove();
              playIntroAnimation();
            },
          });
        },
      });
    });
  }

  function typeText(el, text, speed = 70, onComplete) {
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
              ScrollTrigger.refresh();
            },
          });
        });
      },
    });
  }

  function initNavigation() {
    name.addEventListener("click", scrollToTop);
    headerName.addEventListener("click", scrollToTop);

    roles.forEach((role) => {
      role.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToGallery();
      });
    });
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function scrollToGallery() {
    const gallery = document.querySelector(".next-page");
    if (!gallery) return;

    gallery.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function initMobileMenu() {
    const menuToggle = document.querySelector("#menu-toggle");
    const mobileMenu = document.querySelector("#mobile-menu");
    const mobileClose = document.querySelector(".mobile-close");
    const mobileLinks = document.querySelectorAll(".mobile-menu a");

    menuToggle?.addEventListener("click", () => {
      mobileMenu.classList.add("active");
    });

    mobileClose?.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
      });
    });
  }

  function initScrollAnimation() {
    const nameMain = document.querySelector(".name-main");
    const target = document.querySelector(".header-name-target");
    const fadeEls = document.querySelectorAll(".fade-on-scroll, .profile-img");

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

    const projectIndex = document.querySelector(".project-index h1");
    const projectImgs = document.querySelectorAll(".project-img");
    const imagesContainer = document.querySelector(".project-images");
    const projectNames = document.querySelectorAll(".project-names p");
    const namesContainer = document.querySelector(".project-names");
    const total = projectNames.length;

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${window.innerHeight * 4}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const rootStyle = getComputedStyle(document.documentElement);

        const headerH = parseFloat(
          rootStyle.getPropertyValue("--header-height"),
        );
        const footerH = parseFloat(
          rootStyle.getPropertyValue("--footer-height"),
        );

        const safeTop = headerH + 55;
        const safeBottom = footerH + 55;
        const safeHeight = window.innerHeight - safeTop - safeBottom;

        const moveDistanceIndex = safeHeight - projectIndex.offsetHeight;
        const moveDistanceNames = safeHeight - namesContainer.offsetHeight;
        const moveDistanceImages = safeHeight - imagesContainer.scrollHeight;
        const imgActivationThreshold = safeTop + safeHeight / 2;

        const currentIndex = Math.min(Math.floor(progress * total) + 1, total);

        projectIndex.textContent = `${String(currentIndex).padStart(
          2,
          "0",
        )}/${String(total).padStart(2, "0")}`;

        gsap.set(projectIndex, {
          y: progress * moveDistanceIndex,
        });

        gsap.set(imagesContainer, {
          y: progress * moveDistanceImages,
        });

        projectImgs.forEach((img) => {
          const rect = img.getBoundingClientRect();
          const isActive =
            rect.top <= imgActivationThreshold &&
            rect.bottom >= imgActivationThreshold;

          gsap.set(img, {
            opacity: isActive ? 1 : 0.35,
          });
        });

        projectNames.forEach((p, index) => {
          const start = index / total;
          const end = (index + 1) / total;

          const projectProgress = gsap.utils.clamp(
            0,
            1,
            (progress - start) / (end - start),
          );

          gsap.set(p, {
            y: -projectProgress * moveDistanceNames,
            color:
              projectProgress > 0 && projectProgress < 1
                ? "var(--green)"
                : "rgba(3, 112, 53, 0.35)",
          });
        });
      },
    });
  }

  function initHoverPreview() {
    const preview = document.querySelector(".role-preview");
    const previewImg = document.querySelector(".preview-image");
    const previewVideo = document.querySelector(".preview-video");
    const imageHoverItems = document.querySelectorAll(".image-hover");

    function isVideo(src) {
      return /\.(mp4|mov|webm|ogg)$/i.test(src);
    }

    imageHoverItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        if (!rolesReady) return;

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

        gsap.set(preview, {
          x: rect.left + gsap.utils.random(-200, 200),
          y: rect.top + gsap.utils.random(-200, 200),
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
        previewVideo.pause();

        gsap.to(preview, {
          opacity: 0,
          scale: 0.85,
          duration: 0.3,
          ease: "power3.out",
        });
      });
    });
  }

  function initCursor() {
    if (isMobile) {
      if (cursor) cursor.style.display = "none";
      document.body.style.cursor = "auto";
      return;
    }

    if (!cursor) return;

    const hoverElements = document.querySelectorAll(
      ".hover-this, .name-main, .header-name-target, header a, footer a, .project-img, .project-name-inner",
    );

    const cursorOnlyElements = document.querySelectorAll(
      ".header-name-target, .project-name-inner",
    );

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

    function magneticMove(e) {
      if (
        this.matches(".header-name-target") ||
        this.matches(".project-name-inner")
      ) {
        return;
      }

      const target = this.querySelector("span") || this;
      if (!target) return;

      const { offsetX: x, offsetY: y } = e;
      const { offsetWidth: width, offsetHeight: height } = this;

      const move = 25;
      const xMove = (x / width) * (move * 2) - move;
      const yMove = (y / height) * (move * 2) - move;

      target.style.transform = `translate(${xMove}px, ${yMove}px)`;

      if (e.type === "mouseleave") {
        target.style.transform = "";
      }
    }

    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", expandCursor);
      element.addEventListener("mouseleave", shrinkCursor);
      element.addEventListener("mousemove", magneticMove);
      element.addEventListener("mouseleave", magneticMove);
    });

    cursorOnlyElements.forEach((element) => {
      element.addEventListener("mousemove", () => {});
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
  }

  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });
});
