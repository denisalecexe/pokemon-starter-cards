// VARIABILI
// variabili che puntano alle card
const squirtle = document.getElementById("squirtle");
const charmander = document.getElementById("charmander");
const bulbasaur = document.getElementById("bulbasaur");
const pikachu = document.getElementById("pikachu");

// variabili che puntano alla personalizzazione specifica per la sezione della musica del sito
const music = document.getElementById("musicWebsite");
const btnVolume = document.getElementById("btnMusic");
const volume = document.getElementById("volumeSlider");

// salvataggio della memoria del volume
let lastVolume = volume.value;

// impostazioni del volume iniziale
music.volume = 0.5;
volume.value = 0.5;

// variabile per la selezione del suono per l'effetto del flip della pagina
const flip = document.getElementById("flipEffect");

// impostazioni fisse per il volume dell'effetto della carta
flip.volume = 1;

// variabile per l'overlay della carta
const overlay = document.getElementById("overlay");

// variabile per il bottone della scelta della carta
const btnSelection = document.getElementById("btn-starter");

// gestione dei tasti di scelta delle carte
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

// CLICK FUNCTION
// funzione per far si che sia scoperta una sola carta
function closeCards(clickedCard) {
    if (overlay.style.display === "flex") {
        return;
    }

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

// funzione per il dblclick della carta (gestione con il clone pulito)
function openCards(dbClickedCard) {
    // svuota l'overlay per evitare che si accumulino vecchie carte se ne apri più di una
    // overlay.innerHTML = "";
    const oldCard = overlay.querySelector(".box-card");
    
    if(oldCard) {
        oldCard.remove();
    }

    // crea una copia esatta della carta cliccata (HTML e contenuto)
    const cloneCard = dbClickedCard.cloneNode(true);
    
    // rimuove l'id dalla carta clonata (due elementi nella stessa pagina non devono mai avere lo stesso id)
    cloneCard.removeAttribute("id");
    
    // aggiunge la classe .zoomed SOLO alla carta clonata, così l'originale rimane com'era sotto
    cloneCard.classList.add("zoomed");

    // questo mantiene l'overlay aperto se clicchi direttamente sulla carta ingrandita
    cloneCard.addEventListener("click", function(e) {
        e.stopPropagation();
    });

    // inserisce la carta clonata dentro l'overlay
    overlay.appendChild(cloneCard);

    // mostra l'overlay e blocca lo scroll della pagina sottostante
    overlay.style.display = "flex";
    document.body.style.overflow = "hidden";
}

// funzione per l'effetto del flip della carta
function soundEffect() {
    if (overlay.style.display === "flex") {
        return;
    }
    
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

// evento gestione pulsante musica
btnVolume.addEventListener("click", function() {
    if(music.paused) {
        // se era in pausa, ripristina il volume salvato prima di mutare
        if (lastVolume == 0) {
            lastVolume = 0.5;
        }

        music.volume = lastVolume;
        volume.value = lastVolume;

        music.play();
        btnVolume.className = "bi bi-volume-up-fill"; // icona audio attiva
    } else {
        // se invece la musica sta suonando, salvare il valore prima di azzerare
        lastVolume = volume.value;

        music.volume = 0;
        volume.value = 0;

        music.pause();
        btnVolume.className = "bi bi-volume-mute-fill"; // icona audio muta
    }
})

// evento gestione slider volume
volume.addEventListener("input", function() {
    // aggiornare sempre il volume dell'audio in base allo slider
    music.volume = volume.value;

    if(volume.value == 0) {
        //se si porta la levetta a zero
        btnVolume.className = "bi bi-volume-mute-fill";
    } else {
        // se si sposta la levetta sopra lo zero, aggiornare la memoria
        lastVolume = volume.value;

        // se la musica sta suonando, impostare l'icona dell'audio in attiva
        if (!music.paused) {
            btnVolume.className = "bi bi-volume-up-fill";
        }
    }
})

// eventi gestione doppio clic card (chiamano la funzione openCards con il clone)
squirtle.addEventListener("dblclick", function() {
    openCards(squirtle);
})

charmander.addEventListener("dblclick", function() {
    openCards(charmander);
})

bulbasaur.addEventListener("dblclick", function() {
    openCards(bulbasaur);
})

pikachu.addEventListener("dblclick", function() {
    openCards(pikachu);
})

// evento gestione quando si esce dall'overlay
overlay.addEventListener("click", function() {
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
    /* Nota: le classi zoomed originali sulle carte 
    non servono più perché si usa il clone, 
    ma lasciarle qui non dà alcun fastidio. */
})

btnSelection.addEventListener("click", function(e) {
    // con questo si blocca la propagazione e si evita che il click chiuda l'overlay
    e.stopPropagation();

    // con questo invece si disattiva subito il bottone in modo definitivo dopo la scelta
    btnSelection.disabled = true;
})