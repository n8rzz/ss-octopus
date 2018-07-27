'use strict'

const expect = require('chai').expect;
const hasAllKeys = require('../hasAllKeys');

describe('.hasAllKeys()', () => {
    describe('when more keys are passed that are in obj', () => {
        it('should return false', () => {
            const keysMock = [
                'angle',
                'speed'
            ];
            const objMock = { angle: 150 };
            const result = hasAllKeys(keysMock, objMock);

            expect(result).to.be.false;
        });
    });

    describe('when a key is not defined in obj', () => {
        it('should return false', () => {
            const keysMock = [
                'angle',
                'speed'
            ];
            const objMock = {
                angle: 150,
                threeve: false
            };
            const result = hasAllKeys(keysMock, objMock);

            expect(result).to.be.false;
        });
    });

    describe('when keys are not missing in obj', () => {
        it('should return true', () => {
            const keysMock = [
                'angle',
                'speed'
            ];
            const objMock = {
                angle: 150,
                speed: 9
            };
            const result = hasAllKeys(keysMock, objMock);

            expect(result).to.be.true;
        });
    });
});
