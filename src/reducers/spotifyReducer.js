import albumArt from "../assets/albumArt.jpg"
import { useState } from "react";

export const intialState = {
    id: "",
    likedSongs: [],
    suggestedSongs: [{
        "recommended_song_id_list": [
            {
                "acousticness": 0.228,
                "album_image": "https://i.scdn.co/image/ab67616d0000b2736d5d2d5364c9ba375163e5ea",
                "artists": [
                    "Chorus"
                ],
                "danceability": 0.684,
                "energy": 0.746,
                "instrumentalness": 0,
                "liveness": 0.196,
                "loudness": -5.847,
                "song_id": "3nGNIiz4PTsZ7cRhNNuSd2",
                "song_name": "Swami Samartha Majhe Aai",
                "speechiness": 0.0448,
                "tempo": 107.854,
                "valence": 0.745
            },
            {
                "acousticness": 0.0695,
                "album_image": "https://i.scdn.co/image/ab67616d0000b273ef7d21b6670eb2bad94301d6",
                "artists": [
                    "Henri Salvador"
                ],
                "danceability": 0.425,
                "energy": 0.459,
                "instrumentalness": 0,
                "liveness": 0.21,
                "loudness": -6.648,
                "song_id": "25kL0XVBAcUR3Bc5iihs55",
                "song_name": "Adieu adios",
                "speechiness": 0.0326,
                "tempo": 108.288,
                "valence": 0.459
            }
        ]
    }],
    songList: [],
    isFethcingData: false,
    errorMessage: "",
    hasLikedSongs: false

};

export const spotifyReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'GET_ID':
            return {
                ...state,
                isFethcingData: true,
                hasLikedSongs: false
            }
        case 'ID': {
            return {
                ...state,
                email: "",
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
        case "INIT_LOAD":
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

        case "SET_SONGS":
            return {
                ...state,
                isFethcingData: true,
                songList: action.payload
            };
        case 'UPDATE_USER':

            return {
                ...state,
                email: action.payload
            };
        case "LIKE_SONG":
            return {
                ...state,
                songList: state.songList.filter(song => song.id !== action.payload.id),
                likedSongs: [action.payload],
                hasLikedSongs: true
            }
        default:
            return state;
    };
};