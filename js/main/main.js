// Main Home Cursor Effect
const CONTENT = '<Develop your business/>';
const HOME_TITLE = document.querySelector('.home__title');
let n = 0;

const TYPING = function(){
    HOME_TITLE.innerHTML += CONTENT[n++];
    if(n == CONTENT.length){
        clearInterval(SPEED);
    }
};
const SPEED = setInterval(TYPING, 200);

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

// Privacy Policy
const PRIVACY_OPEN = document.querySelector('#privacy');
const PRIVACY_CLOSE = document.querySelector('#privacy__close');
const PRIVACY_BG = document.querySelector('.privacy__bg');

PRIVACY_OPEN.addEventListener("click", () => {
    PRIVACY_BG.classList.add('privacy__bg-active');
});
PRIVACY_CLOSE.addEventListener("click", () => {
    PRIVACY_BG.classList.remove('privacy__bg-active');
});