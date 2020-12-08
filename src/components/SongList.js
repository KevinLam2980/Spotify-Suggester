import React from "react"
import { connect } from "react-redux"
import Loader from 'react-loader-spinner'

import Song from "./Song"

const SongList = props => {
    return (
        <div className="render-songs-cnt">
            {   
                props.searchLoading && props.songList.length === 0 ? 
                <Loader
                className="loader"
                type="Audio"
                color="#1DB954"
                height={100}
                width={100}
                timeout={5000} //5 secs
              /> :
                props.songList.length === 0 ? (
                    <p id="searchForASong">Search for a song! Your results will populate here.</p>
                ) : (props.songList.map(song => {
                    return (
                        <Song
                            key={song.id}
                            id={song.id}
                            name={song.name}
                            album={song.album.name}
                            artist={song.artists[0].name}
                            image={song.album.images[0].url}
                            song={song}
                            like={false}
                        />
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
        searchLoading: state.searchLoading
    }
}

export default connect(mapStateToProps, {})(SongList);