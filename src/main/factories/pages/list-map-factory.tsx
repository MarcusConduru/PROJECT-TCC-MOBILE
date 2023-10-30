import React from 'react';
import {ListMap} from '../../../presetation/pages';
import {useVisible} from '../../../presetation/hooks';
import {
  MakeRemoteDeleteDenunciation,
  MakeRemoteDeleteImage,
  MakeRemoteDeleteMessage,
  MakeRemoteListImage,
} from '../usecases';

export const MakeListMap: React.FC = () => {
  return (
    <ListMap
      visibleDenunciation={useVisible()}
      deleteDenunciation={MakeRemoteDeleteDenunciation()}
      deleteImage={MakeRemoteDeleteImage()}
      listImage={MakeRemoteListImage()}
      deleteMessage={MakeRemoteDeleteMessage()}
    />
  );
};
