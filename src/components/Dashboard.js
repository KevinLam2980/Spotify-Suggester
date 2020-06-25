import React, { useEffect } from "react"



import Search from "./Search"
import Likes from "./Likes"
import Suggestions from "./Suggestions"
import SongList from "./SongList"

import { connect } from "react-redux"
import { setSongs } from "../actions/index";

import spotifylogo from "../assets/spotifylogo.png"
import axios from "axios";


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
    <>
      <header className="nav-search">
        <img src={spotifylogo} alt="" id="logo" />
        <div className="search-container">
          <div className="search-fnc">
            <Search />
          </div>
        </div>
      </header>

      <div className="rendered-songs">
        <SongList />
      </div>

      <div className="likes-container">
        <Likes />
      </div>

      <div className="suggestions-container">
        <Suggestions />
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    id: state.id,
    songList: state.songList
  }
}
export default connect(mapStateToProps, { setSongs })(Dashboard);



