import {RemoteAuthentication} from '../../../data/usecases';
import {Authentication} from '../../../domain/usecases';

export const MakeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication();
};
