// Hosting Slider
let slideIndex = 1;
showSlides(slideIndex);

// function plus
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('slides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  switch (slides[slideIndex - 1]) {
    case slides[0]:
      document.querySelector('.apply__box').style.transform = 'translate(0)';
      break;

    case slides[1]:
      document.querySelector('.apply__box').style.transform =
        'translateX(-400px)';
      break;

    case slides[2]:
      document.querySelector('.apply__box').style.transform =
        'translateX(-800px)';
      break;

    case slides[3]:
      document.querySelector('.apply__box').style.transform =
        'translateX(-1200px)';
      break;
    case slides[4]:
      document.querySelector('.apply__box').style.transform =
        'translateX(-1600px)';
      break;
    case slides[5]:
      document.querySelector('.apply__box').style.transform =
        'translateX(-2000px)';
      break;
  }
  dots[slideIndex - 1].className += ' active';
}
