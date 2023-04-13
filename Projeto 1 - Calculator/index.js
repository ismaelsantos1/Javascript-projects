/*function insert(num) {
    document.querySelector('.tela').textContent = num;
}

insert()*/
/*let input = document.getElementById('result');

function addNumber(num) {
    input.click += num;
}

function addOperator(operator) {
    input.value += operator;
}

function calculate() {
    input.value = eval(input.value);
}

function clearResult() {
    input.value = "";
}*/

/*function addNumber(n){
    let num = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = num + n;
}

function clearResult(){
    document.getElementById('result').innerHTML = '';

}

function addOperator(){
    document.getElementById('result').innerHTML = '';

}

function calculate() {
    document.getElementById('result')
    let resultado = document.getElementById('result').innerHTML;
    //document.getElementById('result').innerHTML = '';
    if(resultado){
        document.getElementById('result').innerHTML = ;
    } else{
        document.getElementById('result').innerHTML = 'NADA'
    }
}*/

    function insert(num) {
        let numero = document.getElementById('result').innerHTML;
        document.getElementById('result').innerHTML = numero + num;
    }

    function clean() {
        document.getElementById('result').innerHTML = "";
    }

    function back() {
        let result = document.getElementById('result').innerHTML;
        document.getElementById('result').innerHTML = result.substring(0, result.length -1);
    }

    function calcular() {
        let result = document.getElementById('result').innerHTML;
        if(result) {
            document.getElementById('result').innerHTML = eval(result);
        } else{
            document.getElementById('result').innerHTML = "valor inválido"
        }
    }
﻿