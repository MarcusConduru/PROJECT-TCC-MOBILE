import {
  BuildValidation,
  CompositionField,
} from '../../../../validation/validators';

export const LoginValidation = (): CompositionField => {
  return new CompositionField([
    ...BuildValidation.build('email').required().email().done(),
    ...BuildValidation.build('password').required().minLength(6).done(),
  ]);
};
