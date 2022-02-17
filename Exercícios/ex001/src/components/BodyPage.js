import react, {useState} from "react";
import StyleBody from '../components/Components CSS/BodyPage.module.css'
import photoUI from '../imagens/UI colores.png'



function BodyPage() {

    const [numAtual, setAddmais] = useState(0);

        function adicionar() {
            setAddmais(numAtual +1 )
        }

        function remover() {
            setAddmais(numAtual - 1 )
        }

    return (
        <body>
            <div className={StyleBody.layuntSobre}>
                <article className={StyleBody.sobreColor}>
                    <h1>A importância das cores</h1>
                    <p>Saber combinar as cores de forma certa é fundamental para a construção de um site. Pode mudar completamente a visão do cliente. Usar paletas de cores que combinam é um requisito. </p>

                    <div className={StyleBody.addNum}>
                        <div> 
                            <button onClick={adicionar}>+1</button>
                            <button onClick={remover}>-1</button>
                        </div>
                        <h2>{numAtual}</h2>
                    </div>

                </article>
                <div>
                    <img src={photoUI}/>
                </div>
            </div>
        </body>
    )
}  

export default BodyPage; 