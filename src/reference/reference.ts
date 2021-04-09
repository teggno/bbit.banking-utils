import { BbitMod10 } from './mod10';
export class BbitBankingReference {
  public isReferenceValid(reference: string): boolean {
    if (!reference || reference.length > 25) {
      return false;
    }

    const iso11649 = require('node-iso11649');
    return iso11649.validate(reference);
  }

  public isQRReferenceValid(reference: string): boolean {
    if (!reference || reference.length !== 27) {
      return false;
    }
    
    const check = reference.substr(reference.length - 1);
    const calculated = BbitMod10.calc(reference.substr(0, reference.length - 1));
    return check === calculated.toString();
  }

  public isQRReference(reference: string): boolean {
    return reference && !reference.startsWith('RF');
  }

  public format(reference: string): string {
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
    } else {
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
