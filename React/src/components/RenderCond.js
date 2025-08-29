// const RenderCond = (props) => {  // 🔹 versão recebendo props

const RenderCond = ({x , y}) => { // 🔹 versão usando destructuring

     const x = 10; // 🔹 valor fixo de x, substitui qualquer valor que venha das props

    return (
    <div>
        {/* tenta usar props.x, mas aqui não funciona porque usamos destructuring */}
        {props.x > 5 && <p>X é maior que 10</p>}

        {/* mesmo problema, props.x não existe nessa versão */}
        {props.x > 5 ? <p>X é número alto</p> : <p>X é um número baixo</p>}

        {/* usa o x fixo (10) que declaramos, sempre vai mostrar */}
        {x > 5 && <p>X é maior que 10</p>}

        {/* também usa x fixo, então sempre "número alto" */}
        {x > 5 ? <p>X é número alto</p> : <p>X é um número baixo</p>}

        <p>O valor de y é :10 </p>
    </div>
   );
}

export default RenderCond; 
