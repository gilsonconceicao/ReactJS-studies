import { useState } from "react";
import foto from '../imagens/imagem programação.png'
import stylesHome from '../components/Styles module/homestyle.module.css'
import Saibamais from "./Saibamais";

function HomePage () {
    return (
        <section>
            <div className={stylesHome.leyautHome}>
                <article>
                    <h1>Bem vido ao nosso site!</h1>
                    <p>Aqui mostramos para você o quão é simples aprender programação. De uma forma didática e muito divertida. Exercícios práticos e teóricos para os famosos códigos fixar na sua mente da melhor forma poassível.</p>
                </article>
                <div>
                    <img src={foto} alt='imagem programação'/>
                </div>
            </div>
            <a className={stylesHome.maiscurso} href="https://www.cursoemvideo.com/" target='_blank' >Conheça mais cursos</a>
            
        </section>
    )
}

export default HomePage;