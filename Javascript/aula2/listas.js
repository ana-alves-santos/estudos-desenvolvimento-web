// ====================
// LISTAS (Arrays)
// ====================

const names = ["Felipe", "João", "Julia", 10, false]; // lista com vários tipos

const joao = names[1]; // acessa o valor no índice 1 (João)

// Adiciona elementos
names.push("Pedro");     // adiciona no fim da lista
names.unshift("Pedro");  // adiciona no início da lista

// Remove o último elemento
names.pop(); // remove o último ("Pedro")

// Altera um valor na lista
names[3] = "Gustavo"; // substitui o valor na posição 3

// Verifica a posição de um item
console.log(names.indexOf("Felipe")); // resultado: índice de "Felipe"

// Ordena a lista alfabeticamente (converte tudo para string antes de ordenar)
const sortedNames = names.sort();
console.log(sortedNames);

// Verifica se uma variável é um array
const namesIsArray = Array.isArray(names);
console.log(namesIsArray); // true

// Verifica quantos elementos existem na lista
console.log(names.length); // tamanho da lista
