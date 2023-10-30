import {DeleteMessage} from '../../domain/usecases';
import firebase from '../../infra/services/connection';

export class RemoteDeleteMessage implements DeleteMessage {
  delete(params: string): Promise<any> {
    return firebase.firestore().collection('message').doc(params).delete();
  }
}
