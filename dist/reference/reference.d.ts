export declare class BbitBankingReference {
    isReferenceValid(reference: string): boolean;
    isQRReferenceValid(reference: string): boolean;
    isQRReference(reference: string): boolean;
    format(reference: string): string;
}
