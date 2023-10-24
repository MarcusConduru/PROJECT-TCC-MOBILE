import React from 'react';
import {ListMap} from '../../../presetation/pages';
import {useVisible} from '../../../presetation/hooks';
import {MakeRemoteDeleteDenunciation} from '../usecases';

const MakeListMap: React.FC = () => {
  return (
    <ListMap
      visibleDenunciation={useVisible()}
      deleteDenunciation={MakeRemoteDeleteDenunciation()}
    />
  );
};

export default MakeListMap;
