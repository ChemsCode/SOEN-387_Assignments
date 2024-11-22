import React from 'react';

const MusicianResults = ({ musician, onAlbumClick }) => {
  return (
    <div>
      <h2>{musician.name}'s Albums</h2>
      <ul>
        {musician.albums.map((album) => (
          <li key={album.id}>
            <button onClick={() => onAlbumClick(album.id)}>
              {album.title} ({album.release_year})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicianResults;