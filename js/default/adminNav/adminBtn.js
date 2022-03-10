'use strict';

const ADMIN_TOGGLE_BTN = document.querySelector('.admin__toggle__btn');
const OPEN_ICON = document.querySelector('.open');
const CLOSE_ICON = document.querySelector('.close');
const ADMIN_NAV_TOTAL_BOX = document.querySelector('.admin');

ADMIN_TOGGLE_BTN.addEventListener('click', () => {
  ADMIN_NAV_TOTAL_BOX.classList.toggle('admin-active');
  OPEN_ICON.classList.toggle('open-hidden');
  CLOSE_ICON.classList.toggle('close-active');
});
