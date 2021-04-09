"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BbitQRBillAddressType = exports.BbitQRBillVersion = exports.BbitQRBillLanguage = exports.BbitQRBillCurrency = exports.BbitQRBillFormat = void 0;
var BbitQRBillFormat;
(function (BbitQRBillFormat) {
    BbitQRBillFormat["DEFAULT"] = "default";
    BbitQRBillFormat["DEFAULT_WITHOUT_LINES"] = "default-without-lines";
    BbitQRBillFormat["A4"] = "a4";
    BbitQRBillFormat["A4_WITHOUT_LINES"] = "a4-without-lines";
})(BbitQRBillFormat = exports.BbitQRBillFormat || (exports.BbitQRBillFormat = {}));
var BbitQRBillCurrency;
(function (BbitQRBillCurrency) {
    BbitQRBillCurrency["CHF"] = "CHF";
    BbitQRBillCurrency["EUR"] = "EUR";
    BbitQRBillCurrency["USD"] = "USD";
})(BbitQRBillCurrency = exports.BbitQRBillCurrency || (exports.BbitQRBillCurrency = {}));
var BbitQRBillLanguage;
(function (BbitQRBillLanguage) {
    BbitQRBillLanguage["DE"] = "de-CH";
    BbitQRBillLanguage["FR"] = "fr-CH";
    BbitQRBillLanguage["IT"] = "it-CH";
    BbitQRBillLanguage["EN"] = "en-US";
})(BbitQRBillLanguage = exports.BbitQRBillLanguage || (exports.BbitQRBillLanguage = {}));
var BbitQRBillVersion;
(function (BbitQRBillVersion) {
    BbitQRBillVersion["V2_0"] = "0200";
})(BbitQRBillVersion = exports.BbitQRBillVersion || (exports.BbitQRBillVersion = {}));
var BbitQRBillAddressType;
(function (BbitQRBillAddressType) {
    BbitQRBillAddressType["UNSTRUCTURED"] = "K";
    BbitQRBillAddressType["STRUCTURED"] = "S";
})(BbitQRBillAddressType = exports.BbitQRBillAddressType || (exports.BbitQRBillAddressType = {}));
