import React, { useState } from 'react';

const MusicianQueryForm = ({ onSearch }) => {
  const [musicianName, setMusicianName] = useState('');

  const handleInputChange = (e) => {
    setMusicianName(e.target.value);
  };

  const validateInput = (name) => {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInput(musicianName)) {
      onSearch(musicianName.trim());
    } else {
      alert('Please enter alphabetic characters only.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Musician Name:
        <input
          type="text"
          value={musicianName}
          onChange={handleInputChange}
          placeholder="e.g., Taylor Swift"
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default MusicianQueryForm;