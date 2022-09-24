/* ---------------- Mobile Menu ---------------- */

const appearMobileMenu = document.querySelector('.mobile-menu');
const disAppearMobileMenu = document.querySelector('.mobile-menu');
const disAppearMobileMenuPortfolio = document.querySelector('.mobile-menu');
const disAppearMobileMenuAbout = document.querySelector('.mobile-menu');
const disAppearMobileMenuContact = document.querySelector('.mobile-menu');
const body = document.querySelector('body');

function mobileMenu() {
  const navMenuDelProp = document.getElementById('nav-menu');
  navMenuDelProp.style.display = 'none';
  const appearMobileDivision = document.createElement('div');
  appearMobileDivision.classList.add('mobile-menu-div');
  appearMobileDivision.setAttribute('id', 'rmv');
  appearMobileMenu.appendChild(appearMobileDivision);

  const appearMobileDiv = document.createElement('div');
  appearMobileDiv.classList.add('mobile-menu-close');
  appearMobileDivision.appendChild(appearMobileDiv);

  const appearMobileImg = document.createElement('img');
  appearMobileImg.classList.add('mobile-menu-close-icon');
  appearMobileDiv.appendChild(appearMobileImg);
  appearMobileImg.setAttribute('src', 'assets/images/close-icon.svg');
  appearMobileImg.setAttribute('onclick', 'disappearMobileMenu()');
  appearMobileImg.setAttribute('id', 'disappear');

  const appearMobileUl = document.createElement('ul');
  appearMobileUl.classList.add('mobile-list');
  appearMobileDivision.appendChild(appearMobileUl);

  const appearMobileUlLi1 = document.createElement('li');
  appearMobileUlLi1.classList.add('mobile-list-item');
  appearMobileUl.appendChild(appearMobileUlLi1);

  const appearMobileLink1 = document.createElement('a');
  appearMobileLink1.classList.add('mobile-link');
  appearMobileUlLi1.appendChild(appearMobileLink1);
  appearMobileLink1.setAttribute('href', './index.html');
  appearMobileLink1.textContent = 'Home';
  appearMobileLink1.setAttribute('onclick', 'disappearMobileMenuPortfolio()');

  const appearMobileUlLi2 = document.createElement('li');
  appearMobileUlLi2.classList.add('mobile-list-item');
  appearMobileUl.appendChild(appearMobileUlLi2);

  const appearMobileLink2 = document.createElement('a');
  appearMobileLink2.classList.add('mobile-link');
  appearMobileUlLi2.appendChild(appearMobileLink2);
  appearMobileLink2.setAttribute('href', './about.html');
  appearMobileLink2.textContent = 'About';
  appearMobileLink1.setAttribute('onclick', 'disappearMobileMenuAbout()');

  const appearMobileUlLi3 = document.createElement('li');
  appearMobileUlLi3.classList.add('mobile-list-item');
  appearMobileUl.appendChild(appearMobileUlLi3);

  const appearMobileLink3 = document.createElement('a');
  appearMobileLink3.classList.add('mobile-link');
  appearMobileUlLi3.appendChild(appearMobileLink3);
  appearMobileLink3.setAttribute('href', '#program');
  appearMobileLink3.textContent = 'Program';
  appearMobileLink1.setAttribute('onclick', 'disappearMobileMenuContact()');
  const MobileMenu = document.getElementById('id-for-js');
  MobileMenu.style.display = 'block';
  body.classList.add('body-noScroll');
}

appearMobileMenu.addEventListener('click', mobileMenu);

//  Script for the 'mobile-menu-close' icon - Samuel's commit

function disappearMobileMenu() {
  const removeMobileMenu = document.getElementById('rmv');
  removeMobileMenu.remove();
  const navMenuDelProp = document.getElementById('nav-menu');
  navMenuDelProp.style.display = 'flex';

  body.classList.remove('body-noScroll');
}
function disappearMobileMenuPortfolio() {
  disappearMobileMenu();
  window.open('../#portfolio', '_self');
}

function disappearMobileMenuAbout() {
  disappearMobileMenu();
  window.open('../#about-me', '_self');
}

function disappearMobileMenuContact() {
  disappearMobileMenu();
  window.open('../#contact', '_self');
}

disAppearMobileMenu.addEventListener('click', disappearMobileMenu);
disAppearMobileMenuPortfolio.addEventListener('click', disappearMobileMenuPortfolio);
disAppearMobileMenuAbout.addEventListener('click', disappearMobileMenuAbout);
disAppearMobileMenuContact.addEventListener('click', disappearMobileMenuContact);