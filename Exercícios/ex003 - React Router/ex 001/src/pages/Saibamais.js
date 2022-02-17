import stylesHome from '../components/Styles module/homestyle.module.css'
import imgUI from '../imagens/UI colores.png'

function Saibamais() {
    return (
        
    <section>
        <div className={stylesHome.leyautHome}>
            <article>
                <h1>Saiba mais sobre o site</h1>
                <p>Construimos o seu processo de aprendizado de uma forma didática e muito divertida. Exercícios práticos e teóricos para os famosos códigos fixar na sua mente da melhor forma poassível</p>
            </article>
            <img src={imgUI} />
        </div>
    </section>
    )
}

export default Saibamais