import react from 'react';
import React, { useState } from 'react';
import AppCss from '../src/App.css'
import RenderizaçãoLista from './components/RenderizaçãoLista';
//import HeaderPage from '../src/components/HeaderPage'
//import SectionPage from '../src/components/SectionPage'

function App() {
    // ------ nome da pessoa ------
    const [nomepessoa, setNomePessoa] = useState(); 
    const [UserPessoa, setUserPessoa] = useState();  

    // -------- idade ------- 
    const [Idade, setNomeIdade] = useState(); 
    const [UserIdade, setUserIdade] = useState();  

    // -------- pais ------- 
    const [Pais, setNomePais] = useState(); 
    const [UserPais, setUserPais] = useState(); 

    // -------- numero ------- 
    const [Numero, setNomeNumero] = useState(); 
    const [UserNumero, setUserNumero] = useState(); 

    // -------- CPF ------- 
    const [CPF, setNCPF] = useState(); 
    const [UserCPF, setUserCPF] = useState(); 

    // anviando dados 

    function enviarDados(e) {
      e.preventDefault() 
      setUserPessoa(nomepessoa); 
      setUserIdade(Idade); 
      setUserPais(Pais); 
      setUserNumero(Numero); 
      setUserCPF(CPF); 
    }

    // limpar dados 
     function limpardados() {
      setUserPessoa(''); 
      setUserIdade(''); 
      setUserPais(''); 
      setUserNumero(''); 
      setUserCPF('');
     }

    const User = [
      {
        nome: <>{UserPessoa}</>, 
        idade: <>{UserIdade}</>, 
        nacionalidade: <>{UserPais}</>, 
        numero: <>{UserNumero}</>, 
        CPF: <>{UserCPF}</>
      }
    ];   

    const DadosUser = User.map ( 
      (u) => 
      <p className='dadosDigitados'> 
      <strong>Nome:</strong> {u.nome} <br/>
      <strong>País:</strong> {u.nacionalidade} <br/>
      <strong>Idade:</strong> {u.idade} <br/>
      <strong>numero:</strong> {u.numero} <br/>
      <strong>CPF:</strong> {u.CPF}
      </p> 
    );

    return (
      <body className='App'>
        <div className='dadosUser'>
          <h3 className='titulo'>Dados de usuário </h3>
          {DadosUser}
        </div>
        <div className='form'>
          <form className='conteinerForm'>
            <label htmlFor='nome'>Nome: </label>
            <input type='text' onChange={(e) => setNomePessoa(e.target.value)} /> 

            <label htmlFor='pais'>País: </label>
            <input type='text' onChange={(e) => setNomePais(e.target.value)}/> <br/>

            <label htmlFor='idade'>Idade: </label>
            <input type='number' onChange={(e) => setNomeIdade(e.target.value)}/> <br/>

            <label htmlFor='numero'>Numero: </label>
            <input type='tel' onChange={(e) => setNomeNumero(e.target.value)}/> <br/>

            <label htmlFor='CPF'>CPF: </label>
            <input type='number' onChange={(e) => setNCPF(e.target.value)}/> <br/>

            

            <button className='btn' onClick={enviarDados}>ENVIAR</button>
          </form>
          {enviarDados && (
            <button className='btn' onClick={limpardados}>LIMPAR</button>
          )}
        </div>
      </body>
    )
}


export default App;
