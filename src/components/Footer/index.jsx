import React from "react";
import { Link } from "react-router-dom";
import BincoLogo from "../../utilities/images/images_logo/Binco_logo.webp"
import { FooterDivLogo, FooterLogo, FooterMain, FooterNav, FooterNavLink } from "./styles";

const Footer = () => {
return(
    <FooterMain>
        <FooterNav>
            <FooterNavLink>Nuestros Datos</FooterNavLink>
            <FooterNavLink>Terminos y Condiciones</FooterNavLink>
            <FooterNavLink>Uso del Sitio</FooterNavLink>
            <FooterNavLink>Seleccionar Ciudad</FooterNavLink>
            <FooterNavLink>Aviso de Privacidad</FooterNavLink>
        </FooterNav>
        <FooterDivLogo>
            <FooterLogo src={BincoLogo}/>
        </FooterDivLogo>
    </FooterMain>
)
}

export default Footer;