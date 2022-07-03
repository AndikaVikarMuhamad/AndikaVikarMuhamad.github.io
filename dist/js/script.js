// tombol
const navMenu = document.querySelector("#nav-menu");
const tombol = document.querySelector("#tombol");
tombol.addEventListener("click", function () {
  tombol.classList.toggle("tombol-aktif");
  navMenu.classList.toggle("hidden");
});
// end of tombol
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
//Timer
function update_time() {
  /* Start Time: 2011.06.19 00:00 */
  var start_itme = 1535849597;
  var duration = parseInt(Date.now() / 1000 - start_itme, 10);

  var seconds = duration % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  duration = parseInt(duration / 60, 10);
  var minutes = duration % 60;
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  duration = parseInt(duration / 60, 10);
  var hours = duration % 24;
  if (hours < 10) {
    hours = "0" + hours;
  }

  duration = parseInt(duration / 24, 10);
  var days = duration;

  $("#Day").text(days);
  $("#Hour").text(hours);
  $("#Minute").text(minutes);
  $("#Second").text(seconds);

  setTimeout("update_time()", 1000);
}

var Anniversary = function () {};
