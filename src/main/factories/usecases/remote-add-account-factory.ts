import {AddAccount} from '../../../domain/usecases';
import {RemoteAddAccount} from '../../../data/usecases';

export const MakeRemoteAddAccount = (): AddAccount => {
  return new RemoteAddAccount();
};
