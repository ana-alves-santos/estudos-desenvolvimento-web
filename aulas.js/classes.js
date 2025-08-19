// Definindo uma classe chamada Person
class Person {
    // O construtor é chamado quando criamos um novo objeto da classe
    constructor(firstName, LastName, age ){
        this.firstName = firstName; // Atribui o primeiro nome ao objeto
        this.LastName = LastName;   // Atribui o sobrenome ao objeto
        this.age = age;             // Atribui a idade ao objeto
    }

    // Método de instância (precisa ser chamado a partir de um objeto)
    getFullName () {
        // Exibe no console o nome completo (primeiro nome + sobrenome)
        console.log(`${this.firstName} + ${this.LastName}`);
    } 

    // Método estático (não depende de um objeto, é chamado diretamente pela classe)
    static speak() {
        console.log("Helo"); 
    }
}

// Criando um novo objeto da classe Person, passando os valores para o construtor
const person = new Person('Ana', 'Alves', '25');

// Mostra no console o objeto criado (com os atributos firstName, LastName e age)
console.log(person);

// Chama o método getFullName do objeto "person"
person.getFullName();

// Chama o método estático diretamente da classe Person (não precisa de objeto)
Person.speak();
