// Criamos um componente chamado "Container".
// recebe uma propriedade especial chamada "children".
const Container = ({ children }) => {
    
    // Esse componente retorna uma <div>.
    // Dentro dessa <div>, ele mostra tudo que foi passado como conteúdo (children).
    return <div className="container">{children}</div>
};


export default Container;
