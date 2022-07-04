//musik
const musik = document.getElementById("musik");
const musikdark = document.getElementById("musikdark");
const audio = document.querySelector(".myAudio");
const audiodark = document.querySelector(".myAudioDark");
function putarmusik() {
  musikdark.style.display = "none";
  musik.style.display = "none";
  audio.play();
}
function putarmusikdark() {
  musikdark.style.display = "none";
  musik.style.display = "none";
  audiodark.play();
}
// Musik off/on light
const off = document.querySelector(".off");
const on = document.querySelector(".on");
on.addEventListener("click", () => music("on"));
off.addEventListener("click", () => music("off"));
const music = (track) => {
  if (track === "off") {
    on.style.display = "block";
    off.style.display = "none";
    audiodark.pause();
    audio.pause();
  } else if (track === "on") {
    on.style.display = "none";
    off.style.display = "block";
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
  if (track === "off") {
    ondark.style.display = "block";
    offdark.style.display = "none";
    audio.pause();
    audiodark.pause();
  } else if (track === "on") {
    ondark.style.display = "none";
    offdark.style.display = "block";
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
  const toTop = document.querySelector("#to-Top");
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;
  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
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

window.onload = function () {
  update_time();
};
