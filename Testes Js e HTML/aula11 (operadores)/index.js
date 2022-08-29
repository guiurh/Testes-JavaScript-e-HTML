/**
 * Aritméticos:
 * + Adição / Concatenação 
 * - Subtração
 * * Multiplicação
 * / Divisão
 * ** Potenciação
 * % Resto da divisão
*/

/** 
 * Precedência:
 * ()
 * **
 * * / %
 * + -
*/

const num1 = 5;
const num2 = 2;
const num3 = 10;
//console.log(num1 + num2 * num3);

/**
 * Incremento = ++
 * Decremento = -- 

Pode-se colocar antes (pré) ou depois (pós) da variável.
*/

// let contador = 1;
// ++contador; // 2
// ++contador; // 3
// contador++; // 4
// contador++; // 5
// console.log(++contador) // 6
// console.log(--contador) // 5



/**
 * Operadores de atribuição:
 * +=
 * -=
 * *=
 * /=
 * **=
 * etc... 
*/

let step = 5;
let contador = 0;

contador += step; // contador = contador + step
console.log(contador) // 5
contador += step;
console.log(contador) // 10
contador += step;
console.log(contador) // 15

// NaN = Not a Number
const bu1 = 10;
const bu2 = "Guilherme";
console.log(bu1 * bu2) // NaN
// Em alguns casos ele tenta resolver, mesmo com uma string
const bu3 = '5';
console.log(bu1 * bu3) // 50

// Convertendo um número em string para number

// parseInt (inteiro)
const numero1 = '4.5';
console.log(typeof numero1, numero1); // string 4.5
const numero2 = parseInt(numero1);
console.log(typeof numero2, numero2); // number 4

// parseFloat (flutuante, decimal)
const numero3 = '4.5';
console.log(typeof numero3, numero3); // string 4.5
const numero4 = parseFloat(numero1);
console.log(typeof numero4, numero4); // number 4.5

// Chamando Number
const numero5 = '4.5';
console.log(typeof numero5, numero5); // string 4.5
const numero6 = Number(numero5);
console.log(typeof numero6, numero6) // number 4.5
let nomezinho = "Guilherme"
console.log(typeof Number(nomezinho), Number(nomezinho)) // number(sim, virou number mesmo sendo string puro) NaN