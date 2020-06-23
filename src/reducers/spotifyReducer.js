export const intialState = {
    username: "",
    likedSongs: [],
    user_id:"",
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
        default: 
            return state;
    }
}