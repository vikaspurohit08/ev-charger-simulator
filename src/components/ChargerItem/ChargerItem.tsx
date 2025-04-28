

import React from 'react';
import { ChargerStatesEnum } from '../../common/constants';
import { ChargerItemProps } from '../../Models/Charger';
import styles from './ChargerItem.module.css';

const ChargerItem: React.FC<ChargerItemProps> = (props) => {
  const { id, name, state } = props.charger;

  function changeState(updatedState: ChargerStatesEnum) {
    props.changeChargerState(props?.charger?.id, updatedState)
  }


  return (
    <li className={styles.chargerItem} aria-label={`Charger ${name}, currently ${state}`}>
      <span className={`${styles.chargerInfo} ${styles[state.toLowerCase()]}`} data-testid="charger-status">{name} ({state})</span>
      <div className={styles.actions}>
        <button
          className={styles.actionButton}
          onClick={() => changeState(ChargerStatesEnum.ONLINE)}
          disabled={state !== ChargerStatesEnum.OFFLINE}
          aria-label={`Turn On ${name}`}
        >Turn On
        </button>

        <button
          className={styles.actionButton}
          onClick={() => changeState(ChargerStatesEnum.CHARGING)}
          disabled={state !== ChargerStatesEnum.ONLINE && state !== ChargerStatesEnum.READY}
          aria-label={`Start Charging ${name}`}
        >Start Charging
        </button>

        <button
          className={styles.actionButton}
          onClick={() => changeState(ChargerStatesEnum.READY)}
          disabled={state !== ChargerStatesEnum.CHARGING}
          aria-label={`Stop Charging ${name}`}
        >Stop Charging
        </button>

        <button
          className={styles.actionButton}
          onClick={() => changeState(ChargerStatesEnum.FAULT)}
          disabled={state === ChargerStatesEnum.FAULT || state === ChargerStatesEnum.OFFLINE}
          aria-label={`Simulate Fault for ${name}`}
        >Simulate Fault
        </button>

        <button
          className={styles.actionButton}
          onClick={() => {
            if (window.confirm('Are you sure you want to remove this charger?')) {
              props.removeCharger(id);
            }
          }} aria-label={`Remove ${name}`}>Remove</button>
      </div>
    </li>
  );
}

export default ChargerItem;