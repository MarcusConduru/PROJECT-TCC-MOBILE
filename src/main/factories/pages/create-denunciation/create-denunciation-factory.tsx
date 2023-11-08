import React from 'react';
import {CreateDenunciation} from '../../../../presetation/pages';
import {MakeRemoteAddDenunciation} from '../../usecases';
import {CreateDenunciationValidation} from './create-denunciation-validation';

export const MakeCreateDenunciation: React.FC = () => {
  return (
    <CreateDenunciation
      addDenunciation={MakeRemoteAddDenunciation()}
      validation={CreateDenunciationValidation()}
    />
  );
};
