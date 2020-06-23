export const intialState = {
    username: "",
    likedSongs: [],
    user_id:"",
    isFethcingData: false,
    errorMessage: "",

}





export const spotifyReducer = (state = intialState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}