// Sign Pop Up Open handler
// SIGN BG
const SIGN_BG = document.querySelector('.sign__bg');
// BTN
const SIGN_OPEN = document.querySelector('#sign__open');
const SIGN_CLOSE = document.querySelector('#sign__close');
// SIGN CONTENTS
const SIGN_UP = document.querySelector('.signUp');
const SIGN_IN = document.querySelector('.signIn');

// SIGN OPEN
SIGN_OPEN.addEventListener('click', () => {
  SIGN_BG.classList.add('sign__bg-active');
  //   loader
  document.body.classList.add('reveal');
});

// SIGN CLOSE
SIGN_CLOSE.addEventListener('click', () => {
  SIGN_BG.classList.remove('sign__bg-active');
  SIGN_UP.classList.remove('signUp-stop');
  SIGN_IN.classList.remove('signIn-active');
  //   loader
  document.body.classList.remove('reveal');
});

// Sign In open handler
const SIGN_IN_BTN = document.querySelector('#signIn__btn');
const RETURN_TO_SIGN_UP = document.querySelector('#signUp__move__btn');

SIGN_IN_BTN.addEventListener('click', () => {
  SIGN_UP.classList.add('signUp-stop');
  SIGN_IN.classList.add('signIn-active');
});

RETURN_TO_SIGN_UP.addEventListener('click', () => {
  SIGN_UP.classList.remove('signUp-stop');
  SIGN_IN.classList.remove('signIn-active');
});
