//pages 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//style
import StyleDefault from '../pages/CSS page/style.module.css';
import { SiMysql } from "react-icons/si";
import {FiArrowLeftCircle} from 'react-icons/fi'
// import 
import App from '../App';

function SQLpage() {
    return (
        <body className={StyleDefault.page}>
            <section>
                <h2 className={StyleDefault.logosvgSQL}><SiMysql/></h2>
                <p><span className={StyleDefault.destaques}>JavaScript</span> é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com <span className={StyleDefault.destaques}>HTML</span> e <span className={StyleDefault.destaques}>CSS</span>, o <span className={StyleDefault.destaques}>JavaScript</span> é uma das três principais tecnologias da <span>World Wide Web</span>.</p>
                <button className={StyleDefault.btnVoltar}><Link className={StyleDefault.btn} to='/'><FiArrowLeftCircle/></Link></button>
            </section>
            <Routes>
                <Route path='/' element={App}></Route>
            </Routes>
       </body>
    ) 
}

export default SQLpage; 