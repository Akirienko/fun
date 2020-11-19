"use strict";

var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");
burger.addEventListener("click", function () {
  menu.classList.toggle("menu-active");
  burger.classList.toggle("toggle");
});