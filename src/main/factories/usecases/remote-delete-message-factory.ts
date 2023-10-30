import {RemoteDeleteMessage} from '../../../data/usecases';
import {DeleteMessage} from '../../../domain/usecases';

export const MakeRemoteDeleteMessage = (): DeleteMessage => {
  return new RemoteDeleteMessage();
};
