Array.prototype.chooseRandom = function() {
  return this[Math.floor(Math.random() * this.length)];
};

document.getElementById('surname').innerHTML = [
    // NERD/GEEK
    "geek",
    "nerd",
    "pythonist",
    "C++ self-taught",
    
    // GDR
    "il veggente",
    "nylo il divinatore",
    "the thief",
    
    // PERV
    "best onii-chan",
    "perv",
    
    // ABOUT ME
    "16yo guy",
    "italian guy",
    "blonde guy",
].chooseRandom()

document.getElementById('quote').innerHTML = [
    // CAPAREZZA
    "Mors Mea, Tacci Tua.",
    "SsssasssS",
    "Voglio una ragazza secessionista, con cui fare l'amore secessionista",
    "Ilaria condizionata ha rovinato la mia giornata",
    "Mamma quanti dischi venderanno se mi spengo",
    "Voglio ballare.",
    
    // YOTSUBA
    "&!",
    "!!!!!!!",
    "JUMBOOO!!!",
    "Mi chiamo Ayase",
    "Ah Ena, capiti a proposito!",
    "QUESTA E' PROPRIO STRANA!!!!",
    
    // DOCTOR WHO
    "Rosso significa festa, viola pericolo",
    "Pond?",
    "Dottor... Chi!?",
    
    // DON'T PANIC
    "DON'T PANIC",
    "42",
    "Bruciare foreste --> Inflazione",
    "Hai un asciugamano?",
    "Sono un frugo.",
    
    // ASIMOV
    "L'amore materno supera le tre leggi della robotica.",
    "Funzionava con una sola pila?",
    "La Fondazione.",
    
    // BOWIE
    "CHEENA SO SOUND",
    "HERE I STAND, NOT QUITE DEAD",
    "John, I'm only dancing!",
    "New Killer Star.",
    
    // OKGO
    '"Bye bye, baby" Cybil says as she walks out the door."',
    "It's tough to have a crush when the boy doesn't feel the same way you do.",
    "We Dug A Hole",
    "Obsession"
].chooseRandom()
