export const intialState = {
    email: "",
    id:"",
    likedSongs: [],
    suggestedSongs: [],
    songList: [
        {
            id: 0,
            songName: "hasd",
            artistName: "asdasd"
        },
        {
            id: 0,
            songName: "hasd",
            artistName: "asdasd"
        },
        {
            id: 0,
            songName: "hasd",
            artistName: "asdasd"
        },
    ],
    isFethcingData: false,
    errorMessage: "",

};

export const spotifyReducer = (state = intialState, action) =>{
    switch(action.type) {
        case 'GET_ID' : 
        return{
                ...state,
                isFethcingData: true,
            }
        case 'ID' : {
            return {
                ...state,
                email:"",
                id: action.payload,
                likedSongs: [],
                suggestedSongs: [],
                songList: [
                    {
                        id: 0,
                        songName: "hasd",
                        artistName: "asdasd"
                    }
                ],
                isFethcingData: false,
                errorMessage: "",
            }
        }
        case "INIT_LOAD" :
            return {
                ...state,
                isFethcingData: true,
                id: action.payload
            };
        case "SHOW_LIKED":
            return {
                ...state,
                isFethcingData: false,
                likedSongs: action.payload
            };
        
        case "SHOW_SONGLIST" :
            return {
                ...state,
                isFethcingData: false,
                songList: action.payload
            };
        case 'UPDATE_USER' :
            
            return {
                ...state,
                email:action.payload
            };
        default: 
            return state;
    };
};