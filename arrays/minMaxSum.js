//https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

//Hackerrank
function miniMaxSum(arr) {
  const array = arr.sort((a, b) => a - b);
  let somaMin = 0;
  let somaMax = 0;
  for (let n = 0; n < array.length - 1; n++) {
    somaMax += array[n + 1];
    somaMin += array[n];
  }
  console.log(`${somaMin} ${somaMax}`);
}

//IDE
const entrada = [1, 3, 5, 7, 9];

const arrayOrdenado = (arr) => {
  const array = arr.sort((a, b) => a - b);
  let somaMin = 0;
  let somaMax = 0;
  for (let n = 0; n < array.length - 1; n++) {
    somaMax += array[n + 1];
    somaMin += array[n];
  }
  return `${somaMin} ${somaMax}`;
};
console.log(arrayOrdenado(entrada));
