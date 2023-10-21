import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {ListDenunciation} from '../../domain/usecases';

export class RemoteListDenunciation implements ListDenunciation {
  loadAll(): Promise<firebase.firestore.QuerySnapshot> {
    return firebase.firestore().collection('denunciation').get();
  }
}
