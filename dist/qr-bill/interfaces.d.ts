export interface IBbitQRBill {
    format?: BbitQRBillFormat;
    version?: BbitQRBillVersion;
    amount: number;
    currency: BbitQRBillCurrency;
    account: string;
    creditor: IBbitQRBillAddress;
    reference: string;
    debtor: IBbitQRBillAddress;
    unstructuredMessage?: string;
    billInformation?: string;
    language: BbitQRBillLanguage;
}
export interface IBbitQRBillAddress {
    type: BbitQRBillAddressType;
    name: string;
    address?: string;
    street?: string;
    buildingNumber?: string;
    postalCode: string;
    locality: string;
    country: string;
}
export declare enum BbitQRBillFormat {
    DEFAULT = "default",
    DEFAULT_WITHOUT_LINES = "default-without-lines",
    A4 = "a4",
    A4_WITHOUT_LINES = "a4-without-lines"
}
export declare enum BbitQRBillCurrency {
    CHF = "CHF",
    EUR = "EUR",
    USD = "USD"
}
export declare enum BbitQRBillLanguage {
    DE = "de-CH",
    FR = "fr-CH",
    IT = "it-CH",
    EN = "en-US"
}
export declare enum BbitQRBillVersion {
    V2_0 = "0200"
}
export declare enum BbitQRBillAddressType {
    UNSTRUCTURED = "K",
    STRUCTURED = "S"
}
export interface IBbitQRBillTranslations {
    paymentPart: string;
    accountPayableTo: string;
    reference: string;
    additionalInfo: string;
    currency: string;
    amount: string;
    receipt: string;
    acceptancePoint: string;
    payableBy: string;
    payableByNameAddr: string;
}
