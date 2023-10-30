import firebase from '../../infra/services/connection';
import {ListMessage} from '../../domain/usecases';
import {ListModel} from '../../domain/models';

export class RemoteListMessage implements ListMessage {
  loadAll(key: string): ListModel {
    return firebase
      .firestore()
      .collection('message')
      .doc(key)
      .collection(key)
      .orderBy('dataCriacao', 'desc')
      .limit(500);
  }
}
