import React from "react";

const Login = () => {
    return (
        <section>
            <h3>ACCESO</h3>
            <form>
                <div>
                    <label>Correo</label>
                    <input
                        type="email"
                        placeholder="Ingresa tu correo"
                    />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input
                        type="password"
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

export default Login;