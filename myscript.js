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

/* ----------------------------- CLS.html (First Button) ------------------------------------------ */

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


/* ----------------------------- CLS.html (Second Button) ------------------------------------------ */

/* Let's reference the new button */
const nameBtn = document.getElementById("toggleNameBtn");

// Let's reference all the name texts
const nameTexts = document.querySelectorAll(".name-text");

// Let's get the second button text span
const nameBtnText = nameBtn.querySelector(".btn-text-2");

// let's get the second arrow span
const nameArrow = nameBtn.querySelector(".arrow-2");

// Let's keep track of whether names are visible
let namesVisible = true;

// Add a click listener to the name button
nameBtn.addEventListener("click", function() {
  
  // If names are visible, hide them
  if (namesVisible) { 
    nameTexts.forEach(function(name) {
      name.style.display = "none"; // Hide the name text
      nameBtnText.textContent = "Show Name"; // Change button text
      nameArrow.classList.remove("rotate"); // Rotate arrow
      namesVisible = false; // remember they are now hidden
    });
   
  } else {
    // If names are hidden, show them
    nameTexts.forEach(function(name) {
      name.style.display = ""; // Show the name text
      nameBtnText.textContent = "Hide Name"; // Change button text
      nameArrow.classList.add("rotate"); // Rotate arrow
      namesVisible = true; // remember they are now visible
    });
  }
  
});

/* ----------------------------- CLS.html (Learning Functions) ------------------------------------------ */

function greetLeader(name) {
  console.log("welcome, " + name);
}
// greetLeader("Rick");

function createLeaderMessage(name, role) {
  return name + " is our " + role;
}
const message = createLeaderMessage("Rick", "leader"); 
// console.log(message);

const leaderNames = ["Rick", "Daryl", "Michonne"];
function welcomeLeader(name) {
  return "Welcome, " + name;
}
// console.log(welcomeLeader(leaderNames[0])); 

/*
leaderNames.forEach(function(name) {
  console.log(welcomeLeader(name));
});

*/

const names = ["A", "B", "C"];

const unorderedList = document.getElementById("names-list");