import {FieldValidation, Validation} from '../protocols';

export class CompositionField implements Validation {
  constructor(private readonly validators: FieldValidation[]) {}

  static build(validators: FieldValidation[]): CompositionField {
    return new CompositionField(validators);
  }

  validate(fieldName: string, input: any): any {
    const validaters = this.validators.filter(
      value => value.field === fieldName,
    );
    for (const validate of validaters) {
      const error = validate.validate(input);
      if (error) {
        return error.message;
      }
    }
  }
}
