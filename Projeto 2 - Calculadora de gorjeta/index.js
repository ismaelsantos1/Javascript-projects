console.log('Eae, mundo')

function formatMoney(value) {
    //value = Math.cell(value * 100) /100 //esse seria para arredondar o valor, evita erros
    value = value.toFixed(2)
    return 'R$' + value
}

function formatSplit (value) {
    if (value == 1)  {
        return value + 'pessoa'
    } else{
        return value + ' pessoas'
    }
    
}

function update(){
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split
    
    //Resultado da Conta do Restaurante junto da gorjeta do Garçom
    document.getElementById('tipPercent').innerHTML = tipPercent + '%'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue) //'R$ ' + tipValue
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal) //'R$' + billTotal //total a pagar

    //Quantidade de pessoas + o valor que vai ser para cada um
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('billEach').innerHTML = billEach
    if (split <= 1){
        document.getElementById('billEach').innerHTML = formatMoney(billEach)
    } else{
        document.getElementById('billEach').innerHTML = formatMoney(billEach) + ' para cada um'
    }
}

console.log(formatMoney)
console.log(update)

