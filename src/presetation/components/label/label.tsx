import React from 'react';
import {LabelContainer} from './label-styles';

interface labelProps {
  name: string;
}

const Label: React.FC<labelProps> = ({name}: labelProps) => {
  return <LabelContainer>{name}</LabelContainer>;
};

export default Label;
