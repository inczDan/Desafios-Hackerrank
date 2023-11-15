//https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true

// return a array of points [alice, bob]

const alice = [17, 28, 30];
const bob = [99, 16, 8];

//hackerrank
// const compareTriplets = (a, b) => {
//     let result = [0, 0];
//     const reducePontos = a.reduce((acc, itemAtual, index) => {
//       if (a[index] > b[index]) {
//         result[0] += 1;
//       } else if (a[index] < b[index]) {
//         result[1] += 1;
//       }
//     }, 0);
//     return result;
//   };

//IDE first code

// const compareTriplets = (a, b) => {
//   let result = [0, 0];

//   for (let nAlice = 0; nAlice < a.length; nAlice++) {
//     if (a[nAlice] > b[nAlice]) {
//       result[0] += 1;
//     } else if (a[nAlice] < b[nAlice]) {
//       result[1] += 1;
//     }
//   }
//   return result;
// };

//refactor
const compareTriplets = (a, b) => {
  let result = [0, 0];
  a.reduce((acc, itemAtual, index) => {
    if (a[index] > b[index]) {
      result[0] += 1;
    } else if (a[index] < b[index]) {
      result[1] += 1;
    }
  }, 0);
  return result;
};

console.log(compareTriplets(alice, bob));
