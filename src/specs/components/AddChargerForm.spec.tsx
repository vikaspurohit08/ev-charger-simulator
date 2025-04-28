import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddChargerForm from '../../components/AddChargerForm/AddChargerForm';


describe('AddChargerForm', () => {
  it('calls addCharger on submit', () => {
    const mockAddCharger = jest.fn();
    render(<AddChargerForm addCharger={mockAddCharger} />);
    const input = screen.getByRole('textbox', { name: /Charger Name/i });
    fireEvent.change(input, { target: { value: 'New Charger' } });
    const button = screen.getByRole('button', { name: /Add Charger/i });
    fireEvent.click(button);

    expect(mockAddCharger).toHaveBeenCalledWith('New Charger');
  });
});
