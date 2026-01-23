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

// Select the text inside the button
const roleBtnText = toggleBtn.querySelector(".btn-text");

// Select the arrow inside the button
const roleArrow = toggleBtn.querySelector(".arrow");

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
      roleBtnText.textContent = "Show Roles"; // Change button text
      roleArrow.classList.remove("rotate"); // Rotate arrow
      rolesVisible = false; // remember they are now hidden
    });

  } else {
    // If the roles are hidden, loop through each one and show them.
    roleTexts.forEach(function(role) {
      role.style.display = ""; // Show the role text
      roleBtnText.textContent = "Hide Roles"; // Change button text
      roleArrow.classList.add("rotate"); // Rotate arrow
      rolesVisible = true; // remember they are now visible
    });
  }

});



/* Let's reference the new button */
const nameBtn = document.getElementById("toggleNameBtn");

// Let's reference all the name texts
const nameTexts = document.querySelectorAll(".name-text");

// Let's keep track of whether names are visible
let namesVisible = true;

// Add a click listener to the name button
nameBtn.addEventListener("click", function() {
  
  // If names are visible, hide them
  if (namesVisible) { 
    nameTexts.forEach(function(name) {
      name.style.display = "none"; // Hide the name text
      nameBtn.textContent = "Show Name"; // Change button text
      namesVisible = false; // remember they are now hidden
    });
   
  } else {
    // If names are hidden, show them
    nameTexts.forEach(function(name) {
      name.style.display = ""; // Show the name text
      nameBtn.textContent = "Hide Name"; // Change button text
      namesVisible = true; // remember they are now visible
    });
  }
  
});




















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