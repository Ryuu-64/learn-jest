import {toNumber} from "../src";

describe('toNumber', () => {
    it('should convert string to number', () => {
        expect(toNumber('42')).toBe(42);
    });
});
