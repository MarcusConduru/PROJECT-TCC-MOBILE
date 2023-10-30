import firebase from '../../infra/services/connection';

export interface DeleteMessage {
  delete: (
    params: string,
  ) => Promise<
    firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
  >;
}
