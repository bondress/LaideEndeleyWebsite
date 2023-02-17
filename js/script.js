// Script to toggle navigation display
let siteNav = document.querySelector(".site-nav");
let toggleWrap = document.querySelector(".toggle-wrap");
let navToggle = document.querySelector(".nav-toggle");
toggleWrap.onclick = function(e){
    siteNav.classList.toggle("nav-open");
    navToggle.classList.toggle("toggle-open");
}