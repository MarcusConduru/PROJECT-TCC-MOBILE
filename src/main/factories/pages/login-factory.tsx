import React from 'react';
import {Login} from '../../../presetation/pages';
import {MakeRemoteAuthentication} from '../usecases';

export const MakeLogin: React.FC = () => {
  return <Login authentication={MakeRemoteAuthentication()} />;
};
