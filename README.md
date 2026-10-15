# Pokémon Starter Selection Web App

Applicazione web interattiva a tema Pokémon che permette di esplorare e scegliere il proprio Pokémon iniziale attraverso un'esperienza immersiva, arricchita da animazioni fluide, effetti sonori e una gestione avanzata dello stato delle carte.

---

## Funzionalità (Features)

- **Flip delle carte:** Interazione con le carte per girarle dal dorso al fronte tramite click o comandi da tastiera.
- **Controllo di sicurezza (*Guard Clause*):** L'ingrandimento delle carte tramite doppio click è consentito esclusivamente quando la carta è girata sul lato frontale.
- **Modale Overlay Dinamica:** Visualizzazione ingrandita della carta scelta con blocco dello scroll della pagina sottostante.
- **Selezione dello Starter:** Un sistema di scelta definitiva con timer, animazioni di transizione ed effetti visivi.
- **Sezione Audio Integrata:** Riproduzione di effetti sonori dedicati (flip delle pagine) e lettore musicale in background con controllo del volume e persistenza dello stato.
- **Interfaccia Pixel Art:** Header personalizzato con elementi grafici in stile retro-gaming per la schermata di conferma finale.

---

## Tecnologie Utilizzate

Il progetto è stato sviluppato "vanilla", senza l'ausilio di framework pesanti, per massimizzare il controllo sulla logica e sulle performance:

- **HTML5:** Struttura semantica della pagina.
- **CSS3:** Stile personalizzato, animazioni, transizioni fluide e layout responsive.
- **JavaScript (ES6):** Gestione della logica di gioco, manipolazione del DOM, eventi e gestione dello stato.
- **Bootstrap Icons:** Iconografia per i controlli audio dell'interfaccia.

---

## Struttura del Progetto

``` txt
7_pokemon_starter_card/
└── src/
    ├── assets/            # Immagini, font, audio e cursori
    ├── js/
    │   └── script.js      # Logica, eventi e gestione dello stato
    ├── styles/
    │   └── style.css      # Stili personalizzati e animazioni
    ├── index.html         # Struttura principale della web app
    ├── LICENCE
    └── README.md
```

---

## Contribuire al progetto

Le pull request sono benvenute. Per modifiche sostanziali, si prega di aprire prima una segnalazione per discutere di cosa si desidera modificare.

---

## Autore
- Denis (Dharelyx) - Sviluppatore Junior appassionato di codice e problem solving.
- Progetto completato come parte del mio percorso.