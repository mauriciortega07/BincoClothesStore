import React, { useState } from "react";
import useHandleInputChangeAndSubmit from "../../../hooks/useHandleInputChangeAndSubmit";

const Signin = () => {

    const {
        name,
        lastname,
        birthday,
        email,
        password,
        handleInputChange,
        handleSubmit
    } = useHandleInputChangeAndSubmit;


    return (
        <section>
            <h3>REGISTRO</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre: </label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        
                        placeholder="Ingresa tu nombre"
                        required />
                </div>
                <div>
                    <label>Apellidos: </label>
                    <input
                        type="text"
                        name="lastname"
                        value={lastname}
                        onChange={handleInputChange}
                        placeholder="Ingresa un apellido"
                        required
                    />
                </div>
                <div>
                    <label>Fecha de Nacimeinto</label>
                    <input
                        type="date"
                        name="birthday"
                        value={birthday}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Correo: </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        placeholder="Ingresa tu correo electronico"
                        required
                    />
                </div>
                <div>
                    <label>Contraseña: </label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        placeholder="Ingresa tu contraseña"
                    />
                </div>
                <div>
                    <button type="submit">Registrarse</button>
                </div>
            </form>
        </section>
    )

}

export default Signin;