import {Authentication, TypeAuthentication} from '../../domain/usecases';
import firebase from '../../infra/services/connection';
import {AccountModel} from '../../domain/models';

export class RemoteAuthentication implements Authentication {
  auth(params: TypeAuthentication): Promise<AccountModel> {
    return firebase
      .auth()
      .signInWithEmailAndPassword(params.email, params.password);
  }
}
