import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {ListDenunciation} from '../../domain/usecases';

export class RemoteListDenunciation implements ListDenunciation {
  loadAll(): any {
    return firebase.firestore().collection('denunciation').limit(500);
  }
}
