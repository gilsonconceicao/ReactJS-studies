// dados de usuários 
import react from "react";
import { useState } from 'react';

import stylesDados from '../components/Styles module/DadosUser.module.css'

function DadosUser() {

    // nome 
    const [Nome, setNome] = useState();
    const [userNome, setUserNome] = useState();

    // email 
    const [Email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    // idade 
    const [idade, setIdade] = useState();
    const [UserIdade, setUserIdade] = useState();

    // cpf 
    const [Cpf, setCpf] = useState()
    const [UserCpf, setUserCpf] = useState();

    function enviardados() {
        setUserNome(Nome);
        setUserEmail(Email);
        setUserIdade(idade);
        setUserCpf(Cpf);
    }

    const dados = [
        {
            nome: <>{userNome}</>,
            email: <>{userEmail}</>,
            idade: <>{UserIdade}</>,
            cpf: <>{UserCpf}</>
        }
    ];

    const DadosUsuario = dados.map(
        (d) => <p>Nome: {d.nome} <br />
            Email: {d.email} <br />
            Idade: {d.idade} <br />
            CPF: {d.cpf} </p>
    )

    return (
        <section>
            <div className={stylesDados.leyautHome}>
                <div>
                    <h1>Dados cadastrais</h1>
                    {DadosUsuario}
                </div>
                <article>
                    <h1>Contato</h1>
                    <label htmlFor='nome'>Nome:</label>
                    <input type='text' placeholder='Digite o seu nome...' onChange={(e) => setNome(e.target.value)} /> <br /><br />

                    <label htmlFor='email'>Email:</label>
                    <input type='email' placeholder='Digite o seu email...' onChange={(e) => setEmail(e.target.value)} /> <br /><br />

                    <label htmlFor='idade'>Idade:</label>
                    <input type='number' placeholder='Digite a sua idade...' onChange={(e) => setIdade(e.target.value)} /> <br /><br />

                    <label htmlFor='CPF'>CPF:</label>
                    <input type='number' placeholder='Digite o seu CPF...' onChange={(e) => setCpf(e.target.value)} /> <br /><br />

                    <button onClick={enviardados}>ENVIAR DADOS</button>
                </article>

                {
                    (userNome, userEmail, UserCpf, UserIdade && (
                    <div className={stylesDados.msgsucesso}>Dados enviados com sucesso! Verifique.</div>
                    ))
                }

            </div>
        </section>
    )
}

export default DadosUser; 