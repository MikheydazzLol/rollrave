const shawarma = document.getElementById('shawarma');
const drinks = document.getElementById('drinks');
const salad = document.getElementById('salad');
const iceCream = document.getElementById('iceCream');
const eventtoggle = document.getElementById('event');

function shawarma_toggle (){
    if (shawarma.classList.contains('menu_off')){
        shawarma.classList.remove('menu_off');
    }
    drinks.classList.add('menu_off');
    salad.classList.add('menu_off');
    iceCream.classList.add('menu_off');
}

function drinks_toggle (){
    if (drinks.classList.contains('menu_off')){
        drinks.classList.remove('menu_off');
    }
    shawarma.classList.add('menu_off');
    salad.classList.add('menu_off');
    iceCream.classList.add('menu_off');
}

function salad_toggle (){
    if (salad.classList.contains('menu_off')){
        salad.classList.remove('menu_off');
    }
    shawarma.classList.add('menu_off');
    drinks.classList.add('menu_off');
    iceCream.classList.add('menu_off');
}

function ice_toggle (){
    if (iceCream.classList.contains('menu_off')){
        iceCream.classList.remove('menu_off');
    }
    shawarma.classList.add('menu_off');
    drinks.classList.add('menu_off');
    salad.classList.add('menu_off');
}

function event_toggle(){
    eventtoggle.classList.toggle('event-hide');
}