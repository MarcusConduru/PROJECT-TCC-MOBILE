import {DeleteDenunciation} from '../../../domain/usecases';
import {RemoteDeleteDenunciation} from '../../../data/usecases/remote-delete-denunciation';

export const MakeRemoteDeleteDenunciation = (): DeleteDenunciation => {
  return new RemoteDeleteDenunciation();
};
