export const intialState = {
    username: "",
    likedSongs: [],
    isFethcingData: false,
    errorMessage: "",

}





export const spotifyReducer = (state = intialState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}