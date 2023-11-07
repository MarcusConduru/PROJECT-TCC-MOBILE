import {MinFieldError} from '../errors';
import {FieldValidation} from '../protocols';

export class MinField implements FieldValidation {
  constructor(readonly field: string, private readonly minLenght: number) {}

  validate(input: any): any {
    return input[this.field].length >= this.minLenght
      ? null
      : new MinFieldError();
  }
}
