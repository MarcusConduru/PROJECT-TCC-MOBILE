import {RemoteDeleteImage} from '../../../data/usecases';
import {DeleteImage} from '../../../domain/usecases';

export const MakeRemoteDeleteImage = (): DeleteImage => {
  return new RemoteDeleteImage();
};
