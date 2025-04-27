import './App.css';

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ChargerList from './components/ChargerList';
import AddChargerForm from './components/AddChargerForm';
import { ChargerStatesEnum, localStorageItemName } from './common/constants';

// Initial data load from localStorage or set an empty array
const loadChargerData = () => {
  const storedData = localStorage.getItem(localStorageItemName);
  // console.log("Stored Data", storedData);
  return storedData ? JSON.parse(storedData) : [];
};

function App() {
  const [chargers, setChargers] = useState(loadChargerData());

  // Save chargers data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(localStorageItemName, JSON.stringify(chargers));
    // console.log('Chargers data saved to localStorage', localStorange.getItem('chargers));
  }, [chargers]);

  // Add a new charger
  const addCharger = (chargerName) => {
    const newCharger = {
      id: uuidv4(),
      name: chargerName,
      state: ChargerStatesEnum.OFFLINE
    };
    setChargers([...chargers, newCharger]);
    // console.log('New charger added:', newCharger);
  };

  // Remove a charger
  const removeCharger = (id) => {
    setChargers(chargers.filter(charger => charger.id !== id));
    // console.log(`Charger with ID ${id} removed: ${chargers}`);
  };

  // Change state of a charger
  const changeChargerState = (id, newState) => {
    setChargers(
      chargers.map((charger) =>
        charger.id === id ? { ...charger, state: newState } : charger
      )
    );
    // console.log(`Charger ID ${id} state changed to ${newState}, \n Chargers: ${chargers}`);
  };

  return (
    <div>
      <h1>EV Charger Simulator</h1>
      <AddChargerForm addCharger={addCharger} />
      <ChargerList
        chargers={chargers}
        removeCharger={removeCharger}
        changeChargerState={changeChargerState}
      />
    </div>
  );
}

export default App;
