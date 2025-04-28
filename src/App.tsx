import styles from './App.module.css';

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ChargerList from './components/ChargerList/ChargerList';
import AddChargerForm from './components/AddChargerForm/AddChargerForm';
import { ChargerStatesEnum, localStorageItemName } from './common/constants';
import { Charger } from './Models/Charger';

// Initial data load from localStorage or set an empty array
const loadChargerData = (): Charger[] => {
  const storedData = localStorage.getItem(localStorageItemName);
  return storedData ? JSON.parse(storedData) as Charger[] : [];
};

function App() {
  const [chargers, setChargers] = useState(loadChargerData());


  const saveChargerData = (chargers: Charger[]) => {
    localStorage.setItem(localStorageItemName, JSON.stringify(chargers));
  };

  // Save chargers data to localStorage whenever it changes
  useEffect(() => {
    saveChargerData(chargers);
  }, [chargers]);

  // Add a new charger
  const addCharger = (chargerName: string) => {
    const newCharger = {
      id: uuidv4(),
      name: chargerName,
      state: ChargerStatesEnum.OFFLINE
    };
    setChargers([...chargers, newCharger]);
  };

  // Remove a charger
  const removeCharger = (id: string) => {
    setChargers(chargers.filter(charger => charger.id !== id));
  };

  // Change state of a charger
  const changeChargerState = (id: string, newState: ChargerStatesEnum) => {
    setChargers(
      chargers.map((charger) =>
        charger.id === id ? { ...charger, state: newState } : charger
      )
    );
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>EV Charger Simulator</h1>
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
