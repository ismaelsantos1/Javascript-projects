//Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

//TransformDegree ('50F')
/*let celsius = C = (F - 32) * 5/9
    let fahrenheit = F = C * 9/5 + 32*/

    function transformDegree(degree) {
        const celsiusExists = degree.toUpperCase().includes('C')
        const fahrenheitExists = degree.toUpperCase().includes('F')


        //Fluxo de erro
        if(!celsiusExists && !fahrenheitExists) {
            throw new Error ('Grau não identificado')
        }

    //Fluxo ideal C -> F
    let updatedDegree = Number(degree.toUpperCase().replace ("F", ""));
    let formula = (celsius) => celsius * 9/5 + 32
    let degereeSign = 'C'

    //fluxo alternativo F -> C
    if(celsiusExists) {

        updatedDegree = Number(degree.toUpperCase().replace ("C", ""));
        formula = (fahrenheit) => (fahrenheit - 32) * 5/9
        degereeSign = 'F'
    }

        return formula(updatedDegree) + degereeSign
    }

    try{
        //console.log(transformDegree('50F'))
        console.log(transformDegree('50C'))
        console.log(transformDegree('50D'))
    } catch (error) {
        console.log(Error)
    }






































/*function transformDegree (degree) {
    
    const celsiusExists = degree.toUpperCase().includes ('C')
    const fahrenheitExists = degree.toUpperCase().includes ('F')


    //fluxo de erro
    if (!celsiusExists && !fahrenheitExists) {
        throw new Error ('Grau não identificado')
    }

    //Fluxo ideal C -> F
    let updatedDegree = Number(degree.toUpperCase().replace ("F", ""));
    let formula = (celsius) => celsius * 9/5 + 32
    let degereeSign = 'F'

    //fluxo alternativo F -> C
    if(celsiusExists) {

        updatedDegree = Number(degree.toUpperCase().replace ("C", ""));
        formula = (fahrenheit) => (fahrenheit - 32) * 5/9
        degereeSign = 'C'
    }

    return formula(updatedDegree) + degereeSign
}

    try{

        console.log(transformDegree('50F'))
        console.log(transformDegree('50C'))
        //transformDegree('50Z')

    } catch (error) {
        
        console.log(error) //Mostra onde está o erro
        //console.log(error.message) não mostra onde está o erro, apenas uma mensagem de erro
    }*/

