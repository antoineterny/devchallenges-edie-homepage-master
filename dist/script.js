"use strict";var hamburger=document.querySelector("#hamburger"),mobileMenu=document.querySelector("#mobile-menu"),nav=document.querySelector("nav"),toggleMenu=function(){"menu"===hamburger.innerText?(nav.classList.add("expanded"),hamburger.innerText="close"):(console.log("c'était pas marqué menu"),nav.classList.remove("expanded"),hamburger.innerText="menu")};hamburger.onclick=toggleMenu,mobileMenu.querySelectorAll("a").forEach(function(e){e.onclick=function(){toggleMenu(),setTimeout(function(){window.scrollBy(0,-61)},10)}});