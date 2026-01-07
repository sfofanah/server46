const myClanCards = document.querySelectorAll(".new-card-link");
console.log("Clan links found:", myClanCards.length);

myClanCards.forEach(function(card) {
  card.addEventListener("click", function(e) {
    e.preventDefault(); // stops the page from navigating away

    const clickedCard = e.target;
    const clanName = clickedCard.dataset.clan;

    console.log("Clan clicked:", clanName);
  });
});

