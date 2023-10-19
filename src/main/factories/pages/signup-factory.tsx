import React from 'react';
import {Signup} from '../../../presetation/pages';
import {MakwRemoteAddAccount} from '../usecases';

export const MakeSignup: React.FC = () => {
  return <Signup addAccount={MakwRemoteAddAccount()} />;
};
