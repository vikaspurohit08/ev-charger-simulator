

import React from 'react';
import { ChargerStatesEnum } from '../common/constants';

function ChargerItem(props) {
    // console.log(JSON.stringify(props));
    
    function changeState (updatedState) {
        props.changeChargerState(props?.charger?.id, updatedState)
    }


  return (
    <li>
      <span>{props?.charger?.name} ({props?.charger?.state})</span>
      <button onClick={() => changeState(ChargerStatesEnum.ONLINE)}>Turn On</button>
      <button onClick={() => changeState(ChargerStatesEnum.CHARGING)}>Start Charging</button>
      <button onClick={() => changeState(ChargerStatesEnum.READY)}>Stop Charging</button>
      <button onClick={() => changeState(ChargerStatesEnum.FAULT)}>Simulate Fault</button>
      <button onClick={() => props.removeCharger(props?.charger?.id)}>Remove</button>
    </li>
  );
}

export default ChargerItem;