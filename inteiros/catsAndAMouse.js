//https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true

const gatoA = 1;
const gatoB = 3;
const rato = 2;

//hackerrank
function catAndMouse(x, y, z) {
  const a = Math.abs(z - x);
  const b = Math.abs(z - y);
  return a < b ? "Cat A" : b < a ? "Cat B" : "Mouse C";
}

//IDE first solution
const firstSolution = (x, y, z) => {
  if (z > x && z > y) {
    let a = z - x;
    let b = z - y;
    if (a < b) {
      return "Cat A";
    } else if (b < a) {
      return "Cat B";
    } else return "Mouse C";
  } else if (z < x && z < y) {
    let a = x - z;
    let b = y - z;
    if (a < b) {
      return "Cat A";
    } else if (b < a) {
      return "Cat B";
    } else return "Mouse C";
  } else return "Mouse C";
};

console.log(firstSolution(gatoA, gatoB, rato));

//IDE refactored solution
const refactoredSolution = (x, y, z) => {
  const a = Math.abs(z - x);
  const b = Math.abs(z - y);
  return a < b ? "Cat A" : b < a ? "Cat B" : "Mouse C";
};

console.log(refactoredSolution(gatoA, gatoB, rato));
