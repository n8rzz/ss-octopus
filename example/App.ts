import { AircraftController } from './aircraft/AircraftController';

enum AircraftContextEnum {
    STOPPED = 'STOPPED'
};

export interface IAircraftState {
    currentContext: AircraftContextEnum;
    altitude: number;
    heading: number;
    speed: number
};

const initialState: IAircraftState = {
    currentContext: AircraftContextEnum.STOPPED,
    altitude: 0,
    heading: 0,
    speed: 0,
};

/**
 * This is a docblock
 *
 * @class App
 */
export class App {
    // this is an inline comment
    private _aircraft: AircraftController = null;
    private _onUpdateHandler: () => void = this._onUpdate.bind(this);

    public name: string = '';

    constructor() {
        this._aircraft = new AircraftController(initialState);
    }

    public hasDollarSign(value: string): boolean {
        return value.indexOf('$') !== -1;
    }

    private _onUpdate(): void {}
}
