function updateTime() {
  const clockElement = document.getElementById("clock");
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}
document.addEventListener("DOMContentLoaded", function () {
  updateTime();
  setInterval(updateTime, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.querySelector(".Start");
  const startMenu = document.querySelector(".StartMenu");

  startButton.addEventListener("click", function () {
    startMenu.classList.toggle("visible");

    if (startMenu.classList.contains("visible")) {
      startButton.style.backgroundImage = "url('asset/startbutton.png')";
    } else {
      startButton.style.backgroundImage =
        "url('asset/startbuttonunpressed.png')";
    }
  });
});

startButton.addEventListener("click", function () {
  startMenu.classList.toggle("visible");

  if (startMenu.classList.contains("visible")) {
    console.log("Start Menu is now visible");
    startButton.style.backgroundImage = "url('asset/startbutton.png')";
  } else {
    console.log("Start Menu is now hidden");
    startButton.style.backgroundImage = "url('asset/startbuttonunpressed.png')";
  }
});

const popupWindow = document.getElementById("popup-window");
const header = document.getElementById("header");

let isDragging = false;
let offset = { x: 0, y: 0 };

header.addEventListener("mousedown", (event) => {
  isDragging = true;
  offset.x = event.clientX - popupWindow.getBoundingClientRect().left;
  offset.y = event.clientY - popupWindow.getBoundingClientRect().top;
});

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    popupWindow.style.left = `${event.clientX - offset.x}px`;
    popupWindow.style.top = `${event.clientY - offset.y}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

// const closeButton = document.getElementById("close-button");

// closeButton.addEventListener("click", () => {
//   popupWindow.style.display = "none";
// });
