import React from 'react'
import { connect } from "react-redux"
import { setSongs } from "../actions/index";
import { addToSuggestions, loadingSuggestions } from "../actions/index"
import axios from "axios";

const SuggestionBtn = props => {

  const getSuggestions = () => {
    props.loadingSuggestions()
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
     axios.post(proxyurl + 'https://whispering-refuge-19940.herokuapp.com/prediction',
        {
       "song_id_list":
         props.likedSongs.map(song => {
         return song.id
       }),
       "recommendation_count": 15
       })
       .then(response => {
         props.addToSuggestions(response.data.recommended_song_id_list)
       })
       .catch(err => {
         console.error(err)
       })

 }

    return (
        <span>
        { props.likedSongs.length > 0 ?
            <button id="getSuggestionsBTN" onClick={getSuggestions}>Get Suggestions</button> : null
          }
        </span>
    )
}

const mapStateToProps = state => {
    return {
      likedSongs: state.likedSongs
    }
  }
  export default connect(mapStateToProps, { setSongs, addToSuggestions, loadingSuggestions })(SuggestionBtn);