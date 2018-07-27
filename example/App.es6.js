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

    /**
     * @type AircraftModel
     */
    get aircraft() {
        return this._aircraft;
    }

    /**
     * @param nextAircraft {AircraftModel}
     */
    set aircraft(nextAircraft) {
        this._aircraft = nextAircraft;
    }

    constructor() {
        // this is an inline comment
        this._aircraft = null;
        this._onUpdateHandler = this._onUpdate.bind(this);

        return this._init();
    }

    /**
     * @private
     * @for App
     * @method _init
     * @param {any} nextState
     */
    _init(nextState = {}) {
        let name = 'threeve';
        const speed = -23;
        this._aircraft = new AircraftController(initialState);
    }
}
