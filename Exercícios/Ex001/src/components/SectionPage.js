import react from "react";
import photoPerfil from "..//imagens/user.png"; 
import StyleSection from "../components//Components CSS/SectionPage.module.css"

class SectionPage extends react.Component {

    constructor(props) {
        super(props);
        this.state = {texto: ''};  
    }

    ReturnText = (event) => {
        this.setState({texto: event.target.value})
    }

    render() {
        return (
            <section>
                <div className={StyleSection.layoutSection}>
                    <article>
                        <h1 className="tituloPrincipal">Escolha seus Templates <br/> Grátis</h1>
                        <p>Escolha o templete perfeito para seu negógio. Customize tudo. </p>
                    </article>
                    <div className={StyleSection.FormDados}>
                        <img src={photoPerfil} alt='Foto de perfil'></img>
                        <form>
                            <label htmlFor="Name">Digite o seu nome</label> <br/>
                            <input type='text' onChange={this.ReturnText}/>
                            <h3 className={ StyleSection.NameEscrito } > { this.state.texto } </h3>
                        </form>
                    </div>
                   
                </div>
                
            </section>
        )
    }
}

export default SectionPage
