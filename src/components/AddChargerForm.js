import React, { useState } from 'react';

function AddChargerForm({ addCharger }) {
  const [chargerName, setChargerName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (chargerName) {
      addCharger(chargerName);
      setChargerName(''); // Clear input after adding
      // console.log('Charger name:', chargerName);
    } else {
      // console.log('Charger name is required');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Charger Name:
        <input
          type="text"
          value={chargerName}
          onChange={(e) => setChargerName(e.target.value)}
        />
      </label>
      <button type="submit">Add Charger</button>
    </form>
  );
}

export default AddChargerForm;
