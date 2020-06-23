import React, { useState } from "react"
import { useHistory } from "react-router-dom"
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

    let createUser = newUser => {
        axios.post("https://spotify-suggestions-backend.herokuapp.com/auth/signup", newUser)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                push("/login");
            })
            .catch(error => {
                console.log("Error", error)
            })
            .finally(() => {
                setForm(emptyUser);
            });

    }

    // let createUser = newUser => {
    //     axiosWithAuth()
    //         .post("/auth/login", newUser)
    //         .then(response => {
    //             localStorage.setItem('token', response.data.token);
    //             debugger;
    //             push("/dashboard");
    //         })
    //         .catch(error => {
    //             console.log("Error", error)
    //         })
    //         .finally(() => {
    //             setForm(emptyUser);
    //         });

    // }

    const handleSubmit = e => {
        e.preventDefault();
        const newUser = {
            email: form.email.trim(),
            password: form.password.trim()
        }
        createUser(newUser);

    }

    return (
        <div className="signin-div">

            <h2>Connect with Spotify!</h2>
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
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={form.password}
                    onChange={handleChange}
                />
                <br />
                <button className="signin">Sign up</button>
            </form>
            <p>Already registered?</p>
        </div>
    )
}


export default SignIn;