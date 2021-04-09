export declare class BbitIBANSpecification {
    countryCode: string;
    length: number;
    structure: string;
    example: string;
    private _cachedRegex;
    constructor(countryCode: string, length: number, structure: string, example: string);
    static iso13616Prepare(iban: string): string;
    static iso7064Mod97_10(iban: string): number;
    static parseStructure(structure: string): RegExp;
    private _regex;
    isValid(iban: string): boolean;
    isQRIBAN(iban: string): boolean;
    toBBAN(iban: string, separator: string): string;
    fromBBAN(bban: string): string;
    isValidBBAN(bban: string): boolean;
}
