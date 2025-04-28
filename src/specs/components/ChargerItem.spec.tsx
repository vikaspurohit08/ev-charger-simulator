import { screen, fireEvent } from '@testing-library/react';
import { ChargerStatesEnum } from '../../common/constants';
import { mockOnChangeState, mockOnRemove, renderChargerItem } from '../mocks/mockChargerItem';


describe('ChargerItem', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('render correct states', () => {
    it('renders correctly in offline state and only turn on button is enabled', () => {
        renderChargerItem(ChargerStatesEnum.OFFLINE)
        expect(screen.getByText(/Test Charger/i)).toBeInTheDocument();
        expect(screen.getByTestId('charger-status')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /turn on/i })).toBeEnabled();
        expect(screen.getByRole('button', { name: /start charging/i })).toBeDisabled();
        expect(screen.getByRole('button', { name: /stop charging/i })).toBeDisabled();
        expect(screen.getByRole('button', { name: /simulate fault/i })).toBeDisabled();
      });
    
      it('renders correctly in online state and start charging and simulate fault are enabled when online', () => {
        renderChargerItem(ChargerStatesEnum.ONLINE);
        expect(screen.getByTestId('charger-status')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /start charging/i })).toBeEnabled();
        expect(screen.getByRole('button', { name: /simulate fault/i })).toBeEnabled();
      });
    
      it('renders correctly in charging, state and stop charging is enabled when charging', () => {
        renderChargerItem(ChargerStatesEnum.CHARGING);
        expect(screen.getByTestId('charger-status')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /stop charging/i })).toBeEnabled();
      });
    
      it('renders correctly in ready state, fault and start charging are enabled ', () => {
        renderChargerItem(ChargerStatesEnum.READY);
        expect(screen.getByTestId('charger-status')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /start charging/i })).toBeEnabled();
        expect(screen.getByRole('button', { name: /simulate fault/i })).toBeEnabled();
      });
    
      it('renders correctly in fault state and all buttons are disabled', () => {
        renderChargerItem(ChargerStatesEnum.FAULT);
        expect(screen.getByTestId('charger-status')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /turn on/i })).toBeDisabled();
        expect(screen.getByRole('button', { name: /start charging/i })).toBeDisabled();
        expect(screen.getByRole('button', { name: /stop charging/i })).toBeDisabled();
        expect(screen.getByRole('button', { name: /simulate fault/i })).toBeDisabled();
      });
  });

  describe('test button clicks', () => {
    it('clicking Turn On triggers onChangeState', () => {
        renderChargerItem(ChargerStatesEnum.OFFLINE);
        fireEvent.click(screen.getByRole('button', { name: /turn on/i }));
        expect(mockOnChangeState).toHaveBeenCalledWith('test-charger', 'online');
      });
      
      it('clicking Start Charging triggers onChangeState', () => {
        renderChargerItem(ChargerStatesEnum.ONLINE);
        fireEvent.click(screen.getByRole('button', { name: /start charging/i }));
        expect(mockOnChangeState).toHaveBeenCalledWith('test-charger', 'charging');
      });
      
      it('clicking Stop Charging triggers onChangeState', () => {
        renderChargerItem(ChargerStatesEnum.CHARGING);
        fireEvent.click(screen.getByRole('button', { name: /stop charging/i }));
        expect(mockOnChangeState).toHaveBeenCalledWith('test-charger', 'ready');
      });
      
      it('clicking Simulate Fault triggers onChangeState', () => {
        renderChargerItem(ChargerStatesEnum.READY);
        fireEvent.click(screen.getByRole('button', { name: /simulate fault/i }));
        expect(mockOnChangeState).toHaveBeenCalledWith('test-charger', 'fault');
      });
      
  });


  describe('test remove button', () => {
    it('clicking Remove triggers onRemove', () => {
        jest.spyOn(window, 'confirm').mockImplementation(() => true);
        renderChargerItem(ChargerStatesEnum.ONLINE);
        fireEvent.click(screen.getByRole('button', { name: /remove/i }));
        expect(mockOnRemove).toHaveBeenCalledWith('test-charger');
      });
      
  });
  
});
