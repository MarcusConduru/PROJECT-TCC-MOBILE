import React from 'react';
import {InputContainer} from './input-styles';
import {Dimensions} from 'react-native';

type Props = {
  value: string;
  change: React.Dispatch<React.SetStateAction<any>>;
  secure?: boolean;
};

const Input: React.FC<Props> = ({change, value, secure = false}: Props) => {
  return (
    <InputContainer
      secureTextEntry={secure}
      style={{width: Dimensions.get('window').width - 60}}
      onChangeText={change}
      value={value}
    />
  );
};

export default Input;
