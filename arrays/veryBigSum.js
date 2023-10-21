//https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true

//Hackerrank
function aVeryBigSum(ar) {
  let soma = 0;
  soma = ar.reduce((acumulador, itemAtual) => {
    return acumulador + itemAtual;
  });
  return soma;
}

//IDE
const arraycount = [
  5, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005,
];

let soma = 0;
const somarNumeros = arraycount.reduce((acumulador, elementoAtual) => {
  return (soma += elementoAtual);
});

console.log(somarNumeros);
