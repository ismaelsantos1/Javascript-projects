console.log('Hello')

let computerNumber
let userNumbers = [] //aqui será armazenado os números que o player tentar no jogo
let attempts = 0
let maxGuesses = 5  //número máximo de tentativas


function init() {
   computerNumber = Math.floor(Math.random() * 100 +1) //o resultado sem o floor sempre será uma fração. O Math.floor arredonda o número. Esses dados serão armazenados dentro de uma variável, no caso a "let computerNumber"
    //console.log(computerNumber)

}

function compareNumbers() {
    const userNumber = document.getElementById('inputBox').value //o número vem de uma página que está no index.html (logo abaixo do título "seu palpite"), e será armazenado dentro de seu userNumber (uma variável)
    userNumbers.push(userNumber) //com 'push' será pego o número que está dentro da variável userNumber dentro do HTML e será colocado na variável userNumbers (array)
    console.log('Número gerado será revelado no fim do jogo' )


    document.getElementById('guesses').innerHTML = userNumbers //irá retornar o número de userNumber dentro de "seus palpites"
    console.log('Números de tentativas: ' + attempts)
    //console.log(userNumber)

    if (attempts <  maxGuesses) {
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Ixi, seu número está muito alto. Try again'
            document.getElementById('inputBox').value = ''
            attempts++ //toda vez que eu jogar ele adicionará o número de tentativas que teve
    
            document.getElementById('attempts').innerHTML = attempts
    
        } else if (userNumber < computerNumber){
            document.getElementById('textOutput').innerHTML ='Se liga, seu número está muito baixo. Try again'
            document.getElementById('inputBox').value = ''
            document.getElementById('attempts').innerHTML = attempts
            attempts++
    
        } else {
            document.getElementById('textOutput').innerHTML = 'Parabéns, você acertou. O número correto é: ' + computerNumber
            document.getElementById('attempts').innerHTML = attempts
            attempts++

            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') //desabled o campo quando ganho
        }
    } else {
        document.getElementById('textOutput').innerHTML = 'Você perdeu, o número é: ' + computerNumber
        console.log('Número gerado: ' + computerNumber)
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') //desabled o campo quando perco
    }
    
    if(userNumber > computerNumber){
        document.getElementById('textOutput').innerHTML = 'Valor inválido. Inicie um novo jogo'
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
    
}

function resetGame () {
    window.location.reload()

}
