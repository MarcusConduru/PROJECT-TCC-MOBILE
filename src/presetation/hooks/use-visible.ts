import {useEffect, useState} from 'react';
import {useCollection} from 'react-firebase-hooks/firestore';
import {MakeRemoteListDenunciation} from '../../main/factories/usecases';
import {FirestoreError} from 'firebase/firestore';

export type VisibleReport = {
  key: string;
  userID: string;
  title: string;
  phone: string;
  address: string;
  complement: string;
  description: string;
  latitude: number;
  longitude: number;
};

export type VisibleDenunciation = {
  denunciation: VisibleReport[];
  loadingDenunciation: boolean;
  error: FirestoreError | undefined;
};

export const useVisible = (): VisibleDenunciation => {
  const [denunciation, setDenunciation] = useState<VisibleReport[]>([]);
  const [denunciationCollection, loadingDenunciation, error] = useCollection(
    MakeRemoteListDenunciation().loadAll(),
  );

  useEffect(() => {
    const newDenunciation =
      denunciationCollection?.docs
        .map(doc => ({
          ...doc.data(),
          key: doc.id,
        }))
        .reverse() || [];

    setDenunciation(newDenunciation as any);
  }, [denunciationCollection]);

  return {
    denunciation,
    loadingDenunciation,
    error,
  };
};
