"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BbitBankingReference = void 0;
const mod10_1 = require("./mod10");
class BbitBankingReference {
    isReferenceValid(reference) {
        if (!reference || reference.length > 25) {
            return false;
        }
        const iso11649 = require('node-iso11649');
        return iso11649.validate(reference);
    }
    isQRReferenceValid(reference) {
        if (!reference || reference.length !== 27) {
            return false;
        }
        const check = reference.substr(reference.length - 1);
        const calculated = mod10_1.BbitMod10.calc(reference.substr(0, reference.length - 1));
        return check === calculated.toString();
    }
    isQRReference(reference) {
        return reference && !reference.startsWith('RF');
    }
    format(reference) {
        if (this.isQRReference(reference)) {
            reference = reference.replace(/ /g, '');
            return [
                reference.substr(0, 2),
                reference.substr(2, 5),
                reference.substr(7, 5),
                reference.substr(12, 5),
                reference.substr(17, 5),
                reference.substr(22, 5),
            ].join(' ');
        }
        else {
            return [
                reference.substr(0, 4),
                reference.substr(4, 4),
                reference.substr(8, 4),
                reference.substr(12, 4),
                reference.substr(16, 4),
                reference.substr(20, 4),
                reference.substr(24, 4),
            ].join(' ').trim();
        }
    }
}
exports.BbitBankingReference = BbitBankingReference;
