import React from "react"

const Suggestion = props => {
    return (
        <div className="suggestion">
            <img src={props.album_image} alt="Song Art" />
            <div className="suggestionInfo">
                <h3>{props.song_name}</h3>
                <p>{props.artists}</p> 
                <p>{props.album}</p> 
            </div>
          
        </div>
    )
}

export default Suggestion;