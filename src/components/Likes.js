import React from "react"


const Likes = props => {
    return (
        <div className="likes">
            <h2 id='like-header-grn'>
                Likes:
            </h2>
            <div className="imported-likes-ax">
                {/* Map over Liked Songs here */}
                <h2> Liked song</h2>
                <h2> Liked song</h2>
                <h2> Liked song</h2>
                <h2> Liked song</h2>
                
            </div>
        </div>
    )
}


export default Likes;