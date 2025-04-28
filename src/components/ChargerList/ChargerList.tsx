import React from 'react';
import ChargerItem from '../ChargerItem/ChargerItem';
import { ChargerListProps } from '../../Models/Charger';
import styles from './ChargerList.module.css';

const ChargerList: React.FC<ChargerListProps> = (props) => {
  const { chargers, removeCharger, changeChargerState } = props;

  const ifNoChargerExists = <div className={styles.emptyState}>No chargers available. Please add a charger.</div>

  return (
    <div className={styles.listContainer}>
      <h2>Charger List</h2>
      <section aria-label="List of EV Chargers">
        {chargers.length === 0 ? ifNoChargerExists : (<ul>
          {chargers.map((charger) => (
            <ChargerItem
              key={charger.id}
              charger={charger}
              removeCharger={removeCharger}
              changeChargerState={changeChargerState}
            />
          ))}
        </ul>)}
      </section>
    </div>
  );
}

export default ChargerList;