import firebase from '../../infra/services/connection';

export type ListModel =
  firebase.firestore.Query<firebase.firestore.DocumentData>;
