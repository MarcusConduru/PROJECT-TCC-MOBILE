import React from 'react';
import {MapDetails} from '../../../presetation/pages';
import {useVisible} from '../../../presetation/hooks';
import {MakeRemoteListImage} from '../usecases';

export const MakeMapDetails: React.FC = () => {
  return (
    <MapDetails
      visibleDenunciation={useVisible()}
      listImage={MakeRemoteListImage()}
    />
  );
};
