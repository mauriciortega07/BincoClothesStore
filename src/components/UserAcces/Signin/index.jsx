import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import useHandleInputChangeAndSubmit from "../../../hooks/useHandleInputChangeAndSubmit";
import { ContentForm, Form, TextInput } from "./styles";
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
                
                    <label>Nombre: </label>
                    <TextInput
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Ingresa tu nombre"
                        required />

                    <label>Apellidos: </label>
                    <TextInput
                        type="text"
                        name="lastname"
                        value={form.lastname}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Ingresa un apellido"
                        required
                    />

                    <label>Fecha de Nacimeinto</label>
                    <TextInput
                        type="date"
                        name="birthday"
                        value={form.birthday}
                        onChange={(e) => handleInputChange(e)}
                        required
                    />

                    <label>Correo: </label>
                    <TextInput
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Ingresa tu correo electronico"
                        required
                    />

                    <label>Contraseña: </label>
                    <TextInput
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Ingresa tu contraseña"
                    />

                    <button type="submit">Registrarse</button>
            </Form>
        </ContentForm>
    )

}

export default Signin;