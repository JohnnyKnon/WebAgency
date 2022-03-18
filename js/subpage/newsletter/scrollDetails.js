const IMAGE_DETAIL_BTN = document.querySelector('#image__more');
const HTML_DETAIL_BTN = document.querySelector('#html__more');
const WEBZIN_DETAIL_BTN = document.querySelector('#webzin__more');

IMAGE_DETAIL_BTN.addEventListener('click', () => {
  scrollIntoView('#image__info');
});
HTML_DETAIL_BTN.addEventListener('click', () => {
  scrollIntoView('#html__info');
});
WEBZIN_DETAIL_BTN.addEventListener('click', () => {
  scrollIntoView('#webzin__info');
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector); //scrollIntoView엘리멘트 의 부모 컨테이너로 스크롤되는 메소드
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
