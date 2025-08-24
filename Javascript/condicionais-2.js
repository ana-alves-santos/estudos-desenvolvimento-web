// O switch é usado para comparar o valor de uma variável
// com vários "casos" diferentes. Ele é parecido com vários if/else,
// mas deixa o código mais organizado quando há muitas comparações.

const car = 'Tesla'; // variável que será verificada

// O switch vai comparar o valor da variável "car"
switch (car) {

    case 'Mercedes': // se car for igual a 'Mercedes'
        console.log('Mercedes is beautiful!');
        break; // para o switch aqui (impede que execute os outros)

    case 'Ferrari': // se car for igual a 'Ferrari'
        console.log('Ferrari is very red!');
        break;

    case 'Tesla': // se car for igual a 'Tesla'
        console.log('Tesla is very smart!');
        break;

    // Podemos também adicionar um "default" (opcional):
    // default:
    //     console.log('Carro não encontrado!');
    //     break;
}
