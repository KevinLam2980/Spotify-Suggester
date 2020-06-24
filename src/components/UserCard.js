import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"

import { connect } from "react-redux"

import axios from "axios"

import axiosWithAuth from "../util/axiosWithAuth"

const UserCard = props => {
    const [user, setUser] = useState({
        email: "",
    })


    const {
        push
    } = useHistory();

    const changeHandler = e => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
        ...user,
        [name]: value,
        });
    }

    

    const logOut = () =>{
        localStorage.removeItem('token')
        push("/")
        //Logout
    }


    const updateUser = updatedUser => {
        axiosWithAuth()
        .put(`/api/user/${props.id}`, updatedUser)
        .then(res =>{
        console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        // update user to api
        const updatedUser = {
            ...user
        }
        updateUser(updatedUser)
        push('/user')
    }


    useEffect(() => {
        axiosWithAuth()
        .get(`/api/user/${props.id}`)
        .then(res => {
            console.log(res.data.email)
            setUser({
                ...user,
                email: res.data.email
            })
        })
        .catch(err => {
        console.log(err, "Error")
        })
    }, [props.id])


    


    return (
        <div className="user-card-d">
            <form onSubmit={submitHandler}>
                <label className="username-label">Username</label>
                <input 
                type="text"
                value={user.email}
                name="email"
                onChange={changeHandler}
                placeholder="Username"
                id="username-input"
                />             
                
                <button className="account-update-btn"> Save Changes</button>
                
            </form>
            <button className="account-logout-btn" onClick={logOut}> Log Out</button>
        
        </div>
    )
}


const mapStateToProps = state => {
    debugger;
    return {
        id: state.id,  
    }    
}


export default connect(mapStateToProps, {})(UserCard);