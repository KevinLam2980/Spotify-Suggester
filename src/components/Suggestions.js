import React from "react"


import {connect} from "react-redux"

const Suggestions = props => {
    return (
        <div className="suggestions">
            <h2 className="suggestions-header-grn">
                Suggestions:
            </h2>
                <div className="suggestions-render-ax">
                    {
                        props.suggestions.map(suggestion => {
                            // Return a suggestion component (we need to make this component)   
                        })
                    }
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