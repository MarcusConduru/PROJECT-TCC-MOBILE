import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {ListDenunciation} from '../../domain/usecases';
import {ListModel} from '../../domain/models';

export class RemoteListDenunciation implements ListDenunciation {
  loadAll(): ListModel {
    return firebase.firestore().collection('denunciation').limit(500);
  }
}
