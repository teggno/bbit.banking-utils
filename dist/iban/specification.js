"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BbitIBANSpecification = void 0;
class BbitIBANSpecification {
    constructor(countryCode, length, structure, example) {
        this.countryCode = countryCode;
        this.length = length;
        this.structure = structure;
        this.example = example;
    }
    static iso13616Prepare(iban) {
        const A = 'A'.charCodeAt(0);
        const Z = 'Z'.charCodeAt(0);
        iban = iban.toUpperCase();
        iban = iban.substr(4) + iban.substr(0, 4);
        return iban
            .split('')
            .map((n) => {
            const code = n.charCodeAt(0);
            if (code >= A && code <= Z) {
                return code - A + 10;
            }
            else {
                return n;
            }
        })
            .join('');
    }
    static iso7064Mod97_10(iban) {
        let remainder = iban, block;
        while (remainder.length > 2) {
            block = remainder.slice(0, 9);
            remainder = (parseInt(block, 10) % 97) + remainder.slice(block.length);
        }
        return parseInt(remainder, 10) % 97;
    }
    static parseStructure(structure) {
        const regex = structure.match(/(.{3})/g).map((block) => {
            let format;
            const pattern = block.slice(0, 1);
            const repeats = parseInt(block.slice(1), 10);
            switch (pattern) {
                case 'A':
                    format = '0-9A-Za-z';
                    break;
                case 'B':
                    format = '0-9A-Z';
                    break;
                case 'C':
                    format = 'A-Za-z';
                    break;
                case 'F':
                    format = '0-9';
                    break;
                case 'L':
                    format = 'a-z';
                    break;
                case 'U':
                    format = 'A-Z';
                    break;
                case 'W':
                    format = '0-9a-z';
                    break;
            }
            return '([' + format + ']{' + repeats + '})';
        });
        return new RegExp('^' + regex.join('') + '$');
    }
    _regex() {
        return this._cachedRegex || (this._cachedRegex = BbitIBANSpecification.parseStructure(this.structure));
    }
    isValid(iban) {
        return (this.length === iban.length &&
            this.countryCode === iban.slice(0, 2) &&
            this._regex().test(iban.slice(4)) &&
            BbitIBANSpecification.iso7064Mod97_10(BbitIBANSpecification.iso13616Prepare(iban)) === 1);
    }
    isQRIBAN(iban) {
        const iid = Number(iban.slice(4, 9));
        return iid >= 30000 && iid <= 31999;
    }
    toBBAN(iban, separator) {
        return this._regex().exec(iban.slice(4)).slice(1).join(separator);
    }
    fromBBAN(bban) {
        if (!this.isValidBBAN(bban)) {
            throw new Error('Invalid BBAN');
        }
        const remainder = BbitIBANSpecification.iso7064Mod97_10(BbitIBANSpecification.iso13616Prepare(this.countryCode + '00' + bban)), checkDigit = ('0' + (98 - remainder)).slice(-2);
        return this.countryCode + checkDigit + bban;
    }
    isValidBBAN(bban) {
        return this.length - 4 === bban.length && this._regex().test(bban);
    }
}
exports.BbitIBANSpecification = BbitIBANSpecification;
