
// Sign Pop Up Open handler
// BTN
const SIGN_OPEN = document.querySelector('#sign__open');
const SIGN_CLOSE = document.querySelector('#sign__close');
// SIGN BG
const SIGN_BG = document.querySelector('.sign__bg');

// SIGN OPEN
SIGN_OPEN.addEventListener("click", () =>{
    SIGN_BG.classList.add('sign__bg-active');
});

// SIGN CLOSE
SIGN_CLOSE.addEventListener("click", () =>{
    SIGN_BG.classList.remove('sign__bg-active');
});