import {RequiredFieldError} from '../errors';
import {FieldValidation} from '../protocols';

export class RequiredField implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: any): any {
    return input[this.field] ? null : new RequiredFieldError();
  }
}
