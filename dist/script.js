"use strict";

var hamburger = document.querySelector('#hamburger');
var mobileMenu = document.querySelector('#mobile-menu');
var nav = document.querySelector('nav');

var toggleMenu = function toggleMenu() {
  if (hamburger.innerText === 'menu') {
    nav.classList.add('expanded');
    hamburger.innerText = 'close';
  } else {
    console.log("c'était pas marqué menu");
    nav.classList.remove('expanded');
    hamburger.innerText = 'menu';
  }
};

hamburger.onclick = toggleMenu;
mobileMenu.querySelectorAll('a').forEach(function (a) {
  a.onclick = function () {
    toggleMenu();
    setTimeout(function () {
      window.scrollBy(0, -61);
    }, 10);
  };
});