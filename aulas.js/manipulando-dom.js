// Seleciona o elemento que tem a classe "items" no HTML
const items = document.querySelector(".items");
console.log(items); 

// Seleciona o elemento que tem a classe "btn" (um botão no HTML)
const button = document.querySelector('.btn')

// Remove completamente o elemento "items" da página
items.remove();

// Remove o primeiro filho (primeiro elemento dentro de "items")
items.firstElementChild.remove();

// Remove o último filho (último elemento dentro de "items")
items.lastElementChild.remove();

// Altera o texto do primeiro filho de "items" para "Item um"
items.children[0].textContent = "Item um";

// Troca o conteúdo HTML do último filho de "items" para um <h1>Hello!</h1>
items.lastElementChild.innerHTML = "<h1>Hello!</h1>";

// Muda o fundo do botão para vermelho
button.style.background = 'red';

// Logo em seguida, muda de novo o fundo do botão para azul
// (essa linha "anula" a anterior, então o botão fica azul no final)
button.style.background = 'blue';
