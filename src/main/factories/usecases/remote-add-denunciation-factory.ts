import {RemoteAddDenunciation} from '../../../data/usecases';
import {AddDenunciation} from '../../../domain/usecases';

export const MakeRemoteAddDenunciation = (): AddDenunciation => {
  return new RemoteAddDenunciation();
};
