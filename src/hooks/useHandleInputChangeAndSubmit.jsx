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

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, lastname, birthday, email, password } = form;

        const Users = JSON.parse(localStorage.getItem('users') || '[]');
        const isUserRegistered = Users.find((user) => user.email === email)

        if (isUserRegistered) {
            return (<p>Usuario Registrado</p>)
        } else {
            Users.push({
                name: name,
                lastname: lastname,
                birthday: birthday,
                email: email,
                password: password
            })
            localStorage.setItem("users", JSON.stringify(Users))
            return (
                <p>Registro Exitoso</p>
            )
        }
    }

    return {form, handleInputChange, handleSubmit}
    
}

export default useHandleInputChangeAndSubmit;