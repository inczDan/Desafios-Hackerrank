const input = 4;

//https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
//hackerrank
function staircase(n) {
  for (let i = 1; i <= n; i++) {
    const escada = "#".repeat(i).padStart(n, " ");
    console.log(escada);
  }
}

staircase(input);

//IDE

const construirEscada = (numero) => {
  for (let i = 0; i <= numero; i++) {
    const escada = "@".repeat(i).padStart(numero, " ");
    console.log(escada);
  }
};
construirEscada(input);
