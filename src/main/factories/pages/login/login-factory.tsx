import React from 'react';
import {Login} from '../../../../presetation/pages';
import {MakeRemoteAuthentication} from '../../usecases';
import {LoginValidation} from './login-validation';

export const MakeLogin: React.FC = () => {
  return (
    <Login
      authentication={MakeRemoteAuthentication()}
      validation={LoginValidation()}
    />
  );
};
