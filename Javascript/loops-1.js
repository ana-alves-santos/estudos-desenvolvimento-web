// loops de repetição

for (let index = 0; index < 10; index++) {  // loop de 0 até 9
    console.log(index);
}

const cars = ["Ferrari", "Tesla", "Mercedes"];

// loop tradicional com índice
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// loop mais simples com "for...of" (acessa direto o valor)
for (let car of cars) {
    console.log(car);
}

// forEach - executa uma função para cada item
cars.forEach(function(car, index) {
    console.log(index); // mostra o índice
    console.log(car);   // mostra o valor
});