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

const btnLikesAll = document.querySelectorAll('.gallery__likes-button')
btnLikesAll.forEach(function (btnLikes) {
  btnLikes.addEventListener('click', function (evt) {
    const numberSpan = evt.target.nextElementSibling;
    if (numberSpan) {
      const num = parseInt(numberSpan.innerText, 10);
      if (!isNaN(num)) {
        numberSpan.innerText = String(num + 1);
      }
    }
  });
});
