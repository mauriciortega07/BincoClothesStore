import React from "react";
import useHandleInputChangeAndSubmit from "../../../hooks/useHandleInputChangeAndSubmit";
import { ContentForm, Form, FormElements, TextInput, TitleForm } from "./styles";

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
                <FormElements>
                    <label for="email">Correo:</label>
                    <TextInput
                        id="email"
                        type="email"
                        placeholder="Ingresa tu correo"
                        name="email"
                        value={form.email}
                        onChange={(e) => handleInputChange(e)}
                        required
                    />
                </FormElements>

                <FormElements>
                    <label for="password">Contraseña:</label>
                    <TextInput
                        id="password"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        name="password"
                        value={form.password}
                        onChange={(e) => handleInputChange(e)}
                        required
                    />
                </FormElements>

                <button type="submit">Iniciar Session</button>
            </Form>
        </ContentForm>
    )
}

export default Login;