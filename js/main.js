'use strict';

// Handle Click on "Contact me" button on home
const homeContactBtn = document.querySelector('.home__button');
homeContactBtn.addEventListener('click', ()=> {
    scrollIntoView('#footer')
});


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector); //scrollIntoView엘리멘트 의 부모 컨테이너로 스크롤되는 메소드
    scrollTo.scrollIntoView({behavior: "smooth"});
}

// Toggle button Mobile Navigation

const mobileNav = document.querySelector('.mobile__nav');
const toggleBtn = document.querySelector('.toggle__bar');
const deleteBtn = document.querySelector('.close__btn')

toggleBtn.addEventListener('click', () =>{
    mobileNav.classList.add('visible');
});

deleteBtn.addEventListener('click', ()=>{
    mobileNav.classList.remove('visible');
});