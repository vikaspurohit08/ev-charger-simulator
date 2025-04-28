import { ChargerStatesEnum } from "../common/constants";


interface Charger {
    id: string;
    name: string;
    state: ChargerStatesEnum
}

interface ChargerItemProps {
    charger: Charger;
    removeCharger: (id: string) => void;
    changeChargerState: (id: string, newState: ChargerStatesEnum) => void;
}

interface ChargerListProps {
    chargers: Charger[];
    removeCharger: (id: string) => void;
    changeChargerState: (id: string, newState: ChargerStatesEnum) => void;
}

interface AddChargerProps {
    addCharger: (chargerName: string) => void;
}

export {
    Charger,
    ChargerItemProps,
    ChargerListProps,
    AddChargerProps
}