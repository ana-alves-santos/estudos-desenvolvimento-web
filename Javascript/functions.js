// Função tradicional que soma dois números
// function sum(a, b) {
//     console.log(a + b)
// }

// sum(2, 2);

// Função com valor padrão (default) para o segundo parâmetro
function sum(a, b = 10) {
   return a + b; // retorna a soma de a e b
}

// Arrow function com retorno usando "return"
// const sumArrow = (a, b = 10) => {
//   return a + b;
// };

// Mesma função acima, mas com retorno implícito (sem usar "return")
const sumArrow = (a, b = 10) => a + b;

// Chama a função passando apenas 1 argumento
// b assume o valor padrão de 10
const sumValue = sumArrow(2);

console.log(sumValue); // imprime 12 (2 + 10)
