import React, {useState, useEffect} from "react"
import {useHistory, Link, useLocation} from "react-router-dom"
import { connect } from "react-redux"
import axiosWithAuth from "../util/axiosWithAuth"
import {saveUserInfo, updateEmail} from '../actions'

const initialState = {
    email: "",
}


const UserCard = props => {
    const [user, setUser] = useState(initialState)
    const [username, setUsername] = useState()
    const { email, saveUserInfo } = props
    const location = useLocation()
    const { push } = useHistory();

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
        localStorage.removeItem('id')
        localStorage.removeItem('email')
        push("/")
        //Logout
    }

    const deleteAccount = () => {
        axiosWithAuth()
        .delete(`/api/user/${props.id}`)
        .then(res => {
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            localStorage.removeItem('email')
            push('/') 
        })
        .catch(err =>{
            console.error(err)
        })
    }

    const updateUser = updatedUser => {
        axiosWithAuth()
        .put(`/api/user/${props.id}`, updatedUser)
        .then(res =>{
        let newEmail = JSON.parse(res.config.data).email
        localStorage.setItem("email", newEmail)
        props.updateEmail(newEmail)
        document.querySelector('#userSuccessAlert').style.height = "75px"
        setTimeout(() => {
            if(location.pathname.includes("user") && document.querySelector('#userSuccessAlert') !== null){
                document.querySelector('#userSuccessAlert').style.height = "0px"
            }
            }, 3000)
        })
        .catch(err =>{
            console.error(err)
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        // update user to api
        const updatedUser = {
            ...user
        }
        updateUser(updatedUser)
        setUser(initialState)
        // push('/user')
    }

    useEffect(() => {
        let userID = localStorage.getItem("id")
        let userEmail = localStorage.getItem("email")
        saveUserInfo({
          id: userID,
          email: userEmail
        })
        let user_name = userEmail.split("@")
        setUsername(user_name[0][0].toUpperCase() + user_name[0].slice(1))
      }, [saveUserInfo, email])
    
    return (
        <div id="usercardBackground">
            <div id="userSuccessAlert">Congrats you updated your username to: {email}</div>
            <div className="user-card-d">
                <div id="userProfileContainer">
                <h2>Hello {username}!</h2>
                <form onSubmit={submitHandler}>
                    <label className="username-label">Change user email:</label>
                    <input 
                    type="text"
                    value={user.email}
                    name="email"
                    onChange={changeHandler}
                    placeholder={email}
                    id="username-input"
                    />             
                    <button className="account-update-btn">Save Changes</button>
                    
                </form>
                <Link to="/dashboard" className="back-to-dashboard">Go Back</Link> 
                <button className="delete-account-btn" onClick={deleteAccount}>Delete Account</button>
                <button className="account-logout-btn" onClick={logOut}>Log Out</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        id: state.id,  
        email: state.email
    }    
}

export default connect(mapStateToProps, {saveUserInfo, updateEmail})(UserCard);