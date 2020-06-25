import React from "react"
import {connect} from "react-redux"

import Song from "./Song"

const SongList = props => {
    return (
        <div className="render-songs-cnt">
            
        {/* If isFethcingData = falsey 
        then we go ahead and map over songsList,
        but if isfetchingdata is true, we display a string 
        that says 'Search for songs!' */}
           
            { 
                props.isFethcingData ? (
                    'Search for something!'
                ) : ( props.songList.map(song => {
                    return (
                        <div className="song">
                            <img src={song.albumArt} alt="Album Art" />
                            <h4>{song.songName}</h4>
                            <p>{song.artistName}</p>
                            <button>Like</button>
                        </div>
                    )
                }) 
                )
                    
            }
        </div>

    )
}


const mapStateToProps = state => {
    return {
     songList: state.songList,   
     isFethcingData: state.isFethcingData
    }
}

export default connect(mapStateToProps, {})(SongList);