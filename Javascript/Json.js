// Lista de objetos (pode ser convertida para JSON)
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

// Converter para JSON (transforma a lista em string no formato JSON)
const todosJSON = JSON.stringify(todos);

// Converter de volta para objeto (transforma a string JSON em lista de novo)
const todosList = JSON.parse(todosJSON);

// console.log(todosJson) // mostrar a string JSON (linha comentada)

console.log(todosList); // mostra a lista convertida de volta do JSON
