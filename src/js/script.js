// VARIABILI
const squirtle = document.getElementById("squirtle");
const charmander = document.getElementById("charmander");
const bulbasaur = document.getElementById("bulbasaur");
const pikachu = document.getElementById("pikachu");

// CLICK FUNCTION
// funzione generica per far si che sia scoperta una sola carta
function closeCards() {
    squirtle.classList.remove("is-flipped");
    charmander.classList.remove("is-flipped");
    bulbasaur.classList.remove("is-flipped");
    pikachu.classList.remove("is-flipped");
}

// evento per il click della carta di squirtle
squirtle.addEventListener("click", function() {
    closeCards();
    squirtle.classList.toggle("is-flipped");
})

// evento per il click della carta di charmander
charmander.addEventListener("click", function() {
    closeCards();
    charmander.classList.toggle("is-flipped");
})

// evento per il click della carta di bulbasaur
bulbasaur.addEventListener("click", function() {
    closeCards();
    bulbasaur.classList.toggle("is-flipped");
})

// evento per il click della carta di pikachu
pikachu.addEventListener("click", function() {
    closeCards();
    pikachu.classList.toggle("is-flipped");
})