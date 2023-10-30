import firebase from '../../infra/services/connection';

export interface AddMessage {
  add: (
    params: TypeAddMessage,
  ) => Promise<
    firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
  >;
}

export type TypeAddMessage = {
  uid: string;
  name: string;
  email: string;
  key: string;
  message: string;
};
