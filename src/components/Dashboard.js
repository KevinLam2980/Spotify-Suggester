import React, { useEffect } from "react"
import Search from "./Search"
import Likes from "./Likes"
import Suggestions from "./Suggestions"
import SongList from "./SongList"
import NavBar from './NavBar'
import SearchSection from './SearchSection'

import { connect } from "react-redux"
import { setSongs } from "../actions/index";
import { addToSuggestions } from "../actions/index"



const Dashboard = props => {
  // useEffect(() => {
  //   axios.get("https://spotify-suggestions-backend.herokuapp.com/spotify/tracks")
  //     .then(response => {
  //       props.setSongs(response.data)
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }, []);


  return (
    <div id="dashboard">
      <NavBar/>
      <div id="dashboardContent">
      <SearchSection/>
        <Likes />
       
        <Suggestions />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    id: state.id,
    songList: state.songList,
    likedSongs: state.likedSongs
  }
}
export default connect(mapStateToProps, { setSongs, addToSuggestions })(Dashboard);



