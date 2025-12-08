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
  // Stap 3: 
  frontend.classList.toggle('scale')
}





// ---------------------------------------------------------------------------------------------------------------& - click -> translate

// Stap 1: querySelector
let and = document.querySelector('a[href="#and"]')

// Stap 2: addEventListener
and.addEventListener('click', flippy)
function flippy(){
  // Stap 3: 
  and.classList.toggle('flippy')
}





// -----------------------------------------------------------------------------------------------------------development - double click --> shake

// Stap 1: querySelector
let development = document.querySelector('a[href="#development"]')

// Stap 2: addEventListener
development.addEventListener('click', shake)
function shake(){
  // Stap 3: 
  development.classList.toggle('shake')
}





// -----------------------------------------------------------------------------------------------------------sprint 5 - focus --> color animation

// Stap 1: querySelector
let sprintFive = document.querySelector('a[href="#sprint-5"]')

// Stap 2: addEventListener
sprintFive.addEventListener('focus', function(){
  // Stap 3:
  sprintFive.classList.add('colorAnimation');
});

sprintFive.addEventListener('blur', function(){
  sprintFive.classList.remove('colorAnimation');
});





// -----------------------------------------------------------------------------------------------------------Fix - 

// Stap 1: querySelector
let fix = document.querySelector('a[href="#fix"]')

fix.addEventListener('mouseenter', function(){
  fix.classList.add('typing')

  fix.textContent = "Als het werkt, was het niet creatief genoeg."
  //of
  fix.textContent = "Ik klik eerst, denk later."
});

fix.addEventListener('mouseleave', function(){
  fix.textContent = "Fix"
  fix.classList.remove('typing')
});





// -----------------------------------------------------------------------------------------------------------the  - Mouseout → rotate animatie

// Stap 1: querySelector
let the = document.querySelector('a[href="#the"]')
// Stap 2: addEventListener
the.addEventListener('mouseout', rotate)
function rotate(){
  // Stap 3:
  the.classList.toggle('rotate')
}





// -----------------------------------------------------------------------------------------------------------flow

// Stap 1: querySelector
let flow = document.querySelector('a[href="#flow"]')
// Stap 2: addEventListener
flow.addEventListener('mousedown', function(){
  // Stap 3:
  flow.classList.add('flip')
});

flow.addEventListener('mouseup', function(){
  // Stap 3:
  flow.classList.remove('flip')
});





  


