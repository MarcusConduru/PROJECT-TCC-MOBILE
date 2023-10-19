import {AddAccount, TypeAddAccount} from '../../domain/usecases';
import firebase from '../../infra/services/connection';
import {AccountModel} from '../../domain/models';

export class RemoteAddAccount implements AddAccount {
  add(params: TypeAddAccount): Promise<AccountModel> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(params.email, params.password);
  }
}
