import React from 'react';
import ChargerItem from './ChargerItem';

function ChargerList(props) {
  return (
    <div>
      <h2>Charger List</h2>
      <ul>
        {props.chargers.map((charger) => (
          <ChargerItem
            key={charger.id}
            charger={charger}
            removeCharger={props.removeCharger}
            changeChargerState={props.changeChargerState}
          />
        ))}
      </ul>
    </div>
  );
}

export default ChargerList;