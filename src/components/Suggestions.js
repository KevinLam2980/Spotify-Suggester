import React from "react"
import { connect } from "react-redux"
import Suggestion from './Suggestion'
import Loader from 'react-loader-spinner'

const Suggestions = props => {
    return (
        <div className="suggestions">
            <div id="suggestionsTitle">
            <h2 className="suggestions-header-grn">
                Suggestions:
            </h2>
            </div>
            <div className="suggestions-render-ax">
                {
                    props.suggestionsLoading ? 
                    <Loader
                    className="loader"
                    type="Audio"
                    color="#1DB954"
                    height={100}
                    width={100}
                    timeout={15000} //5 secs
                  /> :
                     (props.suggestions.map(suggestion => {
                        // Return a suggestion component (we need to make this component)   
                       return (
                        <Suggestion
                         key={suggestion.song_id}
                         id={suggestion.song_id} 
                         artists={suggestion.artists[0]}
                         album_image={suggestion.album_image}
                         song_name={suggestion.song_name}
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
        suggestions: state.suggestedSongs,
        suggestionsLoading: state.suggestionsLoading
    }
}

export default connect(mapStateToProps, {})(Suggestions);