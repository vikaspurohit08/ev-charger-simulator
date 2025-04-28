import React, { useState } from 'react';
import { AddChargerProps } from '../../Models/Charger';
import styles from './AddChargerForm.module.css';

const AddChargerForm: React.FC<AddChargerProps> = (props) => {
  const [chargerName, setChargerName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chargerName) {
      props.addCharger(chargerName);
      setChargerName('');
    } else {
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit} aria-label='Add Charger Form'>
      <label htmlFor="addChargerInput">
      Charger Name:
      </label>
        <input
          className={styles.inputField}
          id='addChargerInput'
          name='addCharger'
          type="text"
          value={chargerName}
          onChange={(e) => setChargerName(e.target.value)}
          // aria-required="true"
        />
      <button className={styles.addButton} type="submit">Add Charger</button>
    </form>
  );
}

export default AddChargerForm;
