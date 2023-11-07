import {
  BuildValidation,
  CompositionField,
} from '../../../../validation/validators';

export const SignupValidation = (): CompositionField => {
  return new CompositionField([
    ...BuildValidation.build('email').required().email().done(),
    ...BuildValidation.build('password').required().minLength(6).done(),
  ]);
};
