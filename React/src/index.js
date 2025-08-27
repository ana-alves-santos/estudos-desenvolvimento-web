import React from 'react'; // Biblioteca React
import ReactDOM from 'react-dom/client'; // Renderização no DOM
import './index.css'; // Estilos
import App from './App'; // Componente principal
import reportWebVitals from './reportWebVitals'; // Performance (opcional)

const root = ReactDOM.createRoot(document.getElementById('root')); // Ponto de entrada
root.render(
  <React.StrictMode>
    <App /> {/* Renderiza o App */}
  </React.StrictMode>
);

reportWebVitals(); // Mede performance (opcional)
