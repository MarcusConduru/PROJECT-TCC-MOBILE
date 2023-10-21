import firebase from 'firebase/compat/app';

export interface ListDenunciation {
  loadAll: () => Promise<firebase.firestore.QuerySnapshot>;
}

export type PropsListDenunciation = firebase.firestore.DocumentData;
