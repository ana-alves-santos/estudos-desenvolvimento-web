// if, else if, else

// const sum = 1 + 2;

if (sum === 2) {  // === checa valor e tipo (exatamente igual)
    // if (sum == 2) {  dois == checam apenas o valor, não o tipo
    console.log("Sum is 2!");
} else if (sum === 3) {  // else if = mais uma condição
    console.log("Sum is 3!");
} else {  // else = se nenhuma condição anterior for verdadeira
    console.log("Sum is not 2!");
}

// operadores tenário
// && = E → todas as condições precisam ser verdadeiras
// || = OU → basta uma condição ser verdadeira

const sum1 = 2 + 2;
const sum2 = 3 + 10;

if (sum1 === 4 && sum2 === 6) {
    console.log("Sum is 4 and sum2 is 6!");
}

if (sum1 === 4 || sum2 === 6) {
    console.log("Sum is 4 and sum2 is 6!");
}

const sum = 1 + 1;

if (sum === 2) {
    number = 2;
} else {
    number = 4;
}

// mesma coisa que acima, só que resumida com operador ternário
let number = sum === 2 ? 2 : 4;

console.log(number);
