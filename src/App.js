import Estilo from './assets/css/Estilo.module.css'
import { Routes, Route } from 'react-router-dom'
import Topo from './partes/Topo'
import Rotas from './assets/rotas/Rotas';


function App() {
  return (
    <div className={Estilo.global}>
      <Topo />
      <Rotas />
    </div>
  );
}

export default App;
