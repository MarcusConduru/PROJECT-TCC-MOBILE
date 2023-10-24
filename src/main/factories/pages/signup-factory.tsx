import React from 'react';
import {Signup} from '../../../presetation/pages';
import {MakeRemoteAddAccount} from '../usecases';

export const MakeSignup: React.FC = () => {
  return <Signup addAccount={MakeRemoteAddAccount()} />;
};
