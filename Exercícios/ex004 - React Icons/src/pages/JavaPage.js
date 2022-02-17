//pages 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//style
import StyleDefault from '../pages/CSS page/style.module.css';
import { FaJava } from "react-icons/fa";
import {FiArrowLeftCircle} from 'react-icons/fi'
// import 
import App from '../App';

function JavaPage() {
    return (
        <body className={StyleDefault.page}>
            <section>
                <h2 className={StyleDefault.logosvgJava}><FaJava/></h2>
                <p><span className={StyleDefault.destaque}>Structured Query Language</span>, ou Linguagem de Consulta Estruturada ou SQL, é a linguagem de pesquisa declarativa padrão para banco de dados relacional. Muitas das características originais do <span className={StyleDefault.destaque}>SQL</span> foram inspiradas na álgebra <span className={StyleDefault.destaque}span>relacional</span>.</p>
                <button className={StyleDefault.btnVoltar}><Link className={StyleDefault.btn} to='/'><FiArrowLeftCircle/></Link></button>
            </section>
            <Routes>
                <Route path='/' element={App}></Route>
            </Routes>
       </body>
    ) 
}

export default JavaPage; 