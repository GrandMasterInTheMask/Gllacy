var bgPicture = document.querySelector(".container-global");
var bgColor = document.querySelector(".all");
var footerColor = document.querySelector("footer");
var fh = document.querySelector(".first-header");
var sh = document.querySelector(".second-header");
var th = document.querySelector(".third-header");
var radio1 = document.querySelector(".th-1");
var radio2 = document.querySelector(".th-2");
var radio3 = document.querySelector(".th-3");

radio1.addEventListener("click", function(event) {
  radio2.classList.remove("current");
  radio3.classList.remove("current");
  radio1.classList.add("current");
  fh.classList.add("visible");
  sh.classList.remove("visible");
  th.classList.remove("visible");
  footerColor.classList.remove("color-2");
  footerColor.classList.remove("color-3");
  bgColor.classList.remove("color-2");
  bgColor.classList.remove("color-3");
  bgPicture.classList.remove("background-2");
  bgPicture.classList.remove("background-3");
  footerColor.classList.add("color-1");
  bgColor.classList.add("color-1");
  bgPicture.classList.add("background-1");
});

radio2.addEventListener("click", function(event) {
  radio1.classList.remove("current");
  radio3.classList.remove("current");
  radio2.classList.add("current");
  sh.classList.add("visible");
  fh.classList.remove("visible");
  th.classList.remove("visible");
  footerColor.classList.remove("color-4");
  footerColor.classList.remove("color-3");
  bgColor.classList.remove("color-1");
  bgColor.classList.remove("color-3");
  bgPicture.classList.remove("background-1");
  bgPicture.classList.remove("background-3");
  footerColor.classList.add("color-2");
  bgColor.classList.add("color-2");
  bgPicture.classList.add("background-2");
});

radio3.addEventListener("click", function(event) {
  radio1.classList.remove("current");
  radio2.classList.remove("current");
  radio3.classList.add("current");
  th.classList.add("visible");
  fh.classList.remove("visible");
  sh.classList.remove("visible");
  footerColor.classList.remove("color-4");
  footerColor.classList.remove("color-2");
  bgColor.classList.remove("color-1");
  bgColor.classList.remove("color-2");
  bgPicture.classList.remove("background-1");
  bgPicture.classList.remove("background-2");
  footerColor.classList.add("color-3");
  bgColor.classList.add("color-3");
  bgPicture.classList.add("background-3");
});
