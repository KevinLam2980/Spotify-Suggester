import React from 'react'
import Search from "./Search"
import SongList from "./SongList"

const SearchSection = () => {
    return (
        <div id="searchSection">
            <Search/>
            <SongList />
        </div>

    )
}

export default SearchSection