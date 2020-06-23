import React from "react"
import {useHistory} from "react-router-dom"

const SignIn = props => {
   const {push} = useHistory();
   
    const signin = e => {
        push("/dashboard")
    }

    return (
        <div className="signin-div">
        
        <h2>Sign In with Spotify!</h2>
        
        <button className="signin" onClick={signin}>Sign In</button>

        </div>
    )
}


export default SignIn;