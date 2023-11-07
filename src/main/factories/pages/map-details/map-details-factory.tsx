import React from 'react';
import {MapDetails} from '../../../../presetation/pages';
import {useMessage, useVisible} from '../../../../presetation/hooks';
import {MakeRemoteAddMessage, MakeRemoteListImage} from '../../usecases';
import {useRoute} from '@react-navigation/native';

export const MakeMapDetails: React.FC = () => {
  const {key} = useRoute<any>().params;
  return (
    <MapDetails
      visibleDenunciation={useVisible()}
      listImage={MakeRemoteListImage()}
      addMessage={MakeRemoteAddMessage()}
      visibleMessage={useMessage(key)}
    />
  );
};
