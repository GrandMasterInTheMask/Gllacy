var bgPicture = document.querySelector(".container-global");
var bgColor = document.querySelector(".all");
var footerColor = document.querySelector("footer");
var crutch = document.querySelector(".crutch");
var show = document.querySelector(".show");
var radio1 = document.querySelector(".th-1");
var radio2 = document.querySelector(".th-2");
var radio3 = document.querySelector(".th-3");

radio1.addEventListener("click", function(event) {
  footerColor.classList.remove("color-2");
  footerColor.classList.remove("color-3");
  bgColor.classList.remove("color-2");
  bgColor.classList.remove("color-3");
  crutch.classList.remove("color-2");
  crutch.classList.remove("color-3");
  show.classList.remove("color-2");
  show.classList.remove("color-3");
  bgPicture.classList.remove("background-2");
  bgPicture.classList.remove("background-3");
  footerColor.classList.add("color-1");
  bgColor.classList.add("color-1");
  crutch.classList.add("color-1");
  show.classList.add("color-1");
  bgPicture.classList.add("background-1");
});

radio2.addEventListener("click", function(event) {
  footerColor.classList.remove("color-1");
  footerColor.classList.remove("color-3");
  bgColor.classList.remove("color-1");
  bgColor.classList.remove("color-3");
  crutch.classList.remove("color-1");
  crutch.classList.remove("color-3");
  show.classList.remove("color-1");
  show.classList.remove("color-3");
  bgPicture.classList.remove("background-1");
  bgPicture.classList.remove("background-3");
  footerColor.classList.add("color-2");
  bgColor.classList.add("color-2");
  crutch.classList.add("color-2");
  show.classList.add("color-2");
  bgPicture.classList.add("background-2");
});

radio3.addEventListener("click", function(event) {
  footerColor.classList.remove("color-1");
  footerColor.classList.remove("color-2");
  bgColor.classList.remove("color-1");
  bgColor.classList.remove("color-2");
  crutch.classList.remove("color-1");
  crutch.classList.remove("color-2");
  show.classList.remove("color-1");
  show.classList.remove("color-2");
  bgPicture.classList.remove("background-1");
  bgPicture.classList.remove("background-2");
  footerColor.classList.add("color-3");
  bgColor.classList.add("color-3");
  crutch.classList.add("color-3");
  show.classList.add("color-3");
  bgPicture.classList.add("background-3");
});
