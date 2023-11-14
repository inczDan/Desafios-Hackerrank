//https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true
// Bon Appetit
// print Bon Appetit se a conta estiver correta.

//caso contario, imprime a quantia inteira de dinheiro que brian deve `a ana

//parametos

// bill = uma matriz de inteiros que representa o custo de cada item pedido.
// k = um numero inteiro que representa o indice em zero do item que ana nao come.
// b = a quantia em dinheiro que ana contribuiu.

const bill = [3, 10, 2, 9];
const k = 1;
const b = 12;

//hackerrank

function bonAppetit(bill, k, b) {
  let itemRejeitado;
  let total = 0;
  for (let i = 0; i < bill.length; i++) {
    total += bill[i];

    if (i === k) {
      itemRejeitado = bill[i];
    }
  }
  const valorCorreto = (total - itemRejeitado) / 2;
  console.log(valorCorreto === b ? "Bon Appetit" : b - valorCorreto);
}

//IDE first code
// const bonAppetit = (bill, k, b) => {
//   let itemRejeitado;
//   let total = 0;
//   for (let i = 0; i < bill.length; i++) {
//     total += bill[i];

//     if (i === k) {
//       itemRejeitado = bill[i];
//     }
//   }
//   const valorCorreto = (total - itemRejeitado) / 2;
//   return valorCorreto === b ? "Bon Appetit" : b - valorCorreto;
// };

//IDE refactoring code
const bonAppetit = (bill, k, b) => {
  const totalArray = bill.reduce((acc, itemAtual) => {
    return acc + itemAtual;
  });
  const [itemRejeitado] = bill.splice(k, 1);
  const valorCorreto = (totalArray - itemRejeitado) / 2;
  return valorCorreto === b ? "Bon Appetit" : b - valorCorreto;
};

console.log(bonAppetit(bill, k, b));
