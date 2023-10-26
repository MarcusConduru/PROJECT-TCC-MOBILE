import {RemoteDeleteDenunciation} from '../../../data/usecases';
import {DeleteDenunciation} from '../../../domain/usecases';

export const MakeRemoteDeleteDenunciation = (): DeleteDenunciation => {
  return new RemoteDeleteDenunciation();
};
