// Importa uma imagem do projeto (React precisa disso para imagens externas)
import city from "../assets/f5.jpg";

const Images = () => {
    return (
        <div>
            {/* Imagem referenciada pelo caminho direto dentro da pasta public */}
            <img src="/f2.jpg" alt="Imagem pública" />

            {/* Imagem importada como módulo (dentro da pasta src/assets) */}
            <img src={city} alt="Cidade" />
        </div>
    );
};

// Exporta o componente para ser usado em outros arquivos
export default Images;
