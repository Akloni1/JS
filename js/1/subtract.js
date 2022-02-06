function subtract() {
    let num1 = document.getElementById('firstNumber').value;
    let num2 = document.getElementById('secondNumber').value;
    let subtraction=num1-num2;
    let res = document.getElementsByTagName('div')[1];
    res.innerHTML =+subtraction ;      
}
