/* eslint linebreak-style: ["error", "windows"] */
const arrow = document.querySelector('.arrow');
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.menu');
const body = document.querySelector('body');
let isShown = false;

// Hide arrow after animation
setTimeout(() => {
  arrow.style.scale = '0';
}, 8000);

// show menu when the hamburger menu icon is clicked and remove body scroll else restore default
menuBtn.onclick = () => {
  if (!isShown) {
    menuBtn.classList.add('menu-btn-active');
    navMenu.classList.add('menu-active');
    body.style.overflowY = 'hidden';
    isShown = true;
  } else {
    menuBtn.classList.remove('menu-btn-active');
    navMenu.classList.remove('menu-active');
    body.style.overflowY = 'auto';
    isShown = false;
  }
};