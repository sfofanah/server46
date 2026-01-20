const myTest = document.querySelectorAll(".new-card-link");
console.log("What was found:", myTest.length);

myTest.forEach(function(card) {
    card.addEventListener("click", function(event) {
        event.preventDefault();
        const clanName = card.dataset.clan;
        const getParagraphID = card.querySelector(".test");
        getParagraphID.textContent = "Clicked: " + clanName;
        
    })
})

/* ----------------------------- CLS.html ------------------------------------------ */

// Select the button - (find the button)
const toggleBtn = document.getElementById("toggleRolesBtn"); 

// Select all roles texts - (find the paragraphs with the class "role-text")
const roleTexts = document.querySelectorAll(".role-text");

// Make the button visible - (set the display of the button to block)
let rolesVisible = true;

// Add a click listener - (when the button is clicked, do something)
toggleBtn.addEventListener("click", function() {
  
  // If the roles are visible, loop through each one and hide them.
  if (rolesVisible) {
    roleTexts.forEach(function(role) {
      role.style.display = "none"; // Hide the role text
    });

    rolesVisible = false; // remember they are now hidden
 
  } else {
    // If the roles are hidden, loop through each one and show them.
    roleTexts.forEach(function(role) {
      role.style.display = ""; // Show the role text
    });

    rolesVisible = true; // remember they are now visible

  }

});



/* Let's reference the new button */
const nameBtn = document.getElementById("toggleNameBtn");

// Let's reference all the name texts
const nameTexts = document.querySelectorAll(".name-text");




























/*
myTest.addEventListener("click", function(event) {
    event.preventDefault();
    myTest.textContent = "I changed the text using JS";
})

*/




/*

const myClanCards = document.querySelectorAll(".new-card-link");
console.log("Clan links found:", myClanCards.length);

myClanCards.forEach(function(card) {
  card.addEventListener("click", function(e) {
    e.preventDefault(); // stops the page from navigating away

    const clickedCard = e.currentTarget;
    const clanName = clickedCard.dataset.clan;

    console.log("Clan clicked:", clanName);
  });
});

*/