document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.querySelector('.nav__hamburger-button');
  const menu = document.querySelector('.nav__menu');
  const menuLinks = document.querySelectorAll('.nav__link');

  function toggle() {
    menu.classList.toggle('nav__menu--visible');
    hamburgerBtn.classList.toggle('nav__hamburger-clicked');
  }

  menuLinks.forEach((el) => {
    // eslint-disable-next-line no-param-reassign
    el.onclick = toggle;
  });

  hamburgerBtn.onclick = toggle;
});
