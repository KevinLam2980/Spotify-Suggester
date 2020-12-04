import React from "react"
import { connect } from "react-redux";
import { addToLikes } from "../actions/index"


const Song = props => {

    return (
        <div className="song" onClick={() => props.addToLikes(props.song)}>
            <img src={props.image} alt="album art" />
            <div className="songInfo">
                <h4>{props.name}</h4>
                <p>{props.artist}</p>
                <p>{props.album}</p>
            </div>
            <button
            className="likeBTN"
            >Like</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user_id: state.id,
        likedSongs: state.likedSongs
    }
}

export default connect(mapStateToProps, { addToLikes })(Song);