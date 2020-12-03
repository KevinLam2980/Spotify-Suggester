import axios from 'axios';

export const START_SEARCH = "START_SEARCH"
export const SET_SONGS = "SET_SONGS";

export const LOAD_SUGGESTIONS = "LOAD_SUGGESTIONS"
export const SET_SUGGESTIONS = "SET_SUGGESTIONS"

export const SHOW_LIKED = "SHOW_LIKED";
export const CALL_ERROR = "CALL_ERROR";

export const LIKE_SONG = "LIKE_SONG";
export const REMOVE_LIKE = "REMOVE_LIKE"

export const UPDATE_USER = "UPDATE_USER";

export const GET_ID = "GET_ID";
export const ID = "ID"

export const SAVE_USER = "SAVE_USER"
export const UPDATE_EMAIL = "UPDATE_EMAIL"




export const loginCall = response => dispatch => {
    dispatch({ type: ID, payload: response })
}

export const errorCall = response => dispatch => {
    dispatch({ type: CALL_ERROR, payload: response })
}

export const setSongs = songList => dispatch => {
    dispatch({ type: SET_SONGS, payload: songList })
}

export const addToLikes = song => dispatch => {
    dispatch({ type: LIKE_SONG, payload: song })
}


export const addToSuggestions = suggestions => dispatch => {
    dispatch({type: SET_SUGGESTIONS, payload: suggestions})
}

export const removeLike = song => dispatch => {
    dispatch({ type: REMOVE_LIKE, payload: song })
}

export const saveUserInfo = userInfo => dispatch => {
    dispatch({ type: SAVE_USER, payload: userInfo})
}

export const updateEmail = email => dispatch => {
    dispatch({ type: UPDATE_EMAIL, payload: email})
}

export const startSearch = () => dispatch => {
    dispatch({ type: START_SEARCH})
}

export const loadingSuggestions = () => dispatch => {
    dispatch({ type: LOAD_SUGGESTIONS})
}