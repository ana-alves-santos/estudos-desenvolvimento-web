import { useState, useEffect } from "react";

const Hooks = () => {

    // Variável normal do JS
    // Se mudar, a tela NÃO atualiza
    let idade = 30;

    // useState cria uma "variável especial" do React
    // novaIdade guarda o valor
    // setNovaIdade muda o valor e atualiza a tela automaticamente
    const [novaIdade, setNovaIdade] = useState(40);

    // Muda a variável normal
    // Só aparece no console, a tela não muda
    const changeAge = () => {
        idade = 31;
        console.log(idade);
    };

    // Muda o estado (useState)
    // A tela atualiza com o novo valor
    const changeNewAge = () => {
        setNovaIdade(45);
    };

    // useEffect é um "efeito colateral"
    // Ele roda código depois que o componente aparece na tela
    // Aqui, ele roda sempre que o componente muda
    useEffect(() => {
        console.log("useEffect rodou");
    });

    return (
        <div>
            <p>Idade (normal): {idade}</p>
            <button onClick={changeAge}>Mudar idade</button>

            <p>Idade (estado): {novaIdade}</p>
            <button onClick={changeNewAge}>Mudar nova idade</button>
        </div>
    );
};

export default Hooks;
