import axios from 'axios'


export const INIT_LOAD = "INIT_LOAD";
export const SHOW_LIKED = "SHOW_LIKED";
export const CALL_ERROR = "CALL_ERROR";

export const getSongs = () => dispatch => {
    dispatch({type: "INIT_LOAD"})
    axios
    .get("")
    .then( res => {
        console.log(res)
        dispatch({type: "SHOW_LIKED", payload: res.data})
    })
    .catch(err => {
        console.log("An error happened with the getSongs call: ", err)
        dispatch({type:"CALL_ERROR", payload: err})
    })

}