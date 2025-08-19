// Criando a classe base (pai) chamada Animal
class Animal {
    // O construtor recebe o nome do animal
    constructor(name){
        this.name = name; // Armazena o nome no objeto
    }
    
    // Método de instância (todos os animais têm esse comportamento padrão)
    speak(){
        // Exibe que o animal fez algum barulho genérico
        console.log(`${this.name} made some noise!`);
    }
}

// Criando a classe Dog que herda da classe Animal
class Dog extends Animal {
    // O construtor da classe Dog também recebe um nome
    constructor(name) {
        super(name); // Chama o construtor da classe Animal (pai) e passa o nome
    }

    // Sobrescrevendo (reescrevendo) o método speak da classe Animal
    speak() {
        // Agora o cachorro tem um comportamento específico
        console.log(`${this.name} barked!`);
    }
}  

// Criando um objeto da classe Animal
const animal = new Animal("Simba");

// Criando um objeto da classe Dog
const dog = new Dog("Bob");

// Chamando o método speak do Animal (usa a versão da classe pai)
animal.speak(); // "Simba made some noise!"

// Chamando o método speak do Dog (usa a versão sobrescrita da classe filha)
dog.speak();    // "Bob barked!"
