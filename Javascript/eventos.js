// Seleciona o botão de envio pelo ID
const submitButton = document.querySelector("#submit-button");

// Seleciona o formulário pelo ID
const myForm = document.querySelector("#my-form");

// Seleciona os campos de input (nome e email)
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

// Seleciona a lista (ou bloco) onde os dados vão aparecer
const items = document.querySelector('.items');

// Seleciona o elemento <body>
const body = document.querySelector("body");

// Adiciona um evento de clique no botão "submit"
submitButton.addEventListener("click", function (e) { 
    e.preventDefault(); // Evita que o formulário recarregue a página

    // Pega os valores digitados nos inputs
    const nameValue = nameInput.value;
    const emailValue = emailInput.value; 

    // Validação: se algum campo estiver vazio, mostra alerta e sai da função
    if (nameValue === "" || emailValue === "") {
        return alert("Please fill out all the fields!");
    }

    // Se passou na validação, altera o estilo e insere os valores
    myForm.style.background = "red"; // Muda fundo do formulário
    items.firstElementChild.textContent = nameValue; // Troca texto do 1º item pela variável nameValue
    items.children[1].textContent = emailValue;      // Troca texto do 2º item pela variável emailValue
    
    body.style.background = "white"; // Muda fundo do body para branco
});


// Exemplo de evento para capturar mudança no campo de nome
/// nameInput.addEventListener("change", function (e) {
//     console.log(e.target.value); // Mostra no console o valor digitado
// });


// mdn events


