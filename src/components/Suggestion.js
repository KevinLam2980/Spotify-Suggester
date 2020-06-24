import React from "react"

const Suggestion = props => {
    return (
        <div className="suggestion">
            <img src={props.songArt} alt="Song Art" />
            <h3>{props.songName}</h3>
            <p>{props.artistName}</p>
        </div>
    )
}

export default Suggestion;