import React, { useState } from 'react';
import MusicianQueryForm from './components/MusicianQueryForm';
import MusicianResults from './components/MusicianResults';
import TracksList from './components/TracksList';
import './styles.css';

function App() {
  const [musicianData, setMusicianData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [tracksData, setTracksData] = useState(null);

  const searchMusician = async (name) => {
    try {
      const response = await fetch(`/api/musicians?name=${encodeURIComponent(name)}`);
      const data = await response.json();

      if (data && data.id) {
        setMusicianData(data);
        setErrorMessage('');
        setTracksData(null);
      } else {
        setMusicianData(null);
        setErrorMessage(`No musician is found with the name ${name}.`);
        setTracksData(null);
      }
    } catch (error) {
      console.error('Error fetching musician data:', error);
      setErrorMessage('An error occurred while fetching data.');
      setMusicianData(null);
      setTracksData(null);
    }
  };

  const handleAlbumClick = async (albumId) => {
    try {
      const response = await fetch(`/api/albums/${albumId}/tracks`);
      const data = await response.json();
      setTracksData(data.tracks);
    } catch (error) {
      console.error('Error fetching tracks:', error);
    }
  };

  return (
    <div>
      <h1>Musician Album Query</h1>
      <MusicianQueryForm onSearch={searchMusician} />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {musicianData && (
        <MusicianResults musician={musicianData} onAlbumClick={handleAlbumClick} />
      )}
      {tracksData && <TracksList tracks={tracksData} />}
    </div>
  );
}

export default App;
