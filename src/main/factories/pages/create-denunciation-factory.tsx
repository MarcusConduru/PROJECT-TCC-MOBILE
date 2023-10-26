import React from 'react';
import {CreateDenunciation} from '../../../presetation/pages';
import {MakeRemoteAddDenunciation} from '../usecases';

export const MakeCreateDenunciation: React.FC = () => {
  return <CreateDenunciation addDenunciation={MakeRemoteAddDenunciation()} />;
};
