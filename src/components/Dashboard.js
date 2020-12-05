import React, { useEffect } from "react"
import Likes from "./Likes"
import Suggestions from "./Suggestions"
import NavBar from './NavBar'
import SearchSection from './SearchSection'

import { connect } from "react-redux"
import { addToSuggestions, saveUserInfo, setSongs } from "../actions/index"



const Dashboard = props => {
  const { saveUserInfo } = props

  useEffect(() => {
    let userID = localStorage.getItem("id")
    let userEmail = localStorage.getItem("email")
    saveUserInfo({
      id: userID,
      email: userEmail
    })
  }, [saveUserInfo])

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
export default connect(mapStateToProps, { setSongs, addToSuggestions, saveUserInfo })(Dashboard);



