// lista contendo vários objetos
const todos = [
   {
      id: 1,
      description: 'Estudar programação',
      isCompleted: false,
   },
   {
      id: 2,
      description: 'Ler',
      isCompleted: true,
   },
   {
      id: 3,
      description: 'Treinar',
      isCompleted: true,
   },
];

const descriptionOfLastTodo = todos[2].description; // acessa objeto dentro da lista
console.log(descriptionOfLastTodo); // mostra a descrição do último item
