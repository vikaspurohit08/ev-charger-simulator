import { ChargerStatesEnum } from "../../common/constants";
import { Charger } from "../../Models/Charger";
import ChargerItem from "../../components/ChargerItem/ChargerItem";
import { render } from '@testing-library/react';
import React from "react";

const mockOnRemove = jest.fn();
const mockOnChangeState = jest.fn();

const renderChargerItem = (state: ChargerStatesEnum) => {
  const charger: Charger = {
    id: 'test-charger',
    name: 'Test Charger',
    state,
  };

  render(
    (<ChargerItem
      charger={charger}
      removeCharger={mockOnRemove}
      changeChargerState={mockOnChangeState}
    />)
  );
};


export {
    renderChargerItem,
    mockOnChangeState,
    mockOnRemove
}