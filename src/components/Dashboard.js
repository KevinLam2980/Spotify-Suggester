import React from "react"



import Search from "./Search"
import Likes from "./Likes"
import Suggestions from "./Suggestions"


import spotifylogo from "../assets/spotifylogo.png" 


const Dashboard = props => {
    return (
      <>
      <header className="nav-search">
            <img src={spotifylogo} alt ="" id="logo"/>
           <div className="search-container">
             <div className="search-fnc">
                <Search />
             </div> 
           </div>
        </header>

        <div className="rendered-songs">
        
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






export default Dashboard;