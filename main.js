let counter = document.querySelector('.counter');
plus = document.querySelector('.decrement');
minus = document.querySelector('.increment');
sanoq = 0

plus.addEventListener("click", ()=>{
    sanoq += 1
    counter.innerHTML = sanoq
})

minus.addEventListener("click", ()=>{
    sanoq -= 1
    counter.innerHTML = sanoq
})