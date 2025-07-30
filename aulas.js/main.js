// ====================
// VARIÁVEIS
// ====================

// const: cria uma variável que NÃO pode ser alterada depois
const message = "Olá!";

// let: cria uma variável que PODE ser alterada depois
let nome = "Ana";

// Exibe um alerta com o valor da variável
alert(message);

// ====================
// STRINGS
// ====================

const firstName = "Ana";     
const lastName = "Alves";    

const names = 'Ana, Julia, João'; // string com vários nomes

// Ver a quantidade de caracteres em uma string
console.log(firstName.length); // resultado: 3

// Concatenar (juntar) strings usando template literals
console.log(`Meu nome é ${firstName} ${lastName}`); 

// Colocar o nome em MAIÚSCULAS
console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName}`);

// Colocar o nome em minúsculas
console.log(`Meu nome é ${firstName.toLowerCase()} ${lastName}`);

// Separar a string "names" em uma lista (array), dividindo por vírgula
console.log(names.split(",")); 
// Resultado: ["Ana", " Julia", " João"]



// ====================
// NÚMEROS
// ====================

const number = 5;

// Operações matemáticas
console.log(number + 10);     // resultado: 15
console.log(number - 2);      // resultado: 3
console.log(number * 3);      // resultado: 15
console.log(number / 5);      // resultado: 1

// Converter número para string
console.log(number.toString());        // resultado: "5"
console.log(typeof number.toString()); // resultado: "string"

// ====================
// BOOLEANOS
// ====================

true;  // verdadeiro
false; // falso

// Comparações
console.log(2 == 3); // false
console.log(2 == 2); // true

// ====================
// NULL e UNDEFINED
// ====================

const x = null;   // valor nulo (vazio, intencionalmente sem valor)
let y = undefined;  // undefined (não foi atribuído valor ainda)

console.log(x); // null
console.log(y); // undefined
