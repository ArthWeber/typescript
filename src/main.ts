//Função de multiplicação
const calculo = (a: number, b: number): number => a * b;
//Função dizOi
const dizOi = (nome: string): string => `Olá ${nome}`;

const multiplicar = calculo(2, 5);
const olaNome = dizOi("Arthur");

console.log(multiplicar);
console.log(olaNome);