"use strict";

// menubar
const MENU_BTN = document.querySelector('#menubar');
// nav menu
const NAV_MENU = document.querySelector('.screen__pc');
// Spans
const SPAN_STYLE = document.querySelector('.span');
// line
const LINE_ONE = document.querySelector('#line-1');
const LINE_TWO = document.querySelector('#line-2');
const LINE_THREE = document.querySelector('#line-3');



// Menu Smooth moving
NAV_MENU.addEventListener('click', (event)=>{ // 클릭한 이벤트 추가
    const target = event.target; //target (눌렀을때에 해당 타겟에 이벤트)
    const link = target.dataset.link; //눌려진 타켓에 링크 값
    if(link == null){
        return;
    }
    NAV_MENU.classList.remove('screen__pc-active');
    LINE_ONE.classList.remove('line-1-active');
    LINE_TWO.classList.remove('line-2-active');
    LINE_THREE.classList.remove('line-3-active');
   scrollIntoView(link);
});


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector); //scrollIntoView엘리멘트 의 부모 컨테이너로 스크롤되는 메소드
    scrollTo.scrollIntoView({behavior: "smooth"});
}

