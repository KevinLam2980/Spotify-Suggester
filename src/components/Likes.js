import React from "react"
import { connect } from "react-redux"
import SuggestionsBtn from './SuggestionsBtn'
import Song from './Song'

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
                    props.likes.length === 0 ? (
                       <p id="likeSomeSongs">Like some songs and click 'Get Suggestions' to see a curated list of songs that are similar in accousticness, danceability, energy, instrumentalness, liveness, loudness, speechiness, tempo, and valence!</p>
                    ) : (props.likes.map(song => {
                        return (
                            <Song
                                key={song.id}
                                id={song.id}
                                name={song.name}
                                album={song.album.name}
                                artist={song.artists[0].name}
                                image={song.album.images[0].url}
                                song={song}
                                like={true}
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
    }
}

export default connect(mapStateToProps, {})(Likes);