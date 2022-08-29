let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

// Errado abaixo:

varA = varB;
varB = varC;
varC = varA;
console.log(varA, varB, varC);
//

// Uma das formas de ser feito:

let novaVarA = varB;
let novaVarB = varC;
let novaVarC = varA;
console.log(novaVarA, novaVarB, novaVarC);
//

// Outra  forma de ser feito:

let backupVarA = varA;
varA = varB;
varB = varC;
varC = backupVarA;
console.log(backupVarA, varB, varC);

// Outra forma de ser feito:

// Exemplo: [varA, varB, varC] = [1, 2, 3] // varA = 1; varB = 2; varC = 3

[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC) // B, C, A


