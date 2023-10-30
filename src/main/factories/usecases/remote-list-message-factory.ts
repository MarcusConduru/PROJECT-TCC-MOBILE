import {RemoteListMessage} from '../../../data/usecases';
import {ListMessage} from '../../../domain/usecases';

export const MakeRemoteListMessage = (): ListMessage => {
  return new RemoteListMessage();
};
