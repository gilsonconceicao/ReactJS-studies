import React from 'react';
import AppCss from '../src/App.css'
import HeaderPage from './components/HeaderPage';
import SectionPage from './components/SectionPage';
import BodyPage from './components/BodyPage';

function App() {
  return (
    <div className='App'> 
    <HeaderPage/>   
    <SectionPage/>
    <BodyPage/>
    </div>
  );
}

export default App;
