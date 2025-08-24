// truthy-falsy

const x = '';  // string vazia é considerada false (falsy)

// console.log(!!x) // !! força a conversão para booleano → false

// if (x) { // como x é uma string vazia, esse bloco não será executado
//     console.log(x);
// }

const y = 0; // zero também é considerado false (falsy)
// console.log(!!y); // false

const a = null; // null é falsy
const b = undefined; // undefined também é falsy
// console.log(!!b); // false

const list = []; // lista (array) vazia é considerada true (truthy)
const object = {}; // objeto vazio também é truthy
console.log(!!object); // true

// Verifica se a lista NÃO está vazia
if (list.length > 0) {
    console.log(list);
}

// ! inverte o valor booleano
console.log(!list); // false (porque lista é truthy, e !truthy = false)

// !! converte para booleano verdadeiro ou falso (força a checagem)
// ! um "!" inverte o valor
// !! dois "!" transformam qualquer valor em true ou false de forma explícita


