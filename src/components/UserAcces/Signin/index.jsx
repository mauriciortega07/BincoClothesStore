import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import useHandleInputChangeAndSubmit from "../../../hooks/useHandleInputChangeAndSubmit";

const Signin = () => {

    const {
        form,
        handleInputChange,
        handleSubmitSignin
    } = useHandleInputChangeAndSubmit()

    return (
        <section>
            <h3>REGISTRO</h3>
            <form onSubmit={handleSubmitSignin}>
                <div>
                    <label>Nombre: </label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Ingresa tu nombre"
                        required />
                </div>
                <div>
                    <label>Apellidos: </label>
                    <input
                        type="text"
                        name="lastname"
                        value={form.lastname}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Ingresa un apellido"
                        required
                    />
                </div>
                <div>
                    <label>Fecha de Nacimeinto</label>
                    <input
                        type="date"
                        name="birthday"
                        value={form.birthday}
                        onChange={(e) => handleInputChange(e)}
                        required
                    />
                </div>
                <div>
                    <label>Correo: </label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Ingresa tu correo electronico"
                        required
                    />
                </div>
                <div>
                    <label>Contraseña: </label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={(e) => handleInputChange(e)}
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