const screenArea = document.querySelector('.screenArea')
const off = document.querySelector('#off')
const on = document.querySelector('#on')
const AC = document.querySelector('#clear')

let input = ''

const display = (element)=>{

}

const btn = document.querySelectorAll('.numbers')
btn.forEach(ele =>{
    ele.addEventListener('click',()=>{
        screenArea.innerText = ele.innerText
    })
})

const clear = document.querySelector('.clear')
clear.addEventListener('click',()=>{
    input = ''
    screenArea.innerText = '0'
})

const operator = document.querySelectorAll('.')

