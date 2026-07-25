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

document.addEventListener("DOMContentLoaded", () => {
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
});
