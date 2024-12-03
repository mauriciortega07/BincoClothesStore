import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import useHandleInputChangeAndSubmit from "../../../hooks/useHandleInputChangeAndSubmit";
import { ContentForm, Form, FormElements, TextInput } from "./styles";
import { TitleForm } from "../Login/styles";

const Signin = () => {

    const {
        form,
        handleInputChange,
        handleSubmitSignin
    } = useHandleInputChangeAndSubmit()

    return (
        <ContentForm className="signinForm">
            <TitleForm>REGISTRO</TitleForm>
            <Form onSubmit={handleSubmitSignin}>
                <FormElements>
                    <label for="name">Nombre:</label>
                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Ingresa tu nombre"
                        required />
                </FormElements>

                <FormElements>
                    <label for="lastname">Apellidos:</label>
                    <TextInput
                        id="lastname"
                        type="text"
                        name="lastname"
                        value={form.lastname}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Ingresa un apellido"
                        required
                    />
                </FormElements>

                <FormElements>
                    <label for="birthday">Fecha de Nacimeinto</label>
                    <TextInput
                        id="birthday"
                        type="date"
                        name="birthday"
                        aria-label="Abrir calendario para seleccioanr su fecha de nacimiento"
                        value={form.birthday}
                        onChange={(e) => handleInputChange(e)}
                        required
                    />
                </FormElements>

                <FormElements>
                    <label for="emailSignin">Correo: </label>
                    <TextInput
                        id="emailSignin"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Ingresa tu correo electronico"
                        required
                    />
                </FormElements>

                <FormElements>
                    <label for="passwordSignin">Contraseña: </label>
                    <TextInput
                        id="passwordSignin"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Ingresa tu contraseña"
                    />
                </FormElements>

                <button type="submit">Registrarse</button>
            </Form>
        </ContentForm>
    )

}

export default Signin;