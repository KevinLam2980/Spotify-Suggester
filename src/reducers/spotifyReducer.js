import albumArt from "../assets/albumArt.jpg"

export const intialState = {
    id:"",
    likedSongs: [],
    suggestedSongs: [],
    songList: [
        {
            id: 0,
            albumArt: albumArt,
            songName: "Song Name",
            artistName: "Artist Name",
        },
        {
            id: 2,
            albumArt: albumArt,
            songName: "Song Name",
            artistName: "Artist Name",
        },
        {
            id: 3,
            albumArt: albumArt,
            songName: "Song Name",
            artistName: "Artist Name",
        },
        {
            id: 4,
            albumArt: albumArt,
            songName: "Song Name",
            artistName: "Artist Name",
        },
        {
            id: 5,
            albumArt: albumArt,
            songName: "Song Name",
            artistName: "Artist Name",
        },
        {
            id: 6,
            albumArt: albumArt,
            songName: "Song Name",
            artistName: "Artist Name",
        },
        {
            id: 7,
            albumArt: albumArt,
            songName: "Song Name",
            artistName: "Artist Name",
        },
        {
            id: 8,
            albumArt: albumArt,
            songName: "Song Name",
            artistName: "Artist Name",
        },
        {
            id: 9,
            albumArt: albumArt,
            songName: "Song Name",
            artistName: "Artist Name",
        },
        {
            id: 10,
            albumArt: albumArt,
            songName: "Song Name",
            artistName: "Artist Name",
        },
        {
            id: 11,
            albumArt: albumArt,
            songName: "Song Name",
            artistName: "Artist Name",
        },
        {
            id: 12,
            albumArt: albumArt,
            songName: "Song Name",
            artistName: "Artist Name",
        },
        {
            id: 13,
            albumArt: albumArt,
            songName: "Song Name",
            artistName: "Artist Name",
        },
        {
            id: 14,
            albumArt: albumArt,
            songName: "Song Name",
            artistName: "Artist Name",
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