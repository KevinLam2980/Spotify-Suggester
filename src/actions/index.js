import axios from 'axios'

import axiosWithAuth from "../util/axiosWithAuth"

export const INIT_LOAD = "INIT_LOAD";
export const SHOW_LIKED = "SHOW_LIKED";
export const CALL_ERROR = "CALL_ERROR";

export const LIKE_SONG = "LIKE_SONG";
export const UNLIKE_SONG = "UNLIKE_SONG";

export const UPDATE_USER = "UPDATE_USER";

export const GET_ID = "GET_ID";


export const getSongs = () => dispatch => {
    dispatch({type: "INIT_LOAD"})
    axios
    .get("")
    .then( res => {
        console.log(res)
        dispatch({type: "SHOW_LIKED", payload: res.data})
        dispatch({type: "GET_ID", payload:res.data})
    })
    .catch(err => {
        console.log("An error happened with the getSongs call: ", err)
        dispatch({type:"CALL_ERROR", payload: err})
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


