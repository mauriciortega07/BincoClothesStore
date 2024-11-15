import React from "react";
import Login from "./Login";
import Signin from "./Signin";

const UserAcces = ({image}) => {
    return (
        <>
            <header>
                <nav>
                    <img  src={image}/>
                </nav>
            </header>
            <main>
                <Login />
                <Signin />
            </main>
        </>
    )
}

export default UserAcces