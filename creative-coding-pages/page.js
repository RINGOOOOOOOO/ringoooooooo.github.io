const projects = [
  { id: "01", title: "Lost and Found", background: "#9e86d1" },
  { id: "02", title: "Form Generator", background: "#ffffff" },
  { id: "03", title: "Experimental Clock", background: "#000000" },
  { id: "04", title: "Exquisite Corpse", background: "#fef9e7" },
  { id: "05", title: "Optical Illusion", background: "#000000" },
  { id: "06", title: "Data Portrait", background: "#ffffff" },
  { id: "07", title: "Autobiographical Game", background: "#ffffff" },
  { id: "08", title: "Experimental Camera", background: "#ffffff" },
  { id: "09", title: "Consentful Interface", background: "#ffffff" },
];

function buildMenu(currentId) {
  const menu = document.querySelector(".project-menu");
  const list = document.createElement("ul");

  projects.forEach((project, index) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    const number = document.createElement("span");
    const title = document.createElement("span");
    link.href = `p${project.id}.html`;
    link.className = "pink";
    number.className = "menu-number";
    number.textContent = `${index + 1}.`;
    title.className = "menu-title";
    title.textContent = project.title;
    link.append(number, title);
    if (project.id === currentId) link.setAttribute("aria-current", "page");
    item.append(link);
    list.append(item);
  });

  menu.insertBefore(list, menu.querySelector(".project-back"));
}

function makeSourceUrlsAbsolute(container, sourceUrl) {
  container.querySelectorAll("[src], [href]").forEach((element) => {
    for (const attribute of ["src", "href"]) {
      const value = element.getAttribute(attribute);
      if (!value || value.startsWith("#") || /^(https?:|mailto:|data:)/i.test(value)) {
        continue;
      }
      element.setAttribute(attribute, new URL(value, sourceUrl).href);
    }
  });
}

function removeOriginalNavigation(container) {
  container.querySelectorAll("nav").forEach((nav) => nav.remove());
  container.querySelectorAll("a").forEach((link) => {
    if (link.textContent.trim().toUpperCase() !== "BACK") return;
    const wrapper = link.closest("h1, h2, h3, h5, div");
    (wrapper || link).remove();
  });
}

async function loadOriginalContent(project) {
  const content = document.querySelector(".project-content");
  const sourceUrl = new URL(
    `../Critical-Computation-Portfolio/p${project.id}.html`,
    window.location.href,
  );

  if (project.id === "09") {
    const frame = document.createElement("iframe");
    frame.className = "consentful-frame";
    frame.title = project.title;
    frame.src = sourceUrl.href;
    content.replaceChildren(frame);
    return;
  }

  const response = await fetch(sourceUrl);
  if (!response.ok) throw new Error(`Unable to load p${project.id}.html`);
  const documentText = await response.text();
  const sourceDocument = new DOMParser().parseFromString(documentText, "text/html");
  const originalContent =
    sourceDocument.querySelector("main") || sourceDocument.querySelector("main1");

  if (!originalContent) throw new Error(`No project content found for p${project.id}.html`);

  const fragment = originalContent.cloneNode(true);
  removeOriginalNavigation(fragment);
  makeSourceUrlsAbsolute(fragment, sourceUrl);
  content.replaceChildren(...fragment.childNodes);
}

document.addEventListener("DOMContentLoaded", async () => {
  const currentId = document.body.dataset.project;
  const project = projects.find((item) => item.id === currentId);
  const content = document.querySelector(".project-content");

  if (currentId === "home") {
    buildMenu(null);
    return;
  }

  if (!project) {
    content.innerHTML = '<p class="load-error">Project not found.</p>';
    return;
  }

  document.title = `${project.title} | Creative Coding & Experiments`;
  document.body.style.setProperty("--project-background", project.background);
  buildMenu(currentId);

  try {
    await loadOriginalContent(project);
  } catch (error) {
    content.innerHTML =
      '<p class="load-error">This project could not be loaded. Please return to Ephemera and try again.</p>';
    console.error(error);
  }
});
