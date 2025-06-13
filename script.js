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

document.getElementById('Relocations-container').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from reloading

    const name = document.getElementById('name').value;
    const duels = document.getElementById('duels').value;
    const power = document.getElementById('power').value;
    const playerType = document.querySelector('input[name="playerType"]:checked').value;

    console.log("Submitted Data:");
    console.log("In-Game Name:", name);
    console.log("Duels Points:", duels);
    console.log("Combat Power:", power);
    console.log("Player Type:", playerType);
  });