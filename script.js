document.addEventListener("DOMContentLoaded", () => {
    const roles = document.querySelectorAll(".intro-role");
  
    gsap.set(".intro-text", { opacity: 0 });
    gsap.set(".revealer svg", { scale: 0 });
  
    gsap.set(".profile-img", {
      opacity: 0,
      y: 20,
    });
  
    gsap.set(".intro-base", {
      opacity: 0,
    });
  
    gsap.set(".name", {
      opacity: 0,
      y: 20,
    });
  
    gsap.set(roles, {
      opacity: 0,
      y: 20,
      display: "inline-block",
    });
  
    function playTextAnimation() {
      gsap.set(".intro-text", { opacity: 1 });
  
      gsap.to([".profile-img", ".intro-base"], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
  
        onComplete: () => {
          gsap.to([".name", ".intro-role"], {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          });
        },
      });
    }
  
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
                document.querySelector(".loader").remove();
                playTextAnimation();
              },
            });
          }
        },
      });
    });
  
    const languageSelect = document.getElementById("languages");
    const contentElements = document.querySelectorAll("[data-lang]");
  
    if (languageSelect) {
      languageSelect.addEventListener("change", (event) => {
        const selectedLanguage = event.target.value;
  
        contentElements.forEach((element) => {
          if (element.getAttribute("data-lang") === selectedLanguage) {
            element.style.display = "inline";
          } else {
            element.style.display = "none";
          }
        });
      });
    }
  
    const cursor = document.querySelector(".cursor");
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
  
    if (isMobile) {
      if (cursor) cursor.style.display = "none";
      document.body.style.cursor = "auto";
      return;
    }
  
    if (!cursor) return;
  
    const hoverElements = document.querySelectorAll(".hover-this");
  
    const animateit = function (e) {
      const span = this.querySelector("span");
      if (!span) return;
  
      const { offsetX: x, offsetY: y } = e;
      const { offsetWidth: width, offsetHeight: height } = this;
  
      const move = 25;
      const xMove = (x / width) * (move * 2) - move;
      const yMove = (y / height) * (move * 2) - move;
  
      span.style.transform = `translate(${xMove}px, ${yMove}px)`;
  
      if (e.type === "mouseleave") span.style.transform = "";
    };
  
    const editCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };
  
    const expandCursor = () => cursor.classList.add("expand");
    const shrinkCursor = () => cursor.classList.remove("expand");
  
    hoverElements.forEach((element) => {
      element.addEventListener("mousemove", animateit);
      element.addEventListener("mouseleave", animateit);
      element.addEventListener("mouseenter", expandCursor);
      element.addEventListener("mouseleave", shrinkCursor);
    });
  
    window.addEventListener("mousemove", editCursor);
  });