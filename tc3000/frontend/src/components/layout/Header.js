import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header>
        <nav>
            <div className="holder">
                <input type="checkbox" id="check"/>
                <label for="check" class="checkbtn">
                    <i class="fa-solid fa-bars"></i>
                </label>
                <a href="#" class="enlance">
                    <img src="img/Logo3.png" alt="" class="logo"/>
                </a>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Institucional">Institucional</Link></li>
                    <li><Link to="/Pilotos">Pilotos</Link></li>
                    <li><Link to="/Calendario">Calendario</Link></li>
                    <li><Link to="/Fotos">Fotos</Link></li>
                    <li><Link to="/Novedades">Novedades</Link></li>
                    <li><Link to="/Contacto">Contacto</Link></li>
                    
                </ul>
            </div>
        </nav>
        </header>
    );
}

export default Header;