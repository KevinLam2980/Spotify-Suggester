import axios from 'axios';
import { useHistory } from "react-router-dom";

import axiosWithAuth from "../util/axiosWithAuth";

export const INIT_LOAD = "INIT_LOAD";
export const SHOW_LIKED = "SHOW_LIKED";
export const CALL_ERROR = "CALL_ERROR";

export const LIKE_SONG = "LIKE_SONG";
export const UNLIKE_SONG = "UNLIKE_SONG";

export const UPDATE_USER = "UPDATE_USER";

export const GET_ID = "GET_ID";





export const loginCall = existingUser => dispatch => {
    const {push} = useHistory();
         axios
            .post("https://spotify-suggestions-backend.herokuapp.com/auth/login", existingUser)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                console.log(response)
                dispatch({type: 'GET_ID', payload: response.data.id})  
                push("/dashboard");
            })
            .catch(error => {
               dispatch({type: 'CALL_ERROR', payload: error})
            })
}


export const updateUser = updatedUser => dispatch => {
    axiosWithAuth()
    .put(``)
    .then(res =>{
        console.log(res)
       dispatch({type: "UPDATE_USER", payload: res.data})
    })
    .catch(err =>{
       dispatch({type: 'CALL_ERROR', payload: err})
    })
}




