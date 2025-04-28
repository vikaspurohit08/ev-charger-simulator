

import React from 'react';
import { ChargerStatesEnum } from '../common/constants';

function ChargerItem(props) {
    const { id, name, state } = props.charger;
    
    function changeState (updatedState) {
        props.changeChargerState(props?.charger?.id, updatedState)
    }


  return (
    <li>
      <span>{name} ({state})</span>
      <button onClick={() => changeState(ChargerStatesEnum.ONLINE)} disabled={state !== ChargerStatesEnum.OFFLINE}>Turn On</button>
      <button onClick={() => changeState(ChargerStatesEnum.CHARGING)} disabled={state !== ChargerStatesEnum.ONLINE && state !== ChargerStatesEnum.READY}>Start Charging</button>
      <button onClick={() => changeState(ChargerStatesEnum.READY)} disabled={state !== ChargerStatesEnum.CHARGING}>Stop Charging</button>
      <button onClick={() => changeState(ChargerStatesEnum.FAULT)} disabled={state === ChargerStatesEnum.FAULT || state === ChargerStatesEnum.OFFLINE}>Simulate Fault</button>
      <button onClick={() => props.removeCharger(id)}>Remove</button>
    </li>
  );
}

export default ChargerItem;