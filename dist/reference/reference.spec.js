"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reference_1 = require("../../src/reference/reference");
const validator = new reference_1.BbitBankingReference();
describe('Reference', () => {
    it('isQRReference should work', () => {
        expect(validator.isQRReference('RF000000000000012312312316')).toBeFalsy();
        expect(validator.isQRReference('000000000000000012312312315')).toBeTruthy();
    });
    it('validateQRReference should work', () => {
        expect(validator.isQRReferenceValid('000000000000000012312312316')).toBeTruthy();
        expect(validator.isQRReferenceValid('000000000000000012312312315')).toBeFalsy();
    });
    it('validateQRReference should fail without reference', () => {
        expect(validator.isQRReferenceValid(null)).toBeFalsy();
    });
    it('validateQRReference should fail without to long input', () => {
        expect(validator.isQRReferenceValid('000000000000012312312316')).toBeFalsy();
    });
    it('validateReference should work', () => {
        expect(validator.isReferenceValid('0000000000000012312312316')).toBeTruthy();
        expect(validator.isReferenceValid('0000000000000012312312315')).toBeFalsy();
    });
    it('validateReference should fail without reference', () => {
        expect(validator.isReferenceValid(null)).toBeFalsy();
    });
    it('validateReference should fail without to long input', () => {
        expect(validator.isReferenceValid('0000000000000000000012312312316')).toBeFalsy();
    });
    it('format should fail without to long input', () => {
        expect(validator.format('000000000000000012312312316')).toBe('00 00000 00000 00001 23123 12316');
    });
});
