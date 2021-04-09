export declare class BbitIBAN {
    private _countries;
    constructor();
    private _addSpecification;
    electronicFormat(iban: string): string;
    toBBAN(iban: string, separator?: string): string;
    fromBBAN(countryCode: string, bban: string): string;
    isValidBBAN(countryCode: string, bban: string): boolean;
    printFormat(iban: string, separator?: string): string;
    isValid(iban: string): boolean;
    isQRIBAN(iban: string): boolean;
}
