// Seleciona o elemento pelo ID (getElementById é mais rápido e direto)
const addUserText1 = document.getElementById("add-user");
console.log(addUserText1);

// Muda o texto interno do elemento selecionado
addUserText1.innerText = "Adicionar usuário";

// Seleciona o mesmo elemento usando querySelector (precisa do # para ID)
const addUserText2 = document.querySelector('#add-user');
console.log(addUserText2);

// Seleciona um formulário dentro de .container que tenha o ID #my-form
const myForm1 = document.querySelector(".container #my-form");
console.log(myForm1);

// Seleciona o primeiro elemento que tenha a classe .item
const myForm2 = document.querySelector(".item");
console.log(myForm2);

// -------- Selecionando múltiplos elementos --------

// Seleciona todos os elementos com a classe .item (retorna NodeList)
const allItems = document.querySelectorAll(".item");
console.log(allItems1[1]); // Mostra o segundo elemento da lista

// Seleciona todos os elementos com a classe "items" (retorna HTMLCollection)
const allItems = document.getElementsByClassName("items");
console.log(allItems);

// Seleciona todos os elementos <li> (retorna HTMLCollection)
const allItems = document.getElementsByTagName("li");
console.log(allItems);
