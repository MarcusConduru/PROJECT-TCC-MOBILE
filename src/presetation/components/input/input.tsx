/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {InputContainer, InputText} from './input-styles';
import {Dimensions, View} from 'react-native';
import Label from '../label/label';

type Props = {
  value: string;
  change: React.Dispatch<React.SetStateAction<any>>;
  secure?: boolean;
  error: string;
  name: string;
};

const Input: React.FC<Props> = ({
  change,
  value,
  secure = false,
  error,
  name,
}: Props) => {
  return (
    <View>
      <Label name={name} />
      <InputContainer
        secureTextEntry={secure}
        style={{
          width: Dimensions.get('window').width - 60,
          backgroundColor: error ? '#ff9cb8' : '#fff',
        }}
        onChangeText={change}
        value={value}
      />
      {error && <InputText>{error}</InputText>}
    </View>
  );
};

export default Input;
