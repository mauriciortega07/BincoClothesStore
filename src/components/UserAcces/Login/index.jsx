import React from "react";
import useHandleInputChangeAndSubmit from "../../../hooks/useHandleInputChangeAndSubmit";
import { ContentForm, Form, TextInput, TitleForm } from "./styles";

const Login = () => {

    const {
        form,
        handleSubmitLogin,
        handleInputChange
    } = useHandleInputChangeAndSubmit();

    return (
        <ContentForm className="loginForm">
            <TitleForm>ACCESO</TitleForm>
            <Form onSubmit={handleSubmitLogin}>
                <label>Correo: </label>
                <TextInput
                    type="email"
                    placeholder="Ingresa tu correo"
                    name="email"
                    value={form.email}
                    onChange={(e) => handleInputChange(e)}
                    required
                />

                <label>Contraseña: </label>
                <TextInput
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    name="password"
                    value={form.password}
                    onChange={(e) => handleInputChange(e)}
                    required
                />
                <button type="submit">Iniciar Session</button>
            </Form>
        </ContentForm>
    )
}

export default Login;