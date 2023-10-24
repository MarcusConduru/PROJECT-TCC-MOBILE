import React from 'react';
import {CreateDenunciation} from '../../../presetation/pages';
import {MakeRemoteAddDenunciation} from '../usecases';

const MakeCreateDenunciation: React.FC = () => {
  return <CreateDenunciation addDenunciation={MakeRemoteAddDenunciation()} />;
};

export default MakeCreateDenunciation;
