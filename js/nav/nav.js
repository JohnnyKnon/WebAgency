"use strict";

// menubar
const MENU_BTN = document.querySelector('.hamburger');
// nav menu
const NAVBAR = document.querySelector('#navbar');
const NAV_MENU = document.querySelector('.screen__pc');
const NAV_MENU_BOX = document.querySelector('.navbar__menu__contents')
// line
const LINE_ONE = document.querySelector('.line-1');
const LINE_TWO = document.querySelector('.line-2');
const LINE_THREE = document.querySelector('.line-3');

const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    
    if(window.scrollY > navbarHeight){
        NAVBAR.classList.add('navbar--dark');
    }else{
        NAVBAR.classList.remove('navbar--dark');
    }
});

MENU_BTN.addEventListener('click', ()=>{
    // Open
    NAV_MENU_BOX.classList.toggle('navbar__menu-active');
    // toggle btn action
    LINE_ONE.classList.toggle('line-1-active');
    LINE_TWO.classList.toggle('line-2-active');
    LINE_THREE.classList.toggle('line-3-active');
});

// Menu Smooth moving
NAV_MENU.addEventListener('click', (event)=>{ // 클릭한 이벤트 추가
    const target = event.target; //target (눌렀을때에 해당 타겟에 이벤트)
    const link = target.dataset.link; //눌려진 타켓에 링크 값
    if(link == null){
        return;
    }
    NAV_MENU_BOX.classList.remove('navbar__menu-active');
    LINE_ONE.classList.remove('line-1-active');
    LINE_TWO.classList.remove('line-2-active');
    LINE_THREE.classList.remove('line-3-active');
   scrollIntoView(link);
});


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector); //scrollIntoView엘리멘트 의 부모 컨테이너로 스크롤되는 메소드
    scrollTo.scrollIntoView({behavior: "smooth"});
}
