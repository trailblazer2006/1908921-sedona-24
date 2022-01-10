const mainNav = document.querySelector('.main-nav');
const btnOpen = document.querySelector('.main-nav__button--open');
const btnClose = document.querySelector('.main-nav__button--close');

btnOpen.addEventListener('click', function () {
  mainNav.classList.remove('main-nav--closed');
  mainNav.classList.add('main-nav--opened');
});

btnClose.addEventListener('click', function () {
  mainNav.classList.remove('main-nav--opened');
  mainNav.classList.add('main-nav--closed');
});
