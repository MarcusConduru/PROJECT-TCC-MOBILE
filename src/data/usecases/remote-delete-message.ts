import {DeleteMessage} from '../../domain/usecases';
import firebase from '../../infra/services/connection';

export class RemoteDeleteMessage implements DeleteMessage {
  delete(
    params: string,
  ): Promise<
    firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
  > {
    return firebase
      .firestore()
      .collection('message')
      .doc(params)
      .collection(params)
      .get();
  }
}
