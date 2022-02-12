import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {useState} from 'react'
// styles 
import AppCss from '../App.css'
// icons
import { DiJavascript1 } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
//pages
import JSPage from '../pages/JSPage';
import PHPpage from './PhpPage';
import JavaPage from './JavaPage';
import SQLpage from './SQLpage';
// retorna o nome


function HomePage() {



  return (
    <body className='page'>
   
      <Router >
        <section>
          <h2>Conheça mais sobre as linguagens de programação. Vamos lá ! </h2>
          
          <ul>
            <li title='JavaScript' className='js'>
              <Link className='item' to='/JavascriptPage'>
                <DiJavascript1 />
              </Link>
            </li>
            <li title='php' className='php'>
              <Link className='item' to='/PhpPage'>
                <DiPhp />
              </Link>
            </li>
            <li title='Java' className='java'>
              <Link className='item' to='JavaPagina'>
                <DiJava />
              </Link>
            </li>
            <li title='SQL' className='sql'>
              <Link className='item' to='SqlPage'>
                <GrMysql />
              </Link>
            </li>
          </ul>
        </section>

        <Routes>
          <Route path='/JavascriptPage' element={<JSPage />}></Route>
          <Route path='PhpPage' element={<PHPpage />}></Route>
          <Route path='JavaPagina' element={<JavaPage />}></Route>
          <Route path='SqlPage' element={<SQLpage />}></Route>
        </Routes>

      </Router>
    </body>
  )
}

export default HomePage; 