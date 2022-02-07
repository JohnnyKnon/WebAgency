// Menu Btn-------------
// Open BTN
const MENU_BTN = document.querySelector('#menu__btn');
// MENU / MAIN
const MENU_CONTENTS = document.querySelector('.menu__contents');
const MAIN_CONTENTS = document.querySelector('#main__contents');
const MAIN_CONTENTS_TWO = document.querySelector('#main__contents-two');

// Hamburger Menu


MENU_BTN.addEventListener("click", () =>{
    document.body.classList.toggle("reveal");
    MAIN_CONTENTS.classList.toggle('main__contents-active');
    MAIN_CONTENTS_TWO.classList.toggle('main__contents-active-two');
    MENU_CONTENTS.classList.toggle('menu__contents-active');
    MENU_BTN.classList.toggle('toggle-active');
    // 초를 위한 변수
        let time =1;
            // setInterval (실행될 함수)
        const COUNTDOWN = setInterval(countDown, 1000);
        // function
            function countDown(){
                if(time > 0){
                    time++;

                    if(time == 2){
                        document.body.classList.toggle("menuContents-active");

                        clearInterval(COUNTDOWN);
                    }
                }
            }
});

