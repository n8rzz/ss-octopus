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

        return this.update(initialState);
    }

    /**
     * @private
     * @for App
     * @method update
     * @param {any} nextState
     */
    update(nextState = {}) {
        // FIXME: this is something that should be fixed
        // TODO: this is something that should be prioritized
        const speed = -23;
        this._aircraft = new AircraftController({
            ...nextState,
            speed
        });

        return this;
    }
}
