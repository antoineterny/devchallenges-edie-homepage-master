const hamburger = document.querySelector('#hamburger')
const mobileMenu = document.querySelector('#mobile-menu')
const nav = document.querySelector('nav')
const toggleMenu = () => {
  if (hamburger.innerText === 'menu') {
    nav.classList.add('expanded')
    hamburger.innerText = 'close'
  } else {
    console.log("c'était pas marqué menu")
    nav.classList.remove('expanded')
    hamburger.innerText = 'menu'
  }
}
hamburger.onclick = toggleMenu
mobileMenu.querySelectorAll('a').forEach((a) => {
  a.onclick = function() {
    toggleMenu()
    setTimeout(function() {
      window.scrollBy(0, -61)
    }, 10)
    
  } 
})