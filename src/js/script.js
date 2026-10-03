// VARIABILI
// variabili che puntano alle card
const squirtle = document.getElementById("squirtle");
const charmander = document.getElementById("charmander");
const bulbasaur = document.getElementById("bulbasaur");
const pikachu = document.getElementById("pikachu");

// variabili che puntano alla personalizzazione specifica per la sezione della musica del sito
const music = document.getElementById("musicWebsite");
const btn = document.getElementById("btnMusic");
const volume = document.getElementById("volumeSlider");

// salvataggio della memoria del volume
let lastVolume = volume.value;

// impostazioni del volume iniziale 
music.volume = 0.5;
volume.value = 0.5;

// variabile per la selezione del suono per l'effetto del flip della pagina
const flip = document.getElementById("flipEffect");

// variabile per l'overlay della carta
const overlay = document.getElementById("overlay");

// impostazioni fisse per il volume dell'effetto della carta
flip.volume = 1;

// CLICK FUNCTION
// funzione per far si che sia scoperta una sola carta
function closeCards(clickedCard) {
    if(clickedCard !== squirtle) {
        squirtle.classList.remove("is-flipped");
    }

    if(clickedCard !== charmander) {
        charmander.classList.remove("is-flipped");
    }

    if(clickedCard !== bulbasaur) {
        bulbasaur.classList.remove("is-flipped");
    }

    if(clickedCard !== pikachu) {
        pikachu.classList.remove("is-flipped");
    }

    clickedCard.classList.toggle("is-flipped");
}

// funzione per il dbclic della carta
function openCards(dbClickedCard) {
    if(dbClickedCard.classList.contains("zoomed") === true) {
        overlay.style.display = "flex";
    } else {
        overlay.style.display = "none";
    }
}

// funzione per l'effetto del flip della carta
function soundEffect() {
    flip.currentTime = 0;
    flip.play();
}

// evento per il click della carta di squirtle
squirtle.addEventListener("click", function() {
    // funzione per il flip della carta
    closeCards(squirtle);
    // funzione per il suono della carta
    soundEffect();
})

// evento per il click della carta di charmander
charmander.addEventListener("click", function() {
    // funzione per il flip della carta
    closeCards(charmander);
    // funzione per il suono della carta
    soundEffect();
})

// evento per il click della carta di bulbasaur
bulbasaur.addEventListener("click", function() {
    // funzione per il flip della carta
    closeCards(bulbasaur);
    // funzione per il suono della carta
    soundEffect();
})

// evento per il click della carta di pikachu
pikachu.addEventListener("click", function() {
    // funzione per il flip della carta
    closeCards(pikachu);
    //funzione per il suono della carta
    soundEffect();
})

// evento per la gestione dei tasti di scelta delle carte
document.addEventListener("keydown", function(e) {
    if (e.key === "0") {
        closeCards(squirtle);
        soundEffect();
    } else if (e.key === "1") {
        closeCards(charmander);
        soundEffect();
    } else if (e.key === "2") {
        closeCards(bulbasaur);
        soundEffect();
    } else if (e.key === "3") {
        closeCards(pikachu);
        soundEffect();
    }
});

// evento gestione pulsante musica
btn.addEventListener("click", function() {
    if(music.paused) {
        // se era in pausa, ripristina il volume salvato prima di mutare
        if (lastVolume == 0) {
            lastVolume = 0.5;
        }

        music.volume = lastVolume;
        volume.value = lastVolume;

        music.play();
        btn.className = "bi bi-volume-up-fill"; // icona audio attiva
    } else {
        // se invece la musica sta suonando, salvare il valore prima di azzerare
        lastVolume = volume.value;

        music.volume = 0;
        volume.value = 0;

        music.pause();
        btn.className = "bi bi-volume-mute-fill"; // icona audio muta
    }
})

// evento gestione slider volume
volume.addEventListener("input", function() {
    // aggiornare sempre il volume dell'audio in base allo slider
    music.volume = volume.value;

    if(volume.value == 0) {
        //se si porta la levetta a zero
        btn.className = "bi bi-volume-mute-fill";
    } else {
        // se si sposta la levetta sopra lo zero, aggiornare la memoria
        lastVolume = volume.value;

        // se la musica sta suonando, impostare l'icona dell'audio in attiva
        if (!music.paused) {
            btn.className = "bi bi-volume-up-fill";
        }
    }
})

// eventi gestione doppio clic card
squirtle.addEventListener("dblclick", function() {
    squirtle.classList.toggle("zoomed");
    openCards(squirtle);
})

charmander.addEventListener("dblclick", function() {
    charmander.classList.toggle("zoomed");
    openCards(charmander);
})

bulbasaur.addEventListener("dblclick", function() {
    bulbasaur.classList.toggle("zoomed");
    openCards(bulbasaur);
})

pikachu.addEventListener("dblclick", function() {
    pikachu.classList.toggle("zoomed");
    openCards(pikachu);
})