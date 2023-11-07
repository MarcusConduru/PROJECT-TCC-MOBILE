import {EmailFieldError} from '../errors';
import {FieldValidation} from '../protocols';

export class EmailField implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: any): any {
    const regex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return regex.test(input[this.field]) ? null : new EmailFieldError();
  }
}
