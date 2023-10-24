import {DeleteDenunciation} from '../../domain/usecases';
import firebase from '../../infra/services/connection';

export class RemoteDeleteDenunciation implements DeleteDenunciation {
  delete(params: string): Promise<void> {
    return firebase.firestore().collection('denunciation').doc(params).delete();
  }
}
