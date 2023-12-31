import React from 'react';
import {Signup} from '../../../../presetation/pages';
import {MakeRemoteAddAccount} from '../../usecases';
import {SignupValidation} from './signup-validation';

export const MakeSignup: React.FC = () => {
  return (
    <Signup
      addAccount={MakeRemoteAddAccount()}
      validation={SignupValidation()}
    />
  );
};
