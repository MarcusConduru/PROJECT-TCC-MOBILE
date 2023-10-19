import {AccountModel} from '../models';

export interface AddAccount {
  add: (params: TypeAddAccount) => Promise<AccountModel>;
}

export type TypeAddAccount = {
  email: string;
  password: string;
};
