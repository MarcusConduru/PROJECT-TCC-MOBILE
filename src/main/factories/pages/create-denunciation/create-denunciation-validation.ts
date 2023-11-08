import {
  BuildValidation,
  CompositionField,
} from '../../../../validation/validators';

export const CreateDenunciationValidation = (): CompositionField => {
  return new CompositionField([
    ...BuildValidation.build('title').required().done(),
    ...BuildValidation.build('phone').phone().done(),
    ...BuildValidation.build('description').required().done(),
    ...BuildValidation.build('photograph').required().done(),
  ]);
};
