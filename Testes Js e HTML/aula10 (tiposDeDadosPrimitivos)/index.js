// Tipos: string, number, undefined, null, boolean e symbol
// Não aprendi symbol nessa aula ainda

const nome = 'Guilherme'; // string
const nome1 = "Guilherme"; // string
const nome2 = `Guilherme`; // string

const num = 10; // number
const num1 = 10.52; // number

let nomeAluno; // undefined -> variável com valor indefinido

const sobrenomeAluno = null; // nulo -> não aponta pra local nenhum na memória 
// PS: Null é quando eu não quero que a variável não aponte pra nenhum local na memória;
// Exemplo: quando uma pessoa remove o fundo vermelho da capa do perfil, voltando para o original, ele está trocando de red pra null;
const aprovado = false; // boolean = true, false (lógico)

let a = 2
const b = a

console.log(a, b) // Resultado: 2, 2

a = 3;

console.log(a, b) // Resultado: 3,2
// console.log(typeof aprovado, aprovado);