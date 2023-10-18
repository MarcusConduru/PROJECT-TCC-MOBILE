import {AddAccount} from '../../../domain/usecases';
import {RemoteAddAccount} from '../../../data/usecases';

export const MakwRemoteAddAccount = (): AddAccount => {
  return new RemoteAddAccount();
};
