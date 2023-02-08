import Estilo from '../../assets/css/Estilo.module.css'
import { Routes, Route } from 'react-router-dom'
import Lista from '../../pages/Lista';
import { Album } from '../../pages/Album';
import { Foto } from '../../pages/Foto';
import Erro from '../../pages/Erro'

function Rotas() {
  return (
      <Routes>
        <Route path='/' element={<Lista />}/>
        <Route path='/album' element={<Album />}/>
        <Route path='/foto' element={<Foto />}/>  
        <Route path='*' element={<Erro />}/>  
      </Routes>
  );
}

export default Rotas;
