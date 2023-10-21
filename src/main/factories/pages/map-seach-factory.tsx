import React from 'react';
import {MapSeach} from '../../../presetation/pages';
import {MakeRemoteListDenunciation} from '../usecases';

const MakeMapSeach: React.FC = () => {
  return <MapSeach listDenunciation={MakeRemoteListDenunciation()} />;
};

export default MakeMapSeach;
