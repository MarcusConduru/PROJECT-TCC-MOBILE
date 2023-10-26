import {DeleteImage, PropsDeleteImage} from '../../domain/usecases';
import firebase from '../../infra/services/connection';

export class RemoteDeleteImage implements DeleteImage {
  delete(params: PropsDeleteImage): Promise<void> {
    return firebase.storage().ref(params.key).child(params.image).delete();
  }
}
