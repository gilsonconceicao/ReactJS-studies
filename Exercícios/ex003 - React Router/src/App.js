import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// pages 
import HomePage from './pages/Home';
import Saibamais from './pages/Saibamais';
import Contato from './pages/Contato';
import DadosUser from './pages/DadosUser';
// styles 
import stylesheader from '../src/components/Styles module/header.module.css'; 
import AppCss from '../src/App.css'


function App() {
   return (
      <Router>
         <header className={stylesheader.menu}>
            <h2>Logo</h2>
            <ul>
               <li><Link className={stylesheader.item} to='/'>Home</Link></li>
               <li><Link className={stylesheader.item} to='/saibamais'>Saiba mais</Link></li>
               <li><Link className={stylesheader.item} to='/contato'>Contato</Link></li>
               <li><Link className={stylesheader.item} to='/dadosuser'>Meus dados</Link></li>
            </ul>
         </header>

         <Routes>
            <Route exect path='/' element={<HomePage/>} />
            <Route path='/saibamais' element={<Saibamais/>} />
            <Route path='/contato' element={<Contato/>} />
            <Route path='/dadosuser' element={<DadosUser/>}/>
         </Routes> 

      </Router>
   )
}


export default App;
