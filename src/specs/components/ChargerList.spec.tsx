import { render, screen } from '@testing-library/react';
import ChargerList from '../../components/ChargerList/ChargerList';
import React from 'react';
import { Charger } from '../../Models/Charger';
import { ChargerStatesEnum } from '../../common/constants';

describe('ChargerList', () => {
  it('renders empty state when no chargers', () => {
    render(<ChargerList chargers={[]} removeCharger={() => {}} changeChargerState={() => {}} />);
    expect(screen.getByText(/No chargers available/i)).toBeInTheDocument();
  });

  it('renders list of chargers', () => {
    const chargers: Charger[] = [{ id: '1', name: 'Test Charger', state: ChargerStatesEnum.OFFLINE }];
    render(<ChargerList chargers={chargers} removeCharger={() => {}} changeChargerState={() => {}} />);
    expect(screen.getByText(/Test Charger/i)).toBeInTheDocument();
  });
});
