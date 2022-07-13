const searchForm = document.querySelector('.header__form.form-header');
const searchInput = document.querySelector('.form-header__input');
const searchBtn = document.querySelector('.form-header__button');
const windowOuterWidth = window.outerWidth;


document.addEventListener('click', (e) => {
  if (searchBtn.classList.contains('active') && !e.target.closest('.header__form.form-header')) {
    searchBtn.classList.remove('active');
    searchInput.style.display = 'none';
    searchForm.style.cssText = `
      flex: 0 0 25px;
    `;
    searchBtn.style.cssText = `
      right: 0;
    `;
  }
});

searchForm.addEventListener('click', (e) => {

  if (windowOuterWidth <= 360 && !searchBtn.classList.contains('active')) {
    e.preventDefault();
    searchBtn.classList.add('active');
    searchInput.style.display = 'block';
    searchForm.style.cssText = `
      flex: 0 0 100%;
    `;
    searchBtn.style.cssText = `
      right: 10px;
    `;
  } /* else {
    e.target.submit();
  } */

});







/* const iconMenu = document.querySelector(".icon-menu");
const menuBody = document.querySelector('.menu__body');
const header = document.querySelector('header.header');
const menuLink = document.querySelectorAll('.menu-link');


const menuList = document.querySelector('.menu__list');
const menuItem = document.querySelector('.menu__item');


iconMenu.addEventListener('click', (e) => {
  if (menuBody.classList.contains('open-menu')) {
    menuBody.style.height = '';
    iconMenu.classList.remove('open-menu');
    menuBody.classList.remove('open-menu');
    header.style.marginBottom = 0;
  } else {
    menuBody.style.height = menuBody.scrollHeight + 'px';
    iconMenu.classList.add('open-menu');
    menuBody.classList.add('open-menu');
    header.style.marginBottom = menuBody.scrollHeight + 'px';
  }
});

menuBody.addEventListener('click', (e) => {
  if (e.target.closest('.menu__link')) {
    menuBody.classList.remove('open-menu');
    header.style.marginBottom = 0;
  }
});

document.addEventListener('scroll', (e) => {
  if (menuBody.classList.contains('open-menu')) {
    menuBody.style.height = '';
    iconMenu.classList.remove('open-menu');
    menuBody.classList.remove('open-menu');
    header.style.marginBottom = 0;
  }
});


const popupLogin = document.querySelector('.popup.popup-login');
const btnClose = document.querySelector('.popup__close');

const loginBtn = document.querySelector('.login-buttons__login');
const registrationBtn = document.querySelector('.login-buttons__registration');


loginBtn.addEventListener('click', (e) => {
  popupOpen(popupLogin);
});

registrationBtn.addEventListener('click', (e) => {
  popupOpen(popupLogin);
});

btnClose.addEventListener('click', (e) => {
  popupClose(popupLogin);
});

popupLogin.addEventListener('click', (e) => {
  if (e.target === popupLogin) {
    popupClose(popupLogin);
  }
});

function popupOpen(p) {
  p.classList.add('popup-active');
}
function popupClose(p) {
  p.classList.remove('popup-active');
}

 */