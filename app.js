const screenArea = document.querySelector('.screenArea')
const numbers = document.querySelectorAll('.numbers')
const power = document.querySelectorAll('.power')
const clear = document.querySelector('.clear')
const body = document.querySelector('body')
const operators = document.querySelectorAll('.operator')
const equal = document.querySelector('.equals')
const decimal = document.querySelector('.decimal')

let input = ''

let number

let operator  

let previousAnswer = 0

let powerIN = false

//this is the power function ON/OFF 
const powerCheck = (element)=>{
    const power = `${element.target.innerText}`
    if(power == 'OFF'){
        screenArea.innerText = ''
        input = ''
        number = 0
        operator = ''
        previousAnswer = 0
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

// TODO: add decimal functionality 
// TODO: show only 4 decimal digits after the decimal point. - completed
// TODO: diable the buttons when an operator is already existing.

//this is the digit clicks 
numbers.forEach(ele =>{
    ele.addEventListener('click', ()=>{
        if(powerIN){
            input += `${ele.innerText}`
            screenArea.innerText = input
        }
    })
})

//function that removes the oeprators form the input and sepeartes the number to another variable.
const changeInGlobalValue = ()=>{ 
    if(input.indexOf('+') != -1){
        operator = '+'
        input = input.replace('+', '')
        number = input
        input = ''
    }
    else if(input.indexOf('-') != -1){
        operator = '-'
        input = input.replace('-', '')
        number = input
        input = ''
    }
    else if(input.indexOf('/') != -1){
        operator = '/'
        input = input.replace('/', '')
        number = input
        input = ''
    }
    else{
        operator = 'x'
        input = input.replace('x', '')
        number = input
        input = ''
    }
}

//this is the operator event
operators.forEach(op => {
    op.addEventListener('click',()=>{
        if(powerIN){

            if((input.indexOf('+') == -1) && (input.indexOf('-') == -1) && (input.indexOf('x') == -1) && (input.indexOf('/') == -1)){
                input += `${op.innerText}`
                screenArea.innerText = ''
                changeInGlobalValue()
            }
            else{
                screenArea.innerText = ''
                changeInGlobalValue()
            }
        }
    })
})

const calculatingAnswer = (op)=>{
    let sec 
    let fir 
    if(op == '+'){
        sec = parseFloat(input)
        fir = parseFloat(number)
        if(previousAnswer != 0){
            answer = sec + previousAnswer
        }
        else{
            answer = fir + sec
        }
        previousAnswer = answer 
    }
    else if(op == '-'){
        sec = parseFloat(input)
        fir = parseFloat(number)
        if(previousAnswer != 0){
            answer = previousAnswer - sec
        }
        else{
            answer = fir - sec
        }
        previousAnswer = answer 
    }
    else if(op == 'x'){
        sec = parseFloat(input)
        fir = parseFloat(number)
        if(previousAnswer != 0){
            answer = sec * previousAnswer
        }
        else{
            answer = fir * sec
        }
        previousAnswer = answer 
    }
    else if(op == '/'){
        sec = parseFloat(input)
        fir = parseFloat(number)
        if(previousAnswer != 0){
            answer = previousAnswer / sec
        }
        else{
            answer = fir / sec
        }
        previousAnswer = answer 
    }
    screenArea.innerText = Math.floor(answer * 10000)/10000
    previousAnswer = answer
    operator = ''
}

//this is the equals event
equal.addEventListener('click',()=>{
    if(powerIN){
        if(number != ''){
            calculatingAnswer(operator)
        }
    }
})

decimal.addEventListener('click',()=>{
    if(powerIN){
        input += `${decimal.innerText}`
        screenArea.innerText = input
    }
})

//This is the All Clear event
clear.addEventListener('click',()=>{
    if(powerIN){
        input = ''
        number = 0
        operator = ''
        previousAnswer = 0
        screenArea.innerText = '0'
    }    
})
