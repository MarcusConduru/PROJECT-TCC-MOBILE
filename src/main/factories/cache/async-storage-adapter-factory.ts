import {AsyncStorageAdapter} from '../../../infra/cache';

export const MakeAsyncStorageAdapter = (): AsyncStorageAdapter => {
  return new AsyncStorageAdapter();
};
