// Criar objeto
// Guardar valores

const person = {
   firstName: "Ana",
   lastName: "Alves",
   age: "25",
   hobbies: [ 'Assitir filmes', 'Ler'], // lista dentro do objeto
   dog: {
      name: 'Simba', // objeto dentro de objeto
      age: 4
   },
};

// Acessar valores do objeto e guardar em variáveis
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

// Mesma coisa que acima (Destructuring = forma mais curta de acessar)
const {
   firstName, 
   lastName, 
   age, 
   hobbies, 
   dog: {name: dogName}, // acessa propriedade dentro de objeto interno
} = person;  // acessar as propriedade

const read = person.hobbies[1]; // acessa o valor da lista de hobbies
// console.log(read);

console.log(firstName); // mostra o nome
console.log(lastName); // mostra o sobrenome
console.log(age); // mostra idade
console.log(hobbies); // mostra a lista de hobbies

// Adiciona objetos (substituir valor)
// person.dog = "Simba"; // sobrescreve o objeto dog (exemplo comentado)

console.log(person.dog.age); // acessa a idade do cachorro
console.log(dogName); // mostra o nome do cachorro via destructuring

