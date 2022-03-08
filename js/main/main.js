// Main Home Cursor Effect
const CONTENT = '<Develop your business/>';
const HOME_TITLE = document.querySelector('.home__title');
let n = 0;

const TYPING = function () {
  HOME_TITLE.innerHTML += CONTENT[n++];
  if (n == CONTENT.length) {
    clearInterval(SPEED);
  }
};
const SPEED = setInterval(TYPING, 200);
