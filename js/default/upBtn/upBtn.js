'use strict';

// Up Button
const UP_BTN = document.querySelector('.up');
UP_BTN.addEventListener('click', () => {
  scrollIntoView('#home');
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector); //scrollIntoView엘리멘트 의 부모 컨테이너로 스크롤되는 메소드
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
