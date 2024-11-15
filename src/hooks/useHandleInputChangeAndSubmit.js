import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const useHandleInputChangeAndSubmit = () => {
    const [form, setForm] = useState({
        name: "",
        lastname: "",
        birthday: "",
        email: "",
        password: "",
    })

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setForm(
            {
                ...form, [name]: value
            }
        );
    }

    const handleSubmitSignin = (e) => {
        e.preventDefault();

        const { name, lastname, birthday, email, password } = form;

        const Users = JSON.parse(localStorage.getItem('users') || '[]');
        const isUserRegistered = Users.find((user) => user.email === email)

        if (isUserRegistered) {
            alert ("Usuario ya Registrado");
        } else {
            Users.push({
                name: name,
                lastname: lastname,
                birthday: birthday,
                email: email,
                password: password
            })
            localStorage.setItem("users", JSON.stringify(Users))
            alert ("Usuario Registrado Exitosamente");
            navigate("/Inicio")

        }
    }

    const handleSubmitLogin = (e) => {
        e.preventDefault();

        const {email, password} = form;

        const Users = JSON.parse(localStorage.getItem('users') || '[]');

        const validUsers = Users.find(user => user.email === email && user.password === password);

        if (!validUsers) {
            alert("Usuario no encontrado")
        } else {
            alert("Bienvenido!")
            localStorage.setItem('user_session', JSON.stringify(validUsers));
            navigate("/Inicio")
        }
    }

    return {form, handleInputChange, handleSubmitSignin, handleSubmitLogin}
    
}

export default useHandleInputChangeAndSubmit;