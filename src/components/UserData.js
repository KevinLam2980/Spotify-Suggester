import React from 'react';

function UserData() {
  return (
    <div className='userData-container'>
      <div className='data-split-container'>
        <div className='song-list-container'>User's Liked Songs</div>
        <div className='song-list-container'>Suggested Songs</div>
      </div>
      <div className='mood-filters-container'>
        <div className='mood-filter'>mood</div>
        <div className='mood-filter'>filters</div>
        <div className='mood-filter'>go</div>
        <div className='mood-filter'>here</div>
      </div>
    </div>
  );
}

export default UserData;
