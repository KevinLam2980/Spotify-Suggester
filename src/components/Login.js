import React, { useState } from "react"
import { useHistory } from "react-router-dom"

import {connect} from "react-redux"

import {loginCall} from "../actions/index"
import axios from "axios";
import axiosWithAuth from "../util/axiosWithAuth";

const emptyUser = {
    email: "",
    password: ""
};

const SignIn = props => {
    const { push } = useHistory();

    const [form, setForm] = useState(emptyUser);

    const handleChange = e => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    // let loginUser = () => {
    //     loginCall(form);
    //     setForm(emptyUser);

    // }

    const handleSubmit = e => {
        e.preventDefault();
        const existingUser = {
            email: form.email.trim(),
            password: form.password.trim()
        }
        loginCall(existingUser);
        setForm(emptyUser);
        push("/dashboard");
    }

    const routeToSignup = e => {
        push("/");
    }

    
    return (
        <div className="signin-div">
            <h2>Welcome back! Log in</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={form.email}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    name="password"
                    placeholder="Enter password"
                    value={form.password}
                    onChange={handleChange}
                />
                <br />
                <button className="signup">Log in</button>
            </form>
            <div>
                <p>New here?
                    <div className="login" onClick={routeToSignup}>Sign up</div>
                </p>
            </div>
        </div>
    )
}


export default SignIn;