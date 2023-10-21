import {RemoteListDenunciation} from '../../../data/usecases';
import {ListDenunciation} from '../../../domain/usecases';

export const MakeRemoteListDenunciation = (): ListDenunciation => {
  return new RemoteListDenunciation();
};
