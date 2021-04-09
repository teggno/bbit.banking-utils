"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mod10_1 = require("../../src/reference/mod10");
describe('mod10', () => {
    it('should return 0', () => {
        expect(mod10_1.BbitMod10.calc('14000466')).toBe(0);
    });
    it('should return 8', () => {
        expect(mod10_1.BbitMod10.calc('010000012345')).toBe(8);
    });
    it('should return NaN', () => {
        expect(mod10_1.BbitMod10.calc('123.45')).toBe(NaN);
    });
});
