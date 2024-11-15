import React from "react";
import useHandleInputChangeAndSubmit from "../../../hooks/useHandleInputChangeAndSubmit";

const Login = () => {
    
const {
    form,
    handleSubmitLogin,
    handleInputChange
} = useHandleInputChangeAndSubmit();

    return (
        <section>
            <h3>ACCESO</h3>
            <form onSubmit={handleSubmitLogin}>
                <div>
                    <label>Correo</label>
                    <input
                        type="email"
                        placeholder="Ingresa tu correo"
                        name="email"
                        value={form.email}
                        onChange={(e) => handleInputChange(e)}
                        required
                    />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        name="password"
                        value={form.password}
                        onChange={(e) => handleInputChange(e)}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Iniciar Session</button>
                </div>
            </form>
        </section>
    )
}

export default Login;