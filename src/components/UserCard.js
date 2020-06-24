import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"

import axiosWithAuth from "../util/axiosWithAuth"

const UserCard = props => {
    const [user, setUser] = useState({
        email: '',
    })
    
    const {
        push
    } = useHistory();

    const changeHandler = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        // update user to api
    }

    const logOut = () =>{
        localStorage.removeItem('token')
        push("/")
        //Logout
    }


    useEffect(() => {
        axiosWithAuth()
        .get("/api/user/")
    }, [])


    return (
        <div className="user-card-d">
            <form onSubmit={submitHandler}>
                <label className="username-label">Username</label>
                <input 
                type="text"
                value={user.username}
                name="username"
                onChange={changeHandler}
                placeholder="Username"
                id="username-input"
                />             
                <button className="account-update-btn"> Save Changes</button>
                <button className="account-logout-btn" onClick={logOut}> Log Out</button>
            </form>

        
        </div>
    )
}


export default UserCard;