//pages 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//style
import StyleDefault from '../pages/CSS page/style.module.css';
import { SiPhp } from "react-icons/si";
import {FiArrowLeftCircle} from 'react-icons/fi'
// import 
import App from '../App';

function PHPpage() {
    return (
        <body className={StyleDefault.page}>
            <section>
                <h2 className={StyleDefault.logosvgphp}><SiPhp/></h2>
                <p><span className={StyleDefault.destaque}>PHP</span> é uma linguagem interpretada livre, usada originalmente apenas para o <span className={StyleDefault.destaque}>desenvolvimento</span> de aplicações presentes e atuantes no lado do <span className={StyleDefault.destaque}>servidor</span>, capazes de gerar conteúdo dinâmico na World Wide Web.</p>
                <button className={StyleDefault.btnVoltar}><Link className={StyleDefault.btn} to='/'><FiArrowLeftCircle/></Link></button>
            </section>
            <Routes>
                <Route path='/' element={App}></Route>
            </Routes>
       </body>
    ) 
}

export default PHPpage; 