const hamburger = document.querySelector('#hamburger')
const mobileMenu = document.querySelector('#mobile-menu')
const toggleMenu = () => {
  if (hamburger.innerText === 'menu') {
    mobileMenu.classList.remove('hidden')
    hamburger.innerText = 'close'
    return
  }
  mobileMenu.classList.add('hidden')
  hamburger.innerText = 'menu'
}
hamburger.onclick = toggleMenu
mobileMenu.querySelectorAll('a').forEach((a) => {
  a.onclick = () => toggleMenu
})