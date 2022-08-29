
// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos. Ex: nomeCliente, numeroCliente.
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase. Ex: nomeCompleto, nomeCompletoDoCliente
// Case-sensitive (letra maiúscula e letra minúscula são diferentes.)
// Não podemos modificar o valor de uma constante
// UTILIZE CONST PARA CONSTANTE

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5
let nome = "oi"
console.log(primeiroNumero + nome)
console.log(typeof(primeiroNumero + nome))