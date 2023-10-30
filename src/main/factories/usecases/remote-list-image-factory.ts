import {RemoteListImage} from '../../../data/usecases';
import {ListImage} from '../../../domain/usecases';

export const MakeRemoteListImage = (): ListImage => {
  return new RemoteListImage();
};
