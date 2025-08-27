// Função que define um componente React chamado "FirstComponents"
function FirstComponents() {
    // O componente retorna um JSX (uma sintaxe que parece HTML dentro do JavaScript)
    return (
        // JSX precisa de um elemento "pai", aqui usamos uma <div>
        <div className="firstcomponents">
            {/* Este parágrafo será exibido na tela */}
            <p>Primeiro Componente</p>
        </div>
    )
}

// Exporta o componente para que ele possa ser usado em outros arquivos do projeto
export default FirstComponents
