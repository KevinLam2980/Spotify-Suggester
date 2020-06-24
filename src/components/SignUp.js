import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios";
import formSchema from '../Validation/formSchema'
import * as Yup from 'yup'

const emptyUser = {
    email: "",
    password: ""
};

const initialFormErrors = {
    email: '',
    password: '',
}

const initialDisabled = true

const SignUp = props => {
    const { push } = useHistory();

    const [form, setForm] = useState(emptyUser);

    const handleChange = e => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    let createUser = newUser => {
        axios
        .post("https://spotify-suggestions-backend.herokuapp.com/auth/signup", newUser)
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.data.token);
                push("/dashboard");
            })
            .catch(error => {
                console.log("Error", error)
            })
            .finally(() => {
                setForm(emptyUser);
            });

    }

    const handleSubmit = e => {
        e.preventDefault();
        const newUser = {
            email: form.email.trim(),
            password: form.password.trim()
        }
        createUser(newUser);

    }

    const handleClick = e => {
        push("/login");
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
                    type="text"
                    name="password"
                    placeholder="Enter password"
                    value={form.password}
                    onChange={handleChange}
                />
                <br />
                <button className="signup">Sign up</button>
            </form>
            <div>
                <p>Already registered?
                    <div className="login" onClick={handleClick}>Log in</div>
                </p>
            </div>
        </div>
    )
}


export default SignUp;