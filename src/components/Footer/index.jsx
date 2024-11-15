import React from "react";
import { Link } from "react-router-dom";
import BincoLogo from "../../utilities/images/images_logo/Binco_logo.webp"

const Footer = () => {
return(
    <footer>
        <nav>
            <Link>Nuestros Datos</Link>
            <Link>Terminos y Condiciones</Link>
            <Link>Uso del Sition</Link>
            <Link>Seleccionar Ciudad</Link>
            <Link>Aviso de Privacidad</Link>
        </nav>
        <div>
            <img src={BincoLogo}/>
        </div>
    </footer>
)
}

export default Footer;