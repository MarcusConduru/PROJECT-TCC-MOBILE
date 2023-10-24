import React from 'react';
import {MapSeach} from '../../../presetation/pages';
import {useVisible} from '../../../presetation/hooks/use-visible';

const MakeMapSeach: React.FC = () => {
  return <MapSeach visibleDenunciation={useVisible()} />;
};

export default MakeMapSeach;
