const screenArea = document.querySelector('.screenArea')
const numbers = document.querySelectorAll('.numbers')
const power = document.querySelectorAll('.power')
const clear = document.querySelector('.clear')
const body = document.querySelector('body')
const operators = document.querySelectorAll('.operator')

let input = ''

let powerIN = false

//this is the power function ON/OFF 
const powerCheck = (element)=>{
    const power = `${element.target.innerText}`
    if(power == 'OFF'){
        screenArea.innerText = ''
        input = ''
        powerIN = false
    }
    else{
        screenArea.innerText = '0'
        powerIN = true
    }
}

//power btn click event
power.forEach(btn =>{
    btn.addEventListener('click',(ele)=>{
        powerCheck(ele)
    })
})

// TODO: create a variable that hold all the digits pressed
// TODO: create a event for operators
// TODO: create a funtion that seperates the digits before and after the operator on equals click
// TODO: create a function that passes the two side of digits to a function that does the arithmetic based on the opperator passed to it.

//this is the digit clicks 
numbers.forEach(ele =>{
    ele.addEventListener('click', ()=>{
        if(powerIN){
            input += `${ele.innerText}`
            screenArea.innerText = input
        }
    })
})

operators.forEach(op => {
    op.addEventListener('click',()=>{
        if(powerIN){
            input += `${op.innerText}`
            screenArea.innerText = input
        }
    })
})

//This is the All Clear route
clear.addEventListener('click',()=>{
    if(powerIN){
        input = ''
        screenArea.innerText = '0'
    }    
})
