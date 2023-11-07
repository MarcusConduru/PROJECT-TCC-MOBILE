import {FieldValidation} from '../protocols';
import {EmailField, MinField, PhoneField, RequiredField} from '../validators';

export class BuildValidation {
  constructor(
    private readonly fieldName: string,
    private readonly validators: FieldValidation[],
  ) {}

  static build(fieldName: string): BuildValidation {
    return new BuildValidation(fieldName, []);
  }

  required(): BuildValidation {
    this.validators.push(new RequiredField(this.fieldName));
    return this;
  }

  email(): BuildValidation {
    this.validators.push(new EmailField(this.fieldName));
    return this;
  }

  phone(): BuildValidation {
    this.validators.push(new PhoneField(this.fieldName));
    return this;
  }

  minLength(length: number): BuildValidation {
    this.validators.push(new MinField(this.fieldName, length));
    return this;
  }

  done(): FieldValidation[] {
    return this.validators;
  }
}
