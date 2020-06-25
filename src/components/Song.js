import React from "react"


const Song = props => {
    return (
        <div className="song">
            <img src={props.image} alt="album art" />
            <h4>{props.name}</h4>
            <p>{props.artist}</p>
            <p>{props.album}</p>
            <button>Like</button>
        </div>
    )
}

export default Song;