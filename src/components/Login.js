import React from "react";
import "../style/Login.css";
import { accessUrl } from "../spotify";

function Login() {

    // console.log(accessUrl)
    return (
        <div className="login">
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <a href={accessUrl}>SIGN UP</a>
            <a href={accessUrl}>LOGIN</a>
            
        </div>
    );
}

export default Login;
