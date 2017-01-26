var bgPicture = document.querySelector(".container-global");
var bgColor = document.querySelector(".all");
var footerColor = document.querySelector("footer");
var crutch = document.querySelector(".crutch");
var fh = document.querySelector(".first-header");
var sh = document.querySelector(".second-header");
var th = document.querySelector(".third-header");
var radio1 = document.querySelector(".th-1");
var radio2 = document.querySelector(".th-2");
var radio3 = document.querySelector(".th-3");
var show1 = document.querySelector(".show-1");
var show2 = document.querySelector(".show-2");
var show3 = document.querySelector(".show-3");
var show4 = document.querySelector(".show-4");



radio1.addEventListener("click", function(event) {
  fh.classList.add("visible");
  sh.classList.remove("visible");
  th.classList.remove("visible");
  footerColor.classList.remove("color-2");
  footerColor.classList.remove("color-3");
  bgColor.classList.remove("color-2");
  bgColor.classList.remove("color-3");
  crutch.classList.remove("color-2");
  crutch.classList.remove("color-3");
  bgPicture.classList.remove("background-2");
  bgPicture.classList.remove("background-3");
  footerColor.classList.add("color-1");
  bgColor.classList.add("color-1");
  crutch.classList.add("color-1");
  bgPicture.classList.add("background-1");
  show1.classList.remove("color-5");
  show1.classList.remove("color-6");
  show1.classList.add("color-4");
  show2.classList.remove("color-5");
  show2.classList.remove("color-6");
  show2.classList.add("color-4");
  show3.classList.remove("color-5");
  show3.classList.remove("color-6");
  show3.classList.add("color-4");
  show4.classList.remove("color-5");
  show4.classList.remove("color-6");
  show4.classList.add("color-4");
});

radio2.addEventListener("click", function(event) {
  sh.classList.add("visible");
  fh.classList.remove("visible");
  th.classList.remove("visible");
  footerColor.classList.remove("color-4");
  footerColor.classList.remove("color-3");
  bgColor.classList.remove("color-1");
  bgColor.classList.remove("color-3");
  crutch.classList.remove("color-1");
  crutch.classList.remove("color-3");
  bgPicture.classList.remove("background-1");
  bgPicture.classList.remove("background-3");
  footerColor.classList.add("color-2");
  bgColor.classList.add("color-2");
  crutch.classList.add("color-2");
  bgPicture.classList.add("background-2");
  show1.classList.remove("color-4");
  show1.classList.remove("color-6");
  show1.classList.add("color-5");
  show2.classList.remove("color-4");
  show2.classList.remove("color-6");
  show2.classList.add("color-5");
  show3.classList.remove("color-4");
  show3.classList.remove("color-6");
  show3.classList.add("color-5");
  show4.classList.remove("color-4");
  show4.classList.remove("color-6");
  show4.classList.add("color-5");
});

radio3.addEventListener("click", function(event) {
  th.classList.add("visible");
  fh.classList.remove("visible");
  sh.classList.remove("visible");
  footerColor.classList.remove("color-4");
  footerColor.classList.remove("color-2");
  bgColor.classList.remove("color-1");
  bgColor.classList.remove("color-2");
  crutch.classList.remove("color-1");
  crutch.classList.remove("color-2");
  bgPicture.classList.remove("background-1");
  bgPicture.classList.remove("background-2");
  footerColor.classList.add("color-3");
  bgColor.classList.add("color-3");
  crutch.classList.add("color-3");
  bgPicture.classList.add("background-3");
  show1.classList.remove("color-4");
  show1.classList.remove("color-5");
  show1.classList.add("color-6");
  show2.classList.remove("color-4");
  show2.classList.remove("color-5");
  show2.classList.add("color-6");
  show3.classList.remove("color-4");
  show3.classList.remove("color-5");
  show3.classList.add("color-6");
  show4.classList.remove("color-4");
  show4.classList.remove("color-5");
  show4.classList.add("color-6");
});





// SHOW

// show.classList.remove("color-2");
// show.classList.remove("color-3");
// show.classList.add("color-1");
