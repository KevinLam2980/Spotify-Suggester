import React from "react"
import {connect} from "react-redux"

import Song from "./Song"

const SongList = props => {
    return (
        <div className="render-songs-cnt">
            {/* Map over props.songList here and render a 
            "Song" component on every iteration
            passing props into the component.
            */}
            { 
                props.songs.map(song => {
                    return <Song key={song.id} artistName={song.artistName} />
                })
            }
        </div>

    )
}


const mapStateToProps = state => {
    return {
     songs: state.songList,   
    }
}

export default connect(mapStateToProps, {})(SongList);