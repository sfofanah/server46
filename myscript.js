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

/* ----------------------------------------------------------------------- */









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