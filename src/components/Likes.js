import React from "react"
import { connect } from "react-redux"
import Like from "./Like";
import SuggestionsBtn from './SuggestionsBtn'

const Likes = props => {
    return (
        <div className="likes">
            <div id='favoritesTitle'>
            <h2 id='like-header-grn'>
                Your liked songs:
            </h2>
            <SuggestionsBtn />
            </div>
            <div className="imported-likes-ax">
                {/* Map over Liked Songs here */}
                {
                    !props.hasLikedSongs ? (
                       <p id="likeSomeSongs">Like some songs!</p>
                    ) : (props.likes.map(song => {
                        return (

                            <Like
                                key={song.id}
                                id={song.id}
                                name={song.name}
                                album={song.album.name}
                                artist={song.artists[0].name}
                                image={song.album.images[0].url}
                                song={song}
                            />
                        )

                    }))
                }


            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        likes: state.likedSongs,
        hasLikedSongs: state.hasLikedSongs,
    }
}

export default connect(mapStateToProps, {})(Likes);