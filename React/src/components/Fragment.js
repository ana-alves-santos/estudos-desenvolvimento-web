// Criamos um componente chamado "Fragment"
const Fragment = () => {
    return (
        // O símbolo <> </> é um "React Fragment".
        // Ele serve para "agrupar" elementos sem criar uma <div> extra no HTML.
        <>
          <p>Primeiro</p>
          <p>Segundo</p>
          <p>Terceiro</p>
        </>
    );
};


export default Fragment;
