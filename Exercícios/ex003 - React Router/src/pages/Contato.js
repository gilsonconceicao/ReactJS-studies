import stylesHome from '../components/Styles module/homestyle.module.css'
import { useState } from 'react'

function Contato() {

    // ENVIO DE DADOS 

    // nome
    const [ Nome , setNome ] = useState()

    return (
        <section>
            <div className={stylesHome.leyautHome}>
                <h1>CONTATO</h1>
                <p>
                    Email: empresa@gmail.com <br/>
                    Tel: 11 9555-5555 <br/>
                    CNPJ: 323432223-33 <br/>
                    
                </p>
            </div>
        </section>
    )
}

export default Contato