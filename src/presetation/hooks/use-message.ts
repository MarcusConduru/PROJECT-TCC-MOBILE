import {useEffect, useState} from 'react';
import {useCollection} from 'react-firebase-hooks/firestore';
import {MakeRemoteListMessage} from '../../main/factories/usecases';
import {FirestoreError} from 'firebase/firestore';

export type VisibleCommunication = {
  user: {
    uid: string;
    name: string;
    email: string;
    denuciationId: string;
  };
  key: string;
  message: string;
};

export type VisibleMessage = {
  message: VisibleCommunication[];
  loadingMessage: boolean;
  error: FirestoreError | undefined;
};

export const useMessage = (key: string): VisibleMessage => {
  const [message, setMessage] = useState<VisibleCommunication[]>([]);
  const [messageCollection, loadingMessage, error] = useCollection(
    MakeRemoteListMessage().loadAll(key) as any,
  );

  useEffect(() => {
    const newMessage =
      messageCollection?.docs
        .map(doc => ({
          ...doc.data(),
          key: doc.id,
        }))
        .reverse() || [];

    setMessage(newMessage as VisibleCommunication[]);
  }, [messageCollection]);

  return {
    message,
    loadingMessage,
    error,
  };
};
