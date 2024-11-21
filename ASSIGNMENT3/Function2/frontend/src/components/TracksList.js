import React from 'react';

const TracksList = ({ tracks }) => {
  return (
    <div>
      <h3>Tracks</h3>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            {track.track_number}. {track.title} ({track.duration})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TracksList;