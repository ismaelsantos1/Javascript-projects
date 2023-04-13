/* Transformar notas escolares


Crie um algoritmo que transforme as notas do sistema numérico par sistema de notas em caracteres tipo A B C D F

de 90 para cima - A
entre 80 - 89 - B
entre 70 - 79 - C
entre 60 - 69 - D
menor que 60 - F

*/


function getScore(score) {

    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score >= 0 && score <= 60


    let scoreFinal

    if(scoreA) {
        scoreFinal = 'A'
    } else if(scoreB) {
        scoreFinal = 'B'
    } else if(scoreC) {
        scoreFinal = 'C'
    } else if(scoreD) {
        scoreFinal = 'D'
    } else if(scoreF) {
        scoreFinal = 'F'
    }

    return scoreFinal
}


console.log(getScore (61))
console.log(getScore (-1))
console.log(getScore (0))
console.log(getScore (45))
console.log(getScore (55))
console.log(getScore (65))
console.log(getScore (75))
console.log(getScore (85))
console.log(getScore (95))
console.log(getScore (90))
console.log(getScore (80))
console.log(getScore (70))
console.log(getScore (60))
console.log(getScore (50))
console.log(getScore (40))
console.log(getScore (30))
console.log(getScore (20))
console.log(getScore (10))
console.log(getScore (4))
console.log(getScore (3))
console.log(getScore (1.4))

























































/*
function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score >= 0 && score <= 60

    let scoreFinal

    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota inválida"
    }

    return scoreFinal
}


console.log(getScore (100))
console.log(getScore (-1))
console.log(getScore (0))
console.log(getScore (45))
console.log(getScore (55))
console.log(getScore (65))
console.log(getScore (75))
console.log(getScore (85))
console.log(getScore (95))
console.log(getScore (90))
console.log(getScore (80))
console.log(getScore (70))
console.log(getScore (60))
console.log(getScore (50))
console.log(getScore (40))
console.log(getScore (30))
console.log(getScore (20))
console.log(getScore (10))
console.log(getScore (4))
console.log(getScore (3))
console.log(getScore (1.4))*/