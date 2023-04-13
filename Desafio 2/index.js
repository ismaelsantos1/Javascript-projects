document.getElementById('result')

let productValue = Number(prompt('Coloque um valor de produto: '))

//let editText = document.getElementById("result");

if (productValue >= 20) {
    document.getElementById('result').innerHTML = "Aprovado";
     //document.getElementById('result').innerHTML = 'Aprovado'
} else{
    document.getElementById('result').innerHTML = "Reprovado";
}

/*productValue >= 20
? (document.getElementById("result").innerHTML = "Aprovado")
: (document.getElementById("result").innerHTML = "Recusado")*/

