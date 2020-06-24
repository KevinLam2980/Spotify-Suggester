import React from "react"


import {connect} from "react-redux"

const Suggestions = props => {
    return (
        <div className="suggestions">
            <h2 className="suggestions-header-grn">
                Suggestions:
            </h2>
                <div className="suggestions-render-ax">
                    <h2>Suggestion</h2>
                    <h2>Suggestion</h2>
                    <h2>Suggestion</h2>
                    <h2>Suggestion</h2>
                </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
     suggestions: state.suggestedSongs,   
    }
}

export default connect(mapStateToProps, {})(Suggestions);