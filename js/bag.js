const sum = document.getElementById('final_sum');
const burrito_amount = document.getElementById('amount1');
const greece_amount = document.getElementById('amount2');
const lemonade_amount = document.getElementById('amount3');
const burrito = document.getElementById('price1');
const greece = document.getElementById('price2');
const lemonade = document.getElementById('price3');
const order1 = document.getElementById('order1');
const order2 = document.getElementById('order2');
const order3 = document.getElementById('order3');
const burrito_price = document.getElementById('price1').getAttribute('price');
const greece_price = document.getElementById('price2').getAttribute('price');
const lemonade_price = document.getElementById('price3').getAttribute('price');
const formtoggle = document.getElementById('form');

function burrito_buy(){
    burrito_amount.innerHTML = Number(burrito_amount.innerHTML) + 1
    burrito.innerHTML = Number(burrito.innerHTML) + Number(burrito_price)
    sum.innerHTML = Number(sum.innerHTML) + Number(burrito_price)
}

function greece_buy(){
    greece_amount.innerHTML = Number(greece_amount.innerHTML) + 1
    greece.innerHTML = Number(greece.innerHTML) + Number(greece_price)
    sum.innerHTML = Number(sum.innerHTML) + Number(greece_price)
}

function lemonade_buy(){
    lemonade_amount.innerHTML = Number(lemonade_amount.innerHTML) + 1
    lemonade.innerHTML = Number(lemonade.innerHTML) + Number(lemonade_price)
    sum.innerHTML = Number(sum.innerHTML) + Number(lemonade_price)
}

function burrito_del(){
    if (burrito_amount.innerHTML > 0){
    burrito_amount.innerHTML = Number(burrito_amount.innerHTML) - 1
    burrito.innerHTML = Number(burrito.innerHTML) - Number(burrito_price)
    sum.innerHTML = Number(sum.innerHTML) - Number(burrito_price)
    }
}

function greece_del(){
    if (greece_amount.innerHTML > 0){
    greece_amount.innerHTML = Number(greece_amount.innerHTML) - 1
    greece.innerHTML = Number(greece.innerHTML) - Number(greece_price)
    sum.innerHTML = Number(sum.innerHTML) - Number(greece_price)
    }
}

function lemonade_del(){
    if (lemonade_amount.innerHTML > 0){
    lemonade_amount.innerHTML = Number(lemonade_amount.innerHTML) - 1
    lemonade.innerHTML = Number(lemonade.innerHTML) - Number(lemonade_price)
    sum.innerHTML = Number(sum.innerHTML) - Number(lemonade_price)
    }
}

function delOrder1(){
    order1.style.display = "none"
    sum.innerHTML = Number(sum.innerHTML) - Number(burrito.innerHTML)
}

function delOrder2(){
    order2.style.display = "none"
    sum.innerHTML = Number(sum.innerHTML) - Number(greece.innerHTML)
}

function delOrder3(){
    order3.style.display = "none"
    sum.innerHTML = Number(sum.innerHTML) - Number(lemonade.innerHTML)
}

function form_toggle(){
    formtoggle.classList.toggle('form-hide')
}
