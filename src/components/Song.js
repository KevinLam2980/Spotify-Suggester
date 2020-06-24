import React from "react"


const Song = props => {
    return (
        <div className="song">
            {/* <img src={props.songArt} alt="Song Art" /> */}
            <h3>{props.songName}</h3>
            <p>{props.artistName}</p>
        </div>
    )
}

export default Song;