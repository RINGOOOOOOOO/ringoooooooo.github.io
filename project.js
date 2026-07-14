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
      en: "A simple experiential game about sound and magic.\n\nWe Clean What Remains explores how cleaning, maintenance, and voice interaction can become meaningful forms of gameplay. Through a stylized 3D game prototype, the project investigates whether players can emotionally connect with abandoned spaces through acts of restoration rather than combat. Players take on the role of a magic apprentice exploring forgotten environments, using voice-based spellcasting, environmental interaction, and magical cleaning mechanics to gradually bring ruined spaces back to life.",
      zh: "一款关于声音和魔法的语音交互体验游戏。\n\n《我们清理残余物》探索了如何将清洁、维护与语音交互转化为富有意义的游戏机制。项目通过一个风格化的 3D 游戏，研究玩家是否能够通过修复而非战斗，与被遗弃的空间建立情感联系。玩家将扮演一名魔法学徒，探索被遗忘的环境，运用语音施法、环境互动与魔法清洁机制，让破败的空间逐渐恢复生机。",
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
      { type: "heading", text: { en: "Game Concept", zh: "项目理念" } },
      {
        type: "paragraph",
        text: {
          en: "This interaction grew from a broader research question: can care, maintenance, and restoration become compelling forms of play?",
          zh: "这一交互源于一个更广泛的研究问题：照料、维护与修复能否成为引人投入的游戏方式",
        },
        link: {
          text: {
            en: "view more details",
            zh: "查看更多内容",
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
      { type: "heading", text: { en: "Prototype", zh: "实验原型" } },
      {
        type: "image",
        src: "wcwrassets/wcwr7.png",
        caption: {
          en: "shader test",
          zh: "着色器测试",
        },
      },
      {
        type: "media-row",
        className: "wcwr-navigation-row",
        items: [
          {
            type: "video",
            src: "wcwrassets/wcwr6.mp4",
          },
          {
            type: "image",
            src: "wcwrassets/wcwr8.png",
            alt: {
              en: "Character navigation setup in Unity",
              zh: "Unity 中的角色导航设置",
            },
          },
        ],
      },
    ],
  },
  labyrinth: {
    title: { en: "LABYRINTH", zh: "LABYRINTH | 迷宫" },
    meta: {
      en: "Unity + Arduino + Leap Motion — 2025",
      zh: "Unity + Arduino + Leap Motion — 2025",
    },
    tags: {
      en: ["game", "interactive sensory"],
      zh: ["游戏", "交互式感官"],
    },
    team: {
      en: "Team: Jinhao Xu, Carla Budar, Ziye An, Jaiden Brown",
      zh: "团队：Jinhao Xu、Carla Budar、Ziye An、Jaiden Brown",
    },
    description: {
      en: "Inspired by the Greek myth of the Minotaur, a monster with a bull's head and a human body, LABYRINTH is a two-player asymmetric hide-and-seek game played through physical controllers. Inside a dark maze, one player becomes the Hider trying to escape, while the other becomes the Seeker, a ghostly entity that hunts through sound.",
      zh: "《LABYRINTH（迷宫）》灵感来自希腊神话牛首人身怪弥诺陶洛斯的迷宫，是一款通过实体控制器进行的双人非对称捉迷藏游戏。在黑暗迷宫中，一名玩家作为 Hider 试图逃离，另一名玩家作为 Seeker，成为依靠声音追猎的幽灵般存在。",
    },
    content: [
      { type: "heading", text: { en: "Enter the Maze", zh: "进入迷宫" } },
      {
        type: "video",
        src: "mazeassets/Labyrinth.mp4",
        controls: true,
        autoplay: false,
        muted: false,
        loop: false,
        // caption: {
        //   en: "Gameplay",
        //   zh: "游戏过程",
        // },
      },
      // {
      //   type: "paragraph",
      //   text: {
      //     en: "LABYRINTH is a spatial puzzle built around uncertainty and orientation. Every movement redraws the relationship between the player and the maze.",
      //     zh: "《迷宫》是一个围绕不确定性与方向感构建的空间谜题。每次移动都重新描绘玩家与迷宫之间的关系。",
      //   },
      // },
      { type: "heading", text: { en: "Roles & Gameplay", zh: "角色和玩法" } },
      {
        type: "image",
        src: "mazeassets/maze1.png",
        className: "no-border",
        caption: {
          en: "",
          zh: "",
        },
      },
      {
        type: "two-column",
        columns: [
          {
            title: {
              en: "Player1: The Hider (Human)",
              zh: "玩家1：躲藏者（人类）",
            },
            items: {
              en: [
                "Goal: Escape the maze",
                "Tools: Physical flashlight (Arduino-controlled) + joystick",
                "Actions: Walk to create smaller sounds, sprint to create louder sounds, and navigate using the flashlight beam",
                "Challenge: Movement creates sound that the ghost can track",
              ],
              zh: [
                "目标：逃离迷宫",
                "工具：实体手电筒（Arduino 控制）+ 摇杆",
                "行动：行走会制造较小的声音，奔跑会制造更大的声音，并通过手电筒光束探索路线",
                "挑战：移动会产生可被幽灵追踪的声音",
              ],
            },
          },
          {
            title: {
              en: "Player2: The Seeker (Ghost)",
              zh: "玩家2：追猎者（幽灵）",
            },
            items: {
              en: [
                "Goal: Catch the Hider",
                "Tools: Headphones for sound tracking + joystick",
                "Actions: Move through walls and chase based on the direction of the sound",
                "Challenge: With no direct visuals, the Seeker must listen carefully and move strategically",
              ],
              zh: [
                "目标：抓住躲藏者",
                "工具：用于声音追踪的耳机 + 摇杆",
                "行动：穿过墙壁，并根据声音方向进行追猎",
                "挑战：没有直接视觉信息，必须仔细聆听并判断移动方向",
              ],
            },
          },
        ],
      },
      { type: "heading", text: { en: "Prototype", zh: "实验原型" } },
      // {
      //   type: "paragraph",
      //   text: {
      //     en: "A handmade Arduino controller connects gesture directly to the game world, making the player's body part of the navigation system.",
      //     zh: "手工制作的 Arduino 控制器将动作直接连接到游戏世界，使玩家的身体成为导航系统的一部分。",
      //   },
      // },
      {
        type: "video",
        src: "mazeassets/test1.mp4",
        // caption: {
        //   en: "Testing the connection between gesture and movement.",
        //   zh: "测试动作与移动之间的联系。",
        // },
      },
      {
        type: "media-row",
        className: "maze-test-row",
        items: [
          { type: "video", src: "mazeassets/test2.mp4" },
          { type: "video", src: "mazeassets/test3.mp4" },
        ],
      },
      {
        type: "video",
        src: "mazeassets/mazedesign.mp4",
        caption: {
          en: "unity+arduino test",
          zh: "unity+arduino 测试",
        },
      },
      { type: "heading", text: { en: "Visual Design", zh: "美术设计" } },
      {
        type: "image",
        src: "mazeassets/artdesign.png",
        className: "no-border",
      },
      {
        type: "media-row",
        className: "maze-design-row",
        items: [
          {
            type: "image",
            src: "mazeassets/design1.png",
            alt: { en: "Maze visual design one", zh: "迷宫视觉设计一" },
          },
          {
            type: "image",
            src: "mazeassets/design2.png",
            alt: { en: "Maze visual design two", zh: "迷宫视觉设计二" },
          },
        ],
      },
      // {
      //   type: "media-row",
      //   className: "maze-design-collage-row",
      //   items: [
      //     {
      //       type: "image",
      //       src: "mazeassets/design3.png",
      //       alt: { en: "Maze visual design three", zh: "迷宫视觉设计三" },
      //     },
      //     {
      //       type: "image",
      //       src: "mazeassets/design4.png",
      //       alt: { en: "Maze visual design four", zh: "迷宫视觉设计四" },
      //     },
      //     {
      //       type: "image",
      //       src: "mazeassets/design5.png",
      //       alt: { en: "Maze visual design five", zh: "迷宫视觉设计五" },
      //     },
      //     {
      //       type: "image",
      //       src: "mazeassets/design6.png",
      //       alt: { en: "Maze visual design six", zh: "迷宫视觉设计六" },
      //     },
      //   ],
      // },
      { type: "heading", text: { en: "Model Design", zh: "模型设计" } },
      {
        type: "media-row",
        className: "maze-model-row",
        items: [
          {
            type: "image",
            src: "mazeassets/3d1.png",
            alt: { en: "Maze model angled view", zh: "迷宫模型斜视图" },
          },
          {
            type: "image",
            src: "mazeassets/3d2.png",
            alt: { en: "Maze model front view", zh: "迷宫模型正视图" },
          },
          {
            type: "image",
            src: "mazeassets/3d3.png",
            alt: { en: "Maze model side view", zh: "迷宫模型侧视图" },
          },
        ],
      },
      {
        type: "image",
        src: "mazeassets/3d6.png",
        className: "no-border",
        caption: {
          en: "laser cut",
          zh: "激光切割",
        },
      },
      { type: "heading", text: { en: "User Testing", zh: "用户测试" } },
      {
        type: "video",
        src: "mazeassets/MazeRunner.mp4",
      },
      {
        type: "media-row",
        className: "maze-design-row maze-unity-model-row",
        items: [
          {
            type: "image",
            src: "mazeassets/3d9.png",
            alt: { en: "Maze visual design one", zh: "迷宫视觉设计一" },
          },
          {
            type: "image",
            src: "mazeassets/3d10.png",
            alt: { en: "Maze visual design two", zh: "迷宫视觉设计二" },
          },
        ],
      },
      {
        type: "paragraph",
        text: { en: "", zh: "" },
        link: {
          text: { en: "view the unity demo", zh: "查看 unity demo" },
          href: "https://ringooooo.itch.io/labyrinth-prototype",
        },
      },
    ],
  },
  spinphony: {
    title: { en: "Spinphony", zh: "Spinphony | 旋转交响" },
    meta: {
      en: "Unity + Arduino + Rotary Encoder — 2025",
      zh: "Unity + Arduino + 轴编码器 — 2025",
    },
    tags: {
      en: ["game", "physical computation", "hardware controller"],
      zh: ["游戏", "物理运算", "实体控制器"],
    },
    description: {
      en: "Spinphony reimagines a familiar music device as a custom game controller. In this 2D rhythm platformer, Do, a lost music note, solves puzzles through spinning and scratching gestures, gradually reuniting with six other notes.\n\nThe physical controller and digital system were developed together. The encoder prototype defined the tactile feel of the record player interaction, while game’s visual and audio feedback helped players read timing, rhythm, and response.",
      zh: "《Spinphony（旋转交响）》将熟悉的音乐设备重新想象为自定义游戏控制器。在这款 2D 节奏平台游戏中，迷失的音符 Do 通过旋转与刮擦的操作解开谜题，并逐渐与其他六个音符重聚。\n\n实体控制器与数字系统在迭代中共同成形。编码器原型定义了唱片机交互的触感，而游戏中的视觉与音频反馈则帮助玩家理解时机、节奏与操作回应。",
    },
    content: [
      {
        type: "heading",
        text: {
          en: "What if a record player became a game controller?",
          zh: "如果唱片机可以变成游戏手柄会怎样？",
        },
      },
      {
        type: "video",
        src: "Spinphonyassets/Spinphony.mp4",
        controls: true,
        autoplay: false,
        muted: false,
        loop: false,
        // caption: {
        //   en: "Gameplay",
        //   zh: "游戏过程",
        // },
      },
      {
        type: "paragraph",
        text: {
          en: "Spinphony is a 2D platformer where the character Do, a lost music note, reunites with six other notes by solving puzzles using a custom-built record player controller.",
          zh: "《Spinphony》是一款2D平台游戏，其中角色Do（一个丢失的音符）通过使用定制的唱机控制器解决谜题，与其他六个音符重聚。",
        },
      },
      {
        type: "heading",
        text: { en: "Hardware Design", zh: "硬件设计" },
      },
      {
        type: "mechanics",
        className: "spinphony-mechanics",
        image: {
          src: "Spinphonyassets/record.png",
          alt: {
            en: "Spinphony record player controller mechanics",
            zh: "Spinphony 唱片机控制器机制说明",
          },
        },
        items: [
          {
            title: {
              en: "Rotate the Record (rotary encoder):",
              zh: "旋转唱片（旋转编码器）：",
            },
            text: {
              en: "Scroll through the 7 musical notes",
              zh: "在 7 个音符之间切换",
            },
          },
          {
            title: {
              en: "Press the Record (Button Press):",
              zh: "按下唱片（按钮输入）：",
            },
            text: {
              en: "Play the selected note",
              zh: "播放当前选中的音符",
            },
          },
          {
            title: {
              en: "Arrow Buttons:",
              zh: "方向键：",
            },
            text: {
              en: "Move Do across platforms",
              zh: "控制 Do 在平台之间移动",
            },
          },
        ],
      },
      {
        type: "mechanics",
        className: "spinphony-components",
        image: {
          src: "Spinphonyassets/arduino.png",
          alt: {
            en: "Spinphony Arduino controller component connections",
            zh: "Spinphony Arduino 控制器组件连接图",
          },
        },
        items: [
          {
            title: { en: "Components:", zh: "组件：" },
            text: {
              en: "Rotary encoder\nButtons",
              zh: "旋转编码器\n按钮",
            },
          },
          {
            title: { en: "Connection with Unity:", zh: "与 Unity 连接：" },
            text: { en: "Ardity", zh: "Ardity" },
          },
          {
            title: { en: "Case:", zh: "外壳：" },
            text: { en: "Acrylic Lasercut", zh: "亚克力激光切割" },
          },
        ],
      },
      { type: "heading", text: { en: "Visual Design", zh: "美术设计" } },
      {
        type: "image",
        src: "Spinphonyassets/visual1.png",
        caption: {
          en: "characters design",
          zh: "角色设计",
        },
      },
      {
        type: "video",
        src: "Spinphonyassets/visual2.mp4",
      },
      { type: "heading", text: { en: "Game Design", zh: "游戏设计" } },
      {
        type: "media-row",
        className: "spinphony-game-design-row",
        items: [
          {
            type: "video",
            src: "indexAsset/10.mp4",
          },
          {
            type: "image",
            src: "Spinphonyassets/spinphony3.png",
            alt: {
              en: "Spinphony game design detail three",
              zh: "Spinphony 游戏设计细节三",
            },
          },
          {
            type: "image",
            src: "Spinphonyassets/spinphony2.png",
            alt: {
              en: "Spinphony game design detail two",
              zh: "Spinphony 游戏设计细节二",
            },
          },
        ],
      },
      {
        type: "image",
        src: "Spinphonyassets/spinphony1.png",
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
    if (block.type === "two-column") {
      const wrapper = document.createElement("section");
      wrapper.className = "article-two-column";

      block.columns.forEach((column) => {
        const columnEl = document.createElement("div");
        columnEl.className = "article-role-card";

        const title = document.createElement("h3");
        title.className = "article-role-title";
        title.textContent = translated(column.title);

        const list = document.createElement("ul");
        list.className = "article-role-list";

        translated(column.items).forEach((itemText) => {
          const item = document.createElement("li");
          item.textContent = itemText;
          list.appendChild(item);
        });

        columnEl.append(title, list);
        wrapper.appendChild(columnEl);
      });

      return wrapper;
    }
    if (block.type === "mechanics") {
      const wrapper = document.createElement("section");
      wrapper.className = block.className
        ? `article-mechanics ${block.className}`
        : "article-mechanics";

      const image = document.createElement("img");
      image.className = "article-mechanics-image";
      image.src = block.image.src;
      image.alt = translated(block.image.alt);

      const content = document.createElement("div");
      content.className = "article-mechanics-content";

      if (block.title) {
        const title = document.createElement("h2");
        title.className = "article-mechanics-title";
        title.textContent = translated(block.title);
        content.appendChild(title);
      }

      block.items.forEach((item) => {
        const card = document.createElement("div");
        card.className = "article-mechanics-card";

        const cardTitle = document.createElement("p");
        cardTitle.className = "article-mechanics-card-title";
        cardTitle.textContent = translated(item.title);

        const cardText = document.createElement("p");
        cardText.className = "article-mechanics-card-text";
        cardText.textContent = translated(item.text);

        card.append(cardTitle, cardText);
        content.appendChild(card);
      });

      wrapper.append(image, content);
      return wrapper;
    }
    if (block.type === "media-row") {
      const row = document.createElement("section");
      row.className = block.className
        ? `article-media-row ${block.className}`
        : "article-media-row";

      block.items.forEach((item) => {
        const media = document.createElement(
          item.type === "video" ? "video" : "img",
        );
        media.src = item.src;

        if (item.type === "video") {
          media.muted = item.muted ?? true;
          media.loop = item.loop ?? true;
          media.playsInline = true;
          media.autoplay = item.autoplay ?? true;
          if (media.autoplay) media.play().catch(() => {});
        } else {
          media.alt = translated(item.alt);
        }

        row.appendChild(media);
      });

      return row;
    }
    if (block.type === "image" || block.type === "video") {
      const figure = document.createElement("figure");
      figure.className = block.className
        ? `article-media ${block.className}`
        : "article-media";
      const media = document.createElement(
        block.type === "video" ? "video" : "img",
      );
      media.src = block.src;
      if (block.type === "video") {
        media.controls = block.controls ?? false;
        media.muted = block.muted ?? true;
        media.loop = block.loop ?? true;
        media.playsInline = true;
        media.autoplay = block.autoplay ?? true;
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
      if (block.type === "video" && media.autoplay) {
        media.play().catch(() => {});
      }
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
    const team = document.getElementById("project-team");
    team.textContent = translated(project.team);
    team.hidden = !project.team;
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
