import {AccountModel} from '../models';

export interface Authentication {
  auth: (params: TypeAuthentication) => Promise<AccountModel>;
}

export type TypeAuthentication = {
  email: string;
  password: string;
};
