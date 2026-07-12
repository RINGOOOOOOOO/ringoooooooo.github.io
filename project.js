const projects = {
  "we-clean-what-remains": {
    title: { en: "We Clean What Remains", zh: "我们清理残余物" },
    meta: {
      en: "Unity — 2026",
      zh: "Unity — 2026",
    },
    tags: {
      en: ["game", "voice recognition", "API integration"],
      zh: ["游戏", "语音识别", "API集成"],
    },
    description: {
      en: "A simple experiential game about sound and magic.\n\nWe Clean What Remains explores how cleaning, maintenance, and voice interaction can become meaningful forms of gameplay within fantasy environments. Through a stylized 3D game prototype, the project investigates whether players can emotionally connect with abandoned spaces through acts of restoration rather than combat. Players take on the role of a magic apprentice exploring forgotten environments, using voice-based spellcasting, environmental interaction, and magical cleaning mechanics to gradually bring ruined spaces back to life.",
      zh: "一款关于声音和魔法的语音交互体验游戏。\n\n《我们清理残余物》探索了在奇幻环境中，清洁、维护与语音交互如何转化为富有意义的游戏机制。项目通过一个风格化的 3D 游戏原型，研究玩家是否能够通过修复而非战斗，与被遗弃的空间建立情感联系。玩家将扮演一名魔法学徒，探索被遗忘的环境，运用语音施法、环境互动与魔法清洁机制，让破败的空间逐渐恢复生机。",
    },
    content: [
      { type: "heading", text: { en: "", zh: "" } },
      {
        type: "paragraph",
        text: {
          en: "You are an ambitious young magic apprentice. You’ve set off on an adventure, following the notes left behind by the previous master — all to graduate, become a legendary master yourself, and prove your worth to your mentor.",
          zh: "作为一位雄心勃勃的魔法学徒，向你的魔法导师证明你已完全可以毕业了，目标成为一位传奇大师，循着前任魔法导师留下的大师魔法笔记，你踏上了一段冒险之旅。",
        },
      },
      {
        type: "image",
        src: "wcwrassets/wcwr1.png",
        alt: {
          en: "We Clean What Remains game scene",
          zh: "《我们清理残余物》游戏画面",
        },
        // caption: {
        //   en: "The world holds the traces of everyone who passed through it.",
        //   zh: "世界保存着每一个经过之人的痕迹。",
        // },
      },
      {
        type: "paragraph",
        text: {
          en: "Let’s see what the notes say…",
          zh: "让我们看看笔记是怎么说的……",
        },
      },
      {
        type: "image",
        src: "wcwrassets/wcwr2.gif",
        alt: {
          en: "We Clean What Remains game scene",
          zh: "《我们清理残余物》游戏画面",
        },
        caption: {
          en: "nothing was said",
          zh: "啥也没说",
        },
      },
      {
        type: "paragraph",
        text: {
          en: "uh…",
          zh: "额好吧……",
        },
      },
      {
        type: "paragraph",
        text: {
          en: "Well, since you’ve got nothing better to do, just wander around for now. Collect some inspiration, talk nonsense with the master’s notes, dust things off, water some flowers, and fix whatever’s broken.",
          zh: "既然你没有更好的事情可做，就先四处逛逛吧。收集一些灵感，用大师的笔记开始胡说八道，掸掉灰尘，浇些花，修理坏了的东西",
        },
      },
      {
        type: "paragraph",
        text: {
          en: "Good luck.",
          zh: "祝好。",
        },
      },
      {
        type: "image",
        src: "wcwrassets/wcwr3.gif",
        alt: { en: "Voice interaction in the game", zh: "游戏中的语音交互" },
      },
      // { type: "heading", text: { en: "Voice as a Tool", zh: "声音作为工具" } },
      {
        type: "paragraph",
        text: {
          en: "This interaction grew from a broader research question: can care, maintenance, and restoration become compelling forms of play? The concept paper traces the ideas and design research behind the project.",
          zh: "这一交互源于一个更广泛的研究问题：照料、维护与修复能否成为引人投入的游戏方式？概念文档梳理了项目背后的思考与设计研究。",
        },
        link: {
          text: {
            en: "Read the concept paper",
            zh: "阅读概念文档",
          },
          href: "wcwrassets/ThesisPaper-WeCleanWhatRemains.pdf",
        },
      },
      {
        type: "video",
        src: "wcwrassets/wcwr5.mp4",
        // caption: {
        //   en: "Cleaning and restoring the environment.",
        //   zh: "清洁并修复环境。",
        // },
      },
      {
        type: "video",
        src: "wcwrassets/wcwr4.mp4",
        // caption: {
        //   en: "Cleaning and restoring the environment.",
        //   zh: "清洁并修复环境。",
        // },
      },
    ],
  },
  labyrinth: {
    title: { en: "LABYRINTH", zh: "迷宫" },
    meta: { en: "Unity + Arduino — 2025", zh: "Unity + Arduino — 2025" },
    tags: {
      en: ["physical interaction", "maze", "Arduino"],
      zh: ["实体交互", "迷宫", "Arduino"],
    },
    description: {
      en: "A physical-digital game where a handmade controller turns the body into part of a shifting maze.",
      zh: "一款实体与数字结合的游戏，手工控制器让身体成为不断变化的迷宫的一部分。",
    },
    content: [
      { type: "heading", text: { en: "Enter the Maze", zh: "进入迷宫" } },
      {
        type: "paragraph",
        text: {
          en: "LABYRINTH is a spatial puzzle built around uncertainty and orientation. Every movement redraws the relationship between the player and the maze.",
          zh: "《迷宫》是一个围绕不确定性与方向感构建的空间谜题。每次移动都重新描绘玩家与迷宫之间的关系。",
        },
      },
      {
        type: "video",
        src: "indexAsset/Labyrinth.mp4",
        caption: {
          en: "Gameplay and the shifting maze.",
          zh: "游戏过程与不断变化的迷宫。",
        },
      },
      { type: "heading", text: { en: "Physical Control", zh: "实体控制" } },
      {
        type: "paragraph",
        text: {
          en: "A handmade Arduino controller connects gesture directly to the game world, making the player's body part of the navigation system.",
          zh: "手工制作的 Arduino 控制器将动作直接连接到游戏世界，使玩家的身体成为导航系统的一部分。",
        },
      },
      {
        type: "video",
        src: "indexAsset/Labyrinth.mp4",
        caption: {
          en: "Testing the connection between gesture and movement.",
          zh: "测试动作与移动之间的联系。",
        },
      },
    ],
  },
  spinphony: {
    title: { en: "Spinphony", zh: "Spinphony" },
    meta: {
      en: "Game + physical interaction — 2025",
      zh: "游戏 + 实体交互 — 2025",
    },
    tags: {
      en: ["music", "rhythm", "collaboration"],
      zh: ["音乐", "节奏", "协作"],
    },
    description: {
      en: "A playful music experience that transforms spinning, rhythm, and collective movement into a shared composition.",
      zh: "一种趣味音乐体验，将旋转、节奏与集体动作转化为共同创作。",
    },
    content: [
      {
        type: "heading",
        text: { en: "Movement as Interface", zh: "动作作为界面" },
      },
      {
        type: "paragraph",
        text: {
          en: "Spinphony begins with a simple gesture: spin. Circular movement becomes an interface through which players build rhythm together.",
          zh: "Spinphony 从一个简单动作开始：旋转。圆周运动成为玩家共同建立节奏的界面。",
        },
      },
      {
        type: "video",
        src: "indexAsset/Spinphony.mp4",
        caption: {
          en: "Spinning transforms physical movement into sound.",
          zh: "旋转将身体动作转化为声音。",
        },
      },
      { type: "heading", text: { en: "A Shared Composition", zh: "共同创作" } },
      {
        type: "paragraph",
        text: {
          en: "Each gesture adds another voice. The system rewards coordination, surprise, and improvisation rather than a single correct performance.",
          zh: "每个动作都加入一个新的声部。系统鼓励协作、惊喜与即兴，而非唯一正确的演奏方式。",
        },
      },
      {
        type: "video",
        src: "indexAsset/Spinphony.mp4",
        caption: {
          en: "Players listen and adjust to one another in real time.",
          zh: "玩家实时聆听彼此并作出调整。",
        },
      },
    ],
  },
  office: {
    title: { en: "Queen of Hearts in the Office", zh: "红心皇后办公室加班" },
    meta: {
      en: "Game + narrative experience — 2023",
      zh: "游戏 + 叙事体验 — 2023",
    },
    tags: {
      en: ["narrative", "surreal", "office"],
      zh: ["叙事", "超现实", "办公室"],
    },
    description: {
      en: "A surreal narrative experience about office work, authority, and the absurd logic of staying late.",
      zh: "一段关于办公室劳动、权力，以及加班荒诞逻辑的超现实叙事体验。",
    },
    content: [
      { type: "heading", text: { en: "Stay Late", zh: "留下加班" } },
      {
        type: "paragraph",
        text: {
          en: "The familiar office slowly slips into another kind of logic. Instructions multiply while their purpose becomes less clear.",
          zh: "熟悉的办公室逐渐滑入另一种逻辑。指令不断增加，目的却越来越模糊。",
        },
      },
      {
        type: "video",
        src: "indexAsset/office.mp4",
        caption: { en: "The office after hours.", zh: "下班后的办公室。" },
      },
      { type: "heading", text: { en: "Meet the Queen", zh: "遇见皇后" } },
      {
        type: "paragraph",
        text: {
          en: "Authority appears as spectacle, threat, and dark humor. The player navigates rules that are recognizable and completely absurd at the same time.",
          zh: "权力以奇观、威胁与黑色幽默的形式出现。玩家面对的规则既似曾相识，又完全荒诞。",
        },
      },
      {
        type: "video",
        src: "indexAsset/office.mp4",
        caption: {
          en: "A narrative space shaped by work and authority.",
          zh: "由劳动与权力塑造的叙事空间。",
        },
      },
    ],
  },
  desktop: {
    title: { en: "Desktop??", zh: "桌面？？" },
    meta: { en: "Web + interface — 2023", zh: "网页 + 界面 — 2023" },
    tags: {
      en: ["web", "interface", "interaction"],
      zh: ["网页", "界面", "交互"],
    },
    description: {
      en: "An interactive web desktop that treats familiar interface conventions as a space for play and discovery.",
      zh: "一个互动网页桌面，将熟悉的界面惯例变成游戏与探索的空间。",
    },
    content: [
      { type: "heading", text: { en: "A Familiar Screen", zh: "熟悉的屏幕" } },
      {
        type: "paragraph",
        text: {
          en: "The project begins with an immediately recognizable desktop, then turns windows and icons into invitations to wander.",
          zh: "项目从一眼可识别的桌面开始，随后将窗口和图标变成漫游的邀请。",
        },
      },
      {
        type: "video",
        src: "indexAsset/laptop.mp4",
        caption: {
          en: "A desktop interface built for exploration.",
          zh: "为探索而构建的桌面界面。",
        },
      },
      {
        type: "heading",
        text: { en: "Interface as Place", zh: "界面作为场所" },
      },
      {
        type: "paragraph",
        text: {
          en: "Navigation becomes a small world rather than a utility. Familiar conventions create expectations that can then be interrupted and played with.",
          zh: "导航不再只是工具，而成为一个微型世界。熟悉的惯例建立预期，也让这些预期能够被打断和玩味。",
        },
      },
      {
        type: "video",
        src: "indexAsset/laptop.mp4",
        caption: {
          en: "Windows, icons, and interaction form a playful environment.",
          zh: "窗口、图标和交互共同构成一个趣味环境。",
        },
      },
    ],
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("languages");
  const cursor = document.querySelector(".cursor");
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const projectId = new URLSearchParams(window.location.search).get("id");
  const project = projects[projectId] || projects["we-clean-what-remains"];
  const article = document.getElementById("project-article");
  const progressFill = document.querySelector(".project-progress-fill");
  const progressNumber = document.querySelector(".project-progress-number");

  function language() {
    return languageSelect?.value || "en";
  }
  function translated(value) {
    return value?.[language()] || value?.en || "";
  }

  function createContentBlock(block) {
    if (block.type === "heading") {
      const heading = document.createElement("h2");
      heading.className = "article-heading";
      heading.textContent = translated(block.text);
      return heading;
    }
    if (block.type === "paragraph" || block.type === "caption") {
      const paragraph = document.createElement("p");
      paragraph.className =
        block.type === "caption"
          ? "article-standalone-caption"
          : "article-paragraph";
      paragraph.textContent = translated(block.text);
      if (block.link) {
        const link = document.createElement("a");
        link.className = "article-inline-link";
        link.href = block.link.href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        const label = document.createElement("span");
        label.textContent = translated(block.link.text);
        const arrow = document.createElement("span");
        arrow.className = "arrow";
        arrow.textContent = "→";
        link.append(label, document.createTextNode(" "), arrow);
        paragraph.append(document.createElement("br"), link);
      }
      return paragraph;
    }
    if (block.type === "image" || block.type === "video") {
      const figure = document.createElement("figure");
      figure.className = "article-media";
      const media = document.createElement(
        block.type === "video" ? "video" : "img",
      );
      media.src = block.src;
      if (block.type === "video") {
        media.muted = true;
        media.loop = true;
        media.playsInline = true;
        media.autoplay = true;
      } else {
        media.alt = translated(block.alt);
      }
      figure.appendChild(media);
      if (block.caption) {
        const caption = document.createElement("figcaption");
        caption.className = "article-caption";
        caption.textContent = translated(block.caption);
        figure.appendChild(caption);
      }
      if (block.type === "video") media.play().catch(() => {});
      return figure;
    }
    return null;
  }

  function updateProgress() {
    if (!article || !progressFill || !progressNumber) return;
    const maxScroll = article.scrollHeight - article.clientHeight;
    const progress = maxScroll > 0 ? (article.scrollTop / maxScroll) * 100 : 0;
    progressFill.style.height = `${progress}%`;
    progressNumber.textContent = `${Math.round(progress)}%`;
  }

  function render() {
    const lang = language();
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-lang]").forEach((element) => {
      element.style.display = element.dataset.lang === lang ? "" : "none";
    });
    document.getElementById("project-title").textContent = translated(
      project.title,
    );
    document.getElementById("project-meta").textContent = translated(
      project.meta,
    );
    document.getElementById("project-description").textContent = translated(
      project.description,
    );
    const tags = document.getElementById("project-tags");
    tags.replaceChildren(
      ...translated(project.tags).map((tag) => {
        const item = document.createElement("li");
        item.textContent = tag;
        return item;
      }),
    );
    document.title = `${translated(project.title)} | Jinhao Xu`;
    article.replaceChildren(
      ...project.content.map(createContentBlock).filter(Boolean),
    );
    updateProgress();
  }

  languageSelect?.addEventListener("change", render);
  article?.addEventListener("scroll", updateProgress);
  window.addEventListener("resize", updateProgress);

  const mobileMenu = document.querySelector("#mobile-menu");
  document
    .querySelector("#menu-toggle")
    ?.addEventListener("click", () => mobileMenu?.classList.add("active"));
  document
    .querySelector(".mobile-close")
    ?.addEventListener("click", () => mobileMenu?.classList.remove("active"));
  document
    .querySelectorAll(".mobile-menu a")
    .forEach((link) =>
      link.addEventListener("click", () =>
        mobileMenu?.classList.remove("active"),
      ),
    );

  if (isMobile) {
    if (cursor) cursor.style.display = "none";
    document.body.style.cursor = "auto";
  } else if (cursor) {
    window.addEventListener("mousemove", (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    });
    document
      .querySelectorAll(
        "header a, header select, footer a, .header-name-target, .project-close",
      )
      .forEach((element) => {
        element.addEventListener("mouseenter", () =>
          cursor.classList.add("expand"),
        );
        element.addEventListener("mouseleave", () =>
          cursor.classList.remove("expand"),
        );
      });
  }

  render();
});
