<<<<<<< HEAD
// In JavaScript, you use something called document.querySelector()
// It lets you grab an element by class, ID, or tag.
const scrollContainer = document.querySelector('.container1')

let scrollInterval; // This will hold the interval ID

//Every time this function runs, we’ll say:
//“Move the scroll 1 pixel to the right.”
function autoScroll() {
    
    //scrollWidth = total width of all scrollable content

    //clientWidth = visible width of the container

    //So scrollLeft >= scrollWidth - clientWidth means → “We’re at the end”

    //If true → reset scroll to 0 (start)
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth){
        scrollContainer.scrollLeft = 0;
    }else{
        scrollContainer.scrollLeft += 1;
    }
    
}


function startScroll() {
  scrollInterval = setInterval(autoScroll, 30);
}

function stopScroll() {
  clearInterval(scrollInterval);
}

// Start scrolling on load
startScroll();

// Pause on hover
scrollContainer.addEventListener('mouseenter', stopScroll);
scrollContainer.addEventListener('mouseleave', startScroll);

// Video Section
const videoSection = document.querySelector('.video-section');

function revealOnScroll() {
  const sectionTop = videoSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    videoSection.classList.add('reveal');
    window.removeEventListener('scroll', revealOnScroll); // run only once
  }
}

window.addEventListener('scroll', revealOnScroll);
=======
// In JavaScript, you use something called document.querySelector()
// It lets you grab an element by class, ID, or tag.
const scrollContainer = document.querySelector('.container1')

let scrollInterval; // This will hold the interval ID

//Every time this function runs, we’ll say:
//“Move the scroll 1 pixel to the right.”
function autoScroll() {
    
    //scrollWidth = total width of all scrollable content

    //clientWidth = visible width of the container

    //So scrollLeft >= scrollWidth - clientWidth means → “We’re at the end”

    //If true → reset scroll to 0 (start)
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth){
        scrollContainer.scrollLeft = 0;
    }else{
        scrollContainer.scrollLeft += 1;
    }
    
}


function startScroll() {
  scrollInterval = setInterval(autoScroll, 30);
}

function stopScroll() {
  clearInterval(scrollInterval);
}

// Start scrolling on load
startScroll();

// Pause on hover
scrollContainer.addEventListener('mouseenter', stopScroll);
scrollContainer.addEventListener('mouseleave', startScroll);

// Video Section
const videoSection = document.querySelector('.video-section');

function revealOnScroll() {
  const sectionTop = videoSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    videoSection.classList.add('reveal');
    window.removeEventListener('scroll', revealOnScroll); // run only once
  }
}

window.addEventListener('scroll', revealOnScroll);
>>>>>>> d17e12a2eaea431eee4cfb38cb27b47e9f35d310
