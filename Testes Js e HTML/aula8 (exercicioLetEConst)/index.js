/*

Guilherme Buzim tem 20 anos, pesa 80 kg,
tem 1.80 de altura e seu IMC é de x


*/

const nome = "Guilherme"
const sobrenome = "Buzim";
const idade = 20;
const peso = 80;
const altura = 1.80;
let imc = peso/(altura*altura);
let anoDeNascimento = 2022 - idade;


console.log("Guilherme Buzim tem 20 anos, pesa 80 kg, tem 1.80 de altura e seu IMC é de 24.691358024691358");
console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso,"kg, tem", altura, "de altura e seu IMC é de", imc);
// ou
console.log(nome + ' ' + sobrenome + " tem " + idade + " anos, pesa " + peso + " kg, tem " + altura + " de altura e seu IMC é de " + imc);
// ou utilizar template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e seu IMC é de ${imc}.`);


console.log("Guilherme Buzim nasceu em 2002");
console.log(nome, sobrenome, "nasceu em", anoDeNascimento);
console.log(nome + " " + sobrenome + " nasceu em " + anoDeNascimento);
console.log(`${nome} ${sobrenome} nasceu em ${anoDeNascimento}`)

