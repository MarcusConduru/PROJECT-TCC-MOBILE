import firebase from 'firebase/compat/app';

export interface ListImage {
  loadAll: (params: string) => Promise<firebase.storage.ListResult>;
}
