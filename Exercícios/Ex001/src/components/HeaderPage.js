import react from "react";
import StyleHeaer from '../components/Components CSS/Header.module.css'; 

class HeaderPage extends react.Component {
    render() {
        return (
            <header>
               
                <nav>
                <div className={StyleHeaer.logo}></div>
                    <ul>
                        <li><a href="#">Website</a></li>
                        <li><a href="#">Temas</a></li>
                        <li><a href="#">Paleta</a></li>
                        <li><a href="#">Tendências</a></li>
                        <li><a href="#">Saiba mais </a></li>
                    </ul>
                </nav>
                <div className="login">
                    <ul>
                        <li><a href="#">Login</a></li>
                        <li><a className={StyleHeaer.junte_se} href="#">JUNTE-SE CONOSCO</a></li>
                    </ul>
                    
                </div>
            </header>
        )
    }
}

export default HeaderPage