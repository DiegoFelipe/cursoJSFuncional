let a = 4
console.log(a)

// Function Declaration

function bomDia() {
    console.log('Bom dia')
}

bomDia()


// Function Expression
// Armazena a funcao dentro de uma variavel

const boaTarde = function() {
    console.log('Boa Tarde')
}

boaTarde()

function somar(a,b) {
    return a + b
}

const result = somar(3,4)
console.log(result)