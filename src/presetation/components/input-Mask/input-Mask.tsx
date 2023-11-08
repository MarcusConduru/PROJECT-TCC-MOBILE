/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  InputMaskContainer,
  InputMaskText,
  InputMaskView,
} from './input-Mask-styles';
import {Label} from '..';

type Props = {
  change: React.Dispatch<React.SetStateAction<any>>;
  value: string;
  name: string;
  error?: string;
};

const InputMask: React.FC<Props> = ({change, name, value, error}: Props) => {
  return (
    <>
      <Label name={name} />
      <InputMaskView>
        <InputMaskContainer
          keyboardType="numeric"
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
          }}
          style={{backgroundColor: error ? '#ff9cb8' : '#fff'}}
          value={value}
          onChangeText={change}
        />
        {error && <InputMaskText>{error}</InputMaskText>}
      </InputMaskView>
    </>
  );
};

export default InputMask;
