import React from "react";
import { Link, NavLink } from 'react-router-dom'
import logo from '../../utilities/images/images_logo/binco_logo2.jpg'
import SearchBox from "../SearchBox";
import { HeaderContentMain, HeaderLogo, HeaderNavLink, HeaderNavMain } from "./styles";

const Header = ({ productSearch }) => {

    return (
        <HeaderContentMain>
            <div>
                <Link to="/Inicio"><HeaderLogo src={logo} className="logoHeaderMain" /></Link>
            </div>
            <HeaderNavMain>

                <NavLink to="/Inicio" className={({ isActive }) => isActive ? "active" : ""}><HeaderNavLink>Inicio</HeaderNavLink></NavLink>

                <NavLink to="/Ropa_de_Hombre" className={({ isActive }) => isActive ? "active" : ""}><HeaderNavLink>Hombres</HeaderNavLink></NavLink>

                <NavLink to="/Ropa_de_Mujer" className={({ isActive }) => isActive ? "active" : ""}><HeaderNavLink>Mujeres</HeaderNavLink></NavLink>

                <NavLink to="/Electronicos" className={({ isActive }) => isActive ? "active" : ""}><HeaderNavLink>Electronicos</HeaderNavLink></NavLink>

                <NavLink to="/Joyeria" className={({ isActive }) => isActive ? "active" : ""}><HeaderNavLink>Joyeria</HeaderNavLink></NavLink>

            </HeaderNavMain>
        </HeaderContentMain>
    )


}

export default Header;