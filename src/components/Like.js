import React from "react"
import { connect } from "react-redux";
import { removeLike } from "../actions/index"

const Like = props => {
    return (
        <div className="like" onClick={() => props.removeLike(props.song)}>
            <img src={props.image} alt="album art" />
            <div className="likeInfo">
                <h4>{props.name}</h4>
                <p>{props.artist}</p>
                <p>{props.album}</p> 
            </div>
                <button 
            className="removeLike"
            >x</button>
       
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user_id: state.id,
        likedSongs: state.likedSongs
    }
}

export default connect(mapStateToProps, { removeLike })(Like);