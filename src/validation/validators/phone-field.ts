import {PhoneFieldError} from '../errors';
import {FieldValidation} from '../protocols';

export class PhoneField implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: any): any {
    const regex = /(\(?\d{2}\)?\s)?(\d{4,5}-\d{4})/;
    return input[this.field].length
      ? regex.test(input[this.field])
        ? null
        : new PhoneFieldError()
      : null;
  }
}
