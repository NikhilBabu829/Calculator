const screenArea = document.querySelector('.screenArea')
const clear = document.querySelector('#clear')
const off = document.querySelector('#off')
const on = document.querySelector('#on')
const AC = document.querySelector('#clear')

const btn = document.querySelectorAll('button')
btn.forEach(ele =>{
    ele.addEventListener('click',()=>{
        screenArea.innerText = ele.innerText
    })
})

