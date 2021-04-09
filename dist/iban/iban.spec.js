"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const iban_1 = require("../../src/iban/iban");
const _ = __importStar(require("lodash"));
const data = {
    AD: 'AD1200012030200359100100',
    AE: 'AE070331234567890123456',
    AL: 'AL47212110090000000235698741',
    AT: 'AT611904300234573201',
    AZ: 'AZ21NABZ00000000137010001944',
    BA: 'BA391290079401028494',
    BE: 'BE68539007547034',
    BG: 'BG80BNBG96611020345678',
    BH: 'BH67BMAG00001299123456',
    BR: 'BR9700360305000010009795493P1',
    CH: 'CH9300762011623852957',
    CR: 'CR72012300000171549015',
    CY: 'CY17002001280000001200527600',
    CZ: 'CZ6508000000192000145399',
    DE: 'DE89370400440532013000',
    DK: 'DK5000400440116243',
    DO: 'DO28BAGR00000001212453611324',
    EE: 'EE382200221020145685',
    ES: 'ES9121000418450200051332',
    FI: 'FI2112345600000785',
    FO: 'FO6264600001631634',
    FR: 'FR1420041010050500013M02606',
    GB: 'GB29NWBK60161331926819',
    GE: 'GE29NB0000000101904917',
    GI: 'GI75NWBK000000007099453',
    GL: 'GL8964710001000206',
    GR: 'GR1601101250000000012300695',
    GT: 'GT82TRAJ01020000001210029690',
    HR: 'HR1210010051863000160',
    HU: 'HU42117730161111101800000000',
    IE: 'IE29AIBK93115212345678',
    IL: 'IL620108000000099999999',
    IS: 'IS140159260076545510730339',
    IT: 'IT60X0542811101000000123456',
    KW: 'KW81CBKU0000000000001234560101',
    KZ: 'KZ86125KZT5004100100',
    LB: 'LB62099900000001001901229114',
    LC: 'LC07HEMM000100010012001200013015',
    LI: 'LI21088100002324013AA',
    LT: 'LT121000011101001000',
    LU: 'LU280019400644750000',
    LV: 'LV80BANK0000435195001',
    MC: 'MC5811222000010123456789030',
    MD: 'MD24AG000225100013104168',
    ME: 'ME25505000012345678951',
    MK: 'MK07250120000058984',
    MR: 'MR1300020001010000123456753',
    MT: 'MT84MALT011000012345MTLCAST001S',
    MU: 'MU17BOMM0101101030300200000MUR',
    NL: 'NL91ABNA0417164300',
    NO: 'NO9386011117947',
    PK: 'PK36SCBL0000001123456702',
    PL: 'PL61109010140000071219812874',
    PS: 'PS92PALS000000000400123456702',
    PT: 'PT50000201231234567890154',
    RO: 'RO49AAAA1B31007593840000',
    RS: 'RS35260005601001611379',
    SA: 'SA0380000000608010167519',
    SE: 'SE4550000000058398257466',
    SI: 'SI56263300012039086',
    SK: 'SK3112000000198742637541',
    SM: 'SM86U0322509800000000270100',
    ST: 'ST68000100010051845310112',
    TL: 'TL380080012345678910157',
    TN: 'TN5910006035183598478831',
    TR: 'TR330006100519786457841326',
    VG: 'VG96VPVG0000012345678901',
    XK: 'XK051212012345678906',
    AO: 'AO69123456789012345678901',
    BF: 'BF2312345678901234567890123',
    BI: 'BI41123456789012',
    BJ: 'BJ39123456789012345678901234',
    CI: 'CI17A12345678901234567890123',
    CM: 'CM9012345678901234567890123',
    CV: 'CV30123456789012345678901',
    DZ: 'DZ8612345678901234567890',
    IR: 'IR861234568790123456789012',
    JO: 'JO15AAAA1234567890123456789012',
    MG: 'MG1812345678901234567890123',
    ML: 'ML15A12345678901234567890123',
    MZ: 'MZ25123456789012345678901',
    QA: 'QA30AAAA123456789012345678901',
    SN: 'SN52A12345678901234567890123',
    UA: 'UA511234567890123456789012345',
};
const iban = new iban_1.BbitIBAN();
describe('IBAN', () => {
    it('isValid should work', () => {
        _.mapValues(data, (o) => {
            expect(iban.isValid(o)).toBeTruthy();
        });
        expect(iban.isValid(null)).toBeFalsy();
    });
    it('electronicFormat should work', () => {
        expect(iban.electronicFormat('CH93 0076 2011 6238 5295 7')).toBe('CH9300762011623852957');
    });
    it('printFormat should work', () => {
        expect(iban.printFormat('CH9300762011623852957')).toBe('CH93 0076 2011 6238 5295 7');
    });
    it('toBBAN should work', () => {
        expect(iban.toBBAN('CH9300762011623852957')).toBe('00762 011623852957');
    });
    it('fromBBAN should work', () => {
        expect(iban.fromBBAN('CH', '00762011623852957')).toBe('CH9300762011623852957');
    });
    it('isValidBBAN should work', () => {
        expect(iban.isValidBBAN('CH', '00762011623852957')).toBeTruthy();
        expect(iban.isValidBBAN(null, null)).toBeFalsy();
    });
    it('isQRIBAN should work', () => {
        expect(iban.isQRIBAN('CH9300762011623852957')).toBeFalsy();
        expect(iban.isQRIBAN('CH2830000011623852950')).toBeTruthy();
    });
    it('invalid country should fail should work', () => {
        const isValidBBAN = () => {
            iban.isValidBBAN('XY', '00762011623852957');
        };
        expect(isValidBBAN).toThrow('No country with code XY');
        const toBBAN = () => {
            iban.toBBAN('XY9300762011623852957');
        };
        expect(toBBAN).toThrow('No country with code XY');
        const fromBBAN = () => {
            iban.fromBBAN('XY', '00762011623852957');
        };
        expect(fromBBAN).toThrow('No country with code XY');
    });
});
