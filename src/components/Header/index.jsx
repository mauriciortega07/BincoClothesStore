import React from "react";
import { Link, NavLink } from 'react-router-dom'
import logo from '../../utilities/images/images_logo/binco_logo2.jpg'
import SearchBox from "../SearchBox";

const Header = ({ productSearch }) => {
    return (
        <header>
            <nav>
                <div>
                    <img src={logo} />
                </div>
                <div>
                    <NavLink to="/Inicio" className={({isActive}) => isActive ? "active" : ""}>Inicio </NavLink>
                </div>
                <div>
                    <NavLink to="/Ropa_de_Hombre" className={({isActive})=> isActive ? "active" : ""}>Hombres</NavLink>
                </div>
                <div>
                    <NavLink to="/Ropa_de_Mujer" className={({isActive})=> isActive ? "active" : ""} >Mujeres</NavLink>
                </div>
                <div>
                    <NavLink to="/Electronicos" className={({isActive})=> isActive ? "active" : ""}>Electronicos</NavLink>
                </div>
                <div>
                    <NavLink to="/Joyeria" className={({isActive}) => isActive ? "active" : ""}>Joyeria</NavLink>
                </div>
            </nav>
        </header>
    )


}

export default Header;