/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)


// ---------------------------------------------------------------------------------------------------------------Frontend - click -> scale

// Stap 1: querySelector
let frontend = document.querySelector('a[href="#frontend"]')

// Stap 2: addEventListener
frontend.addEventListener('click', scale)
function scale(){
  // Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
  frontend.classList.toggle('scale')
}





// ---------------------------------------------------------------------------------------------------------------& - click -> translate

// Stap 1: querySelector
let and = document.querySelector('a[href="#and"]')

// Stap 2: addEventListener
and.addEventListener('click', flippy)
function flippy(){
  // Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
  and.classList.toggle('flippy')
}





// -----------------------------------------------------------------------------------------------------------development - double click --> shake

// Stap 1: querySelector
let development = document.querySelector('a[href="#development"]')

// Stap 2: addEventListener
development.addEventListener('click', shake)
function shake(){
  // Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
  development.classList.toggle('shake')
}





// -----------------------------------------------------------------------------------------------------------sprint 5 - focus --> color animation

// Stap 1: querySelector
let sprintFive = document.querySelector('a[href="#sprint-5"]')

// Stap 2: addEventListener
sprintFive.addEventListener('focus', colorAnimation);
function colorAnimation() {
  // Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
  sprintFive.classList.toggle('colorAnimation')
}
  

