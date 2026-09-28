// VARIABILI
const squirtle = document.getElementById("squirtle");
const charmander = document.getElementById("charmander");
const bulbasaur = document.getElementById("bulbasaur");
const pikachu = document.getElementById("pikachu");

// CLICK FUNCTION
// evento per il click della carta di squirtle
squirtle.addEventListener("click", function() {
    squirtle.classList.toggle("is-flipped");
})

// evento per il click della carta di charmander
charmander.addEventListener("click", function() {
    charmander.classList.toggle("is-flipped");
})

// evento per il click della carta di bulbasaur
bulbasaur.addEventListener("click", function() {
    bulbasaur.classList.toggle("is-flipped");
})

// evento per il click della carta di pikachu
pikachu.addEventListener("click", function() {
    pikachu.classList.toggle("is-flipped");
})