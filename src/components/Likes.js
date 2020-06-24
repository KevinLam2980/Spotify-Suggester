import React from "react"
import {connect} from "react-redux"

const Likes = props => {
    return (
        <div className="likes">
            <h2 id='like-header-grn'>
                Likes:
            </h2>
            <div className="imported-likes-ax">
                {/* Map over Liked Songs here */}
                
                {
                    props.likes.map(like => {
                        
                    })
                }
                
                
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
     likes: state.likedSongs,
     isFetchingData: state.isFetchingData,
    }
}

export default connect(mapStateToProps, {})(Likes);