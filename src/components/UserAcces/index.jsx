import React, { useEffect, useState } from "react";
import Login from "./Login";
import Signin from "./Signin";
import { CreateCount, HeaderUserAcces, Logo, MainContent, SectionForms } from "./styles";
import Footer from "./../Footer/index"

const UserAcces = ({ image }) => {
    const [signinShow, setSigninShow] = useState(false);

    const ShowSign = (signinShow) => {
        setSigninShow(true)
        console.log(signinShow)
    }

    return (
        <>
            <HeaderUserAcces>
                <div>
                    <Logo src={image} alt="Logo" />
                </div>
            </HeaderUserAcces>
            <MainContent>
                <SectionForms>
                    <Login />
                    {signinShow ? (<Signin />) : (<></>)}
                </SectionForms>
                <CreateCount>
                    {
                        signinShow ? (<></>) : (
                            <>
                                <p>¿No tienes una cuenta?</p>
                                <button className="createLogin" onClick={ShowSign}>Crear una cuenta</button>
                            </>
                        )
                    }

                </CreateCount>
            </MainContent>
            <Footer />
        </>
    )
}

export default UserAcces