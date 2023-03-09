// Reusable functions
// Function to retrieve single elements
const getOne = (element) => {
  return document.querySelector(element);
};

// Function to retrieve multiple elements with same class name
const getAll = (elements) => {
  return document.querySelector(elements);
};

// Function to pad single numbers with zero and/or pluralize/depluralize days, hours, minutes and seconds.
function padOrPluralize(variable, text) {
  variable = variable < 10 ? "0" + variable : variable;
  text = variable < 2 ? text : text + "s";
  return variable + " " + text;
}

// Script to toggle navigation display
let siteNav = getOne(".site-nav");
let toggleWrap = getOne(".toggle-wrap");
let navToggle = getOne(".nav-toggle");

toggleWrap.onclick = function (e) {
  siteNav.classList.toggle("nav-open");
  navToggle.classList.toggle("toggle-open");
};

// Script to animate slideshow (for TWS 2)
/* let slideIndex = 0;
showSlides();

function showSlides(){
    let i, slides = document.getElementsByClassName("auto-slides");

    for(i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length){ slideIndex = 1};
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000);
} */