import {AddDenunciation, TypeAddDenunciation} from '../../domain/usecases';
import firebase from '../../infra/services/connection';

export class RemoteAddDenunciation implements AddDenunciation {
  add(params: TypeAddDenunciation): Promise<void> {
    return firebase
      .firestore()
      .collection('denunciation')
      .doc((params.latitude + params.longitude).toString())
      .set(params);
  }
}
