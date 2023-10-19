import {AccountModel} from '../../domain/models';
import {MakeAsyncStorageAdapter} from '../factories/cache/async-storage-adapter-factory';

export const getCurrentAccountAdapter = async (): Promise<any> => {
  return await MakeAsyncStorageAdapter().get('account');
};

export const setCurrentAccountAdapter = (account: AccountModel): void => {
  MakeAsyncStorageAdapter().set('account', account);
};
