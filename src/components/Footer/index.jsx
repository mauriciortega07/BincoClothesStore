import React from "react";
import { Link, NavLink } from "react-router-dom";
import BincoLogo from "../../utilities/images/images_logo/Binco_logo.webp"
import { FooterDivLogo, FooterLogo, FooterMain, FooterNav, FooterNavLink } from "./styles";

const Footer = () => {
    return (
        <FooterMain>
            <FooterNav>
                <NavLink><FooterNavLink>Nuestros Datos</FooterNavLink></NavLink>
                <NavLink><FooterNavLink>Terminos y Condiciones</FooterNavLink></NavLink>
                <NavLink><FooterNavLink>Uso del Sitio</FooterNavLink></NavLink>
                <NavLink><FooterNavLink>Seleccionar Ciudad</FooterNavLink></NavLink>
                <NavLink><FooterNavLink>Aviso de Privacidad</FooterNavLink></NavLink>
            </FooterNav>
            <FooterDivLogo>
                <FooterLogo src={BincoLogo} alt="Logotipo de binco"/>
            </FooterDivLogo>
        </FooterMain>
    )
}

export default Footer;