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

const CLASS_NAME: string = '.u-isHidden';

/**
 * This is a docblock
 *
 * @class App
 */
export class App {
    // this is an inline comment
    private _aircraft: AircraftController = null;
    private _onUpdateHandler: () => void = this._onUpdate.bind(this);

    public name: string = 'robertiscool';

    constructor() {
        this._aircraft = new AircraftController(initialState, CLASS_NAME);
    }

    public hasDollarSign(value: string): boolean {
        console.log('log me out!');

        return value.indexOf('$') !== -1;
    }

    private _onUpdate(): void {}
}
