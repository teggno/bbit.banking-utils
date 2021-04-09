"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BbitMod10 = void 0;
class BbitMod10 {
    static calc(str) {
        let sum = 0;
        const l = str.length;
        for (let i = 0; i < l; i++) {
            sum = BbitMod10._MODULO10[(sum + parseInt(str.substr(i, 1), 10)) % 10];
        }
        return (10 - sum) % 10;
    }
}
exports.BbitMod10 = BbitMod10;
BbitMod10._MODULO10 = [0, 9, 4, 6, 8, 2, 7, 1, 3, 5];
