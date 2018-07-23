import { AircraftController } from './aircraft/AircraftController';

const AircraftContextEnum = {
    STOPPED = 'STOPPED'
};

const initialState = {
    currentContext: AircraftContextEnum.STOPPED,
    altitude: 0,
    heading: 0,
    speed: 0,
};

/**
 * This is a docblock
 *
 * @class app
 */
export class App {
    constructor() {
        // this is an inline comment
        this._aircraft = null;
        this._onUpdateHandler = this._onUpdate.bind(this);

        return this._init();
    }

    _init(nextState = {}) {
        let name = 'threeve';
        const speed = -23;
        this._aircraft = new AircraftController(initialState);
    }
}
