// ====================
// MAP (transforma valores)
// ====================

const numbers = [1, 2, 3, 4, 5];

// Multiplica cada número por 2
const numbersMultipliedByTwo = numbers.map(function(number) {
    return number * 2;
});

console.log(numbersMultipliedByTwo); // [2, 4, 6, 8, 10]

// ====================
// FILTER (filtra valores)
// ====================

const ages = [8, 13, 27, 30, 22, 40];

// Filtra apenas números pares
const evenAges = ages.filter(function(age) {
    return age % 2 === 0; // CORRIGIDO: usava & em vez de %
});

console.log(evenAges); // [8, 30, 22, 40]


// ====================
// REDUCE (reduz a um único valor)
// ====================

// Soma todas as idades da lista
const sumOfAges = ages.reduce(function(accumulator, age) {
    return accumulator + age;
}, 0); // valor inicial é 0

console.log(sumOfAges); // soma total das idades
