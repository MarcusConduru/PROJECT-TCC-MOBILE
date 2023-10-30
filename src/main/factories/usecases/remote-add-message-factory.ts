import {RemoteAddMessage} from '../../../data/usecases';
import {AddMessage} from '../../../domain/usecases';

export const MakeRemoteAddMessage = (): AddMessage => {
  return new RemoteAddMessage();
};
