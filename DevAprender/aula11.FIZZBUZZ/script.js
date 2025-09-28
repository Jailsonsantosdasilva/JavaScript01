// divisivel por 3 => Fizz
// divisivel por 5 => Buzz
// divisivel por 3 e 5 => FizzBuzz
// não divisivel por 3 ou 5 => entrada
// não é um numero => 'não é um número'

const resultado = fizzBuzz(11);
console.log(resultado)

function fizzBuzz(resultado) {
    if(typeof entrada !== 'number')
        return 'não é um número';
    if(eentrada % 3 === 0)
        return 'fizz';
    if(entrada % 5 === 0)
        return 'buzz';
    if(entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz'
    return entrada;
}