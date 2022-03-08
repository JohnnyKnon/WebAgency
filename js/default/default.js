// Privacy Policy
const PRIVACY_OPEN = document.querySelector('#privacy');
const PRIVACY_CLOSE = document.querySelector('#privacy__close');
const PRIVACY_BG = document.querySelector('.privacy__bg');

PRIVACY_OPEN.addEventListener('click', () => {
  PRIVACY_BG.classList.add('privacy__bg-active');
});
PRIVACY_CLOSE.addEventListener('click', () => {
  PRIVACY_BG.classList.remove('privacy__bg-active');
});
