//musik
const musik = document.getElementById("musik");
// const start_date = new Date("Sep 2, 2021 10:53:17").getTime();
const musikdark = document.getElementById("musikdark");
const audio = document.querySelector(".myAudio");
const audiodark = document.querySelector(".myAudioDark");
const day = document.getElementById("Day");
const hour = document.getElementById("Hour");
const minute = document.getElementById("Minute");
const second = document.getElementById("Second");
function putarmusik() {
  musikdark.style.display = "none";
  musik.style.display = "none";
  // audio.play();
}
function putarmusikdark() {
  musikdark.style.display = "none";
  musik.style.display = "none";
  // audiodark.play();
}
// Musik off/on light
const off = document.querySelector(".off");
const on = document.querySelector(".on");
on.addEventListener("click", () => music("on"));
off.addEventListener("click", () => music("off"));
const music = (track) => {
  if (track === "on") {
    on.style.display = "none";
    off.style.display = "block";
    audiodark.pause();
    audio.pause();
  } else if (track === "off") {
    on.style.display = "block";
    off.style.display = "none";
    audiodark.pause();
    audio.play();
  }
};
// Musik off/on dark
const offdark = document.getElementById("OffDark");
const ondark = document.getElementById("OnDark");
ondark.addEventListener("click", () => musicdark("on"));
offdark.addEventListener("click", () => musicdark("off"));
const musicdark = (track) => {
  if (track === "on") {
    ondark.style.display = "none";
    offdark.style.display = "block";
    audio.pause();
    audiodark.pause();
  } else if (track === "off") {
    ondark.style.display = "block";
    offdark.style.display = "none";
    audiodark.play();
    audio.pause();
  }
};

// tombol
const navMenu = document.querySelector("#nav-menu");
const tombol = document.querySelector("#tombol");
tombol.addEventListener("click", function () {
  tombol.classList.toggle("tombol-aktif");
  navMenu.classList.toggle("hidden");
});

// navbar
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;
  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
  console.log("navbar fixed");
};
// Dark
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
// Timer

function update_time() {
  const now = new Date().getTime();
  const gap = now - start_date;

  const s = 1000;
  const m = s * 60;
  const h = m * 60;
  const d = h * 24;

  const days = Math.floor(gap / d);
  const hours = Math.floor((gap % d) / h);
  const minutes = Math.floor((gap % h) / m);
  const seconds = Math.floor((gap % m) / s);

  day.innerText = days;
  hour.innerText = hours;
  minute.innerText = minutes;
  second.innerText = seconds;
}

setInterval(update_time, 1000);

window.onload = function () {
  update_time();
};
