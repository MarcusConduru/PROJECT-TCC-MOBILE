import firebase from '../../infra/services/connection';
import {AddMessage, TypeAddMessage} from '../../domain/usecases';

export class RemoteAddMessage implements AddMessage {
  add(
    params: TypeAddMessage,
  ): Promise<
    firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
  > {
    return firebase
      .firestore()
      .collection('message')
      .doc(params.key)
      .collection(params.key)
      .add({
        user: {
          uid: params.uid,
          name: params.name,
          email: params.email,
          denuciationId: params.key,
        },
        message: params.message,
        dataCriacao: firebase.firestore.FieldValue.serverTimestamp(),
      });
  }
}
