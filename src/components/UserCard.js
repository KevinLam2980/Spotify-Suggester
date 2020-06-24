import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"

import { connect } from "react-redux"

import axiosWithAuth from "../util/axiosWithAuth"

const UserCard = props => {
    const [user, setUser] = useState({
        email: "",
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
        const updatedUser = {
            ...user
        }
        props.updateUser(updatedUser)
        setUser({
            email:""
        })
        push('/dashboard')
    }

    const logOut = () =>{
        localStorage.removeItem('token')
        push("/")
        //Logout
    }


    useEffect(() => {
        axiosWithAuth()
        .get(`/api/user/${props.id}`)
        .then(res => {
            console.log(res)
            setUser(res.data)
        })
        .catch(err => {
            console.log(err, "Error")
        })
    }, [])


    


    return (
        <div className="user-card-d">
            <form onSubmit={submitHandler}>
                <label className="username-label">Username</label>
                <input 
                type="text"
                value={user.email}
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


const mapStateToProps = state => {
    return {
        id: state.user_id,  
    }
}


export default connect(mapStateToProps, {updateUser})(UserCard);