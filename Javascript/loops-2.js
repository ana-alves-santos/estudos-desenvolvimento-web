let index = 0;

// while - executa enquanto a condição for verdadeira
while (index < 10) {
    console.log("index é menor do que 10!");
    // index = index + 1;
    // index += 1;

    // Mesma coisa que acima
    index++;
}

const person = {
    name: "Ana",
    age: 25,
};

// for...in - percorre as propriedades de um objeto
for (property in person) {
    console.log(person[property]);  // acesso dinâmico à propriedade
}