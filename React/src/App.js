import './App.css'; // Importa os estilos do App
import AnotherComponent from './components/AnotherComponent';
import FirstComponents from './components/FirstComponentes'; // Importa o componente criado
import Hooks from './components/Hooks';
import Images from './components/images';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';

// Componente principal da aplicação
function App() {
  return (
    <div className="App">
      <h1>Hello React</h1> {/* Título exibido na tela */}
      <FirstComponents /> {/* Renderiza o componente FirstComponents */}
      <AnotherComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCond x ={5} y={10} />
      <Fragment />
      <Container>
        <h1>Este é filho container!</h1>
      </Container>
    </div>
  );
}

export default App; // Exporta o App para ser usado em index.js

