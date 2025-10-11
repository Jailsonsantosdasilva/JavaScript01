const subtracao = (x, y) => x * y;

const calcular = (x, y, computar) => computar(x , y);

const resultado = calcular(5, 10, subtracao);
console.log(resultado)