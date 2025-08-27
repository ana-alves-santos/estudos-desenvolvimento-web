import './App.css'; // Importa os estilos do App
import AnotherComponent from './components/AnotherComponent';
import FirstComponents from './components/FirstComponentes'; // Importa o componente criado
import Hooks from './components/Hooks';
import Images from './components/images';

// Componente principal da aplicação
function App() {
  return (
    <div className="App">
      <h1>Hello React</h1> {/* Título exibido na tela */}
      <FirstComponents /> {/* Renderiza o componente FirstComponents */}
      <AnotherComponent />
      <Images />
      <Hooks />
    </div>
  );
}

export default App; // Exporta o App para ser usado em index.js

