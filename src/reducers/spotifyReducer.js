export const intialState = {
    email: "",
    user_id:"",
    likedSongs: [],
    suggestedSongs: [],
    songList: [],
    isFethcingData: false,
    errorMessage: "",

}

export const spotifyReducer = (state = intialState, action) =>{
    switch(action.type) {
        case "INIT_LOAD" :
            return {
                ...state,
                isFethcingData: true,
            }
        case "SHOW_LIKED":
            return {
                ...state,
                isFethcingData: false,
                likedSongs: action.payload
            }
        case 'UPDATE_USER' :
            return {
                ...state,
                email:action.payload
            }
        case 'GET_ID' : 
            return{
                ...state,
                user_id: action.payload
            }
        default: 
            return state;
    }
}