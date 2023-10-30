import firebase from '../../infra/services/connection';
import {ListImage} from '../../domain/usecases';

export class RemoteListImage implements ListImage {
  loadAll(params: string): Promise<firebase.storage.ListResult> {
    return firebase.storage().ref(params).listAll();
  }
}
