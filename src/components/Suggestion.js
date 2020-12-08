import React from "react"

const Suggestion = props => {
    return (
        <a className="songLink" href={`https://open.spotify.com/track/${props.id}`} target="_blank" rel="noopener noreferrer" alt="Spotify song link">
        <div className="suggestion">
            <img src={props.album_image} alt="Song Art" />
            <div className="suggestionInfo">
                <h3>{props.song_name}</h3>
                <p>{props.artists}</p> 
                <p>{props.album}</p> 
            </div>
        </div>
        </a>
    )
}

export default Suggestion;