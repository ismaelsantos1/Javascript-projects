let family = {
    incomes: [2500, 3200, 250, 600.50],
    expenses: [320.34 , 128.50, 180.55, 90]
}

function sum(array) {
    let total = 0;

    for(let value of array){
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum (family.incomes)
    const calculateExpenses = sum (family.expenses)

    const total = calculateIncomes + calculateExpenses

    const itsOk = total >= 0


    let balanceText = "negativo"

    let message= "Seu saldo é"

    if (itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)

}

calculateBalance()