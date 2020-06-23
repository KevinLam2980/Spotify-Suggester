import React, {useState} from "react"
import {useHistory} from "react-router-dom"


const UserCard = props => {
    const [user, setUser] = useState({
        username: '',
        followers: '',
        user_img: '',
        profile_link: ''
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
    }

    return (
        <div className="user-card-d">
           <img src={user.user_img} href="you" id="user-img-cnt" />
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

        <h2>Followers: 33</h2>
        <a href={user.profile_link}>Profile</a>
        
        </div>
    )
}


export default UserCard;