// Componente funcional chamado AnotherComponent
const AnotherComponent = () => {

    // Função que será chamada quando o primeiro botão for clicado
    const handleClick = () => {
        console.log("Clickou no botão"); // Mostra no console
    }

    return (
        <div>
            <p>Segundo componente</p>

            {/* Botão que usa uma função externa para o evento onClick */}
            <button onClick={handleClick}>Evento de click</button>

            <hr />

            {/* Botão que usa uma função inline direto no onClick */}
            <button onClick={() => console.log("teste")}>Evento no Elemento</button>
        </div>
    );
};

// Exporta o componente para ser usado em outros arquivos
export default AnotherComponent;
