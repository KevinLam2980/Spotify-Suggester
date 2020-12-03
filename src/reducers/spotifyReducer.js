import {REMOVE_LIKE,
    SET_SONGS,
    SET_SUGGESTIONS,
    CALL_ERROR,
    LIKE_SONG,
    UPDATE_USER,
    ID,
    SAVE_USER,
    UPDATE_EMAIL,
    START_SEARCH,
    LOAD_SUGGESTIONS
} from '../actions'

export const intialState = {
    email: "",
    id: "",
    likedSongs: [],
    suggestedSongs: [],
    songList: [],
    errorMessage: "",
    searchLoading: false,
    suggestionsLoading: false
};

export const spotifyReducer = (state = intialState, action) => {
    switch (action.type) {
        case ID: {
            return {
                ...state,
                email: action.payload.email,
                id: action.payload.id,
                likedSongs: [],
                suggestedSongs: [],
                songList: [],
                errorMessage: "",
            }
        }
        case SAVE_USER:
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email
            }
        case START_SEARCH:
            return {
                ...state,
                searchLoading: true
            }
        case SET_SONGS:
            return {
                ...state,
                songList: action.payload,
                searchLoading: false
            };
        case UPDATE_USER:
            return {
                ...state,
                email: action.payload
            };
        case LIKE_SONG:
            return {
                ...state,
                songList: state.songList.filter(song => song.id !== action.payload.id),
                likedSongs: [...state.likedSongs, action.payload],
            }
        case LOAD_SUGGESTIONS :
            return {
                ...state,
                suggestionsLoading: true
            }
        case SET_SUGGESTIONS : 
            return{
                ...state,
                suggestedSongs: action.payload,
                suggestionsLoading: false
            }
        case REMOVE_LIKE : 
            return {
                ...state,
                songList: [ action.payload, ...state.songList],
                likedSongs: state.likedSongs.filter(song => song.id !== action.payload.id)
            }
        case UPDATE_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        default:
            return state;
    };
};