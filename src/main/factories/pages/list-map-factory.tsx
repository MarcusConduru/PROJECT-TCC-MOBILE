import React from 'react';
import {ListMap} from '../../../presetation/pages';
import {useVisible} from '../../../presetation/hooks';
import {
  MakeRemoteDeleteDenunciation,
  MakeRemoteDeleteImage,
  MakeRemoteListImage,
} from '../usecases';

const MakeListMap: React.FC = () => {
  return (
    <ListMap
      visibleDenunciation={useVisible()}
      deleteDenunciation={MakeRemoteDeleteDenunciation()}
      deleteImage={MakeRemoteDeleteImage()}
      listImage={MakeRemoteListImage()}
    />
  );
};

export default MakeListMap;
