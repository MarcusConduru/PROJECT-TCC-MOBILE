/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  InputSpecialContainer,
  InputSpecialText,
  InputSpecialView,
} from './input-special-styles';
import {Label} from '../../components';

type Props = {
  change: React.Dispatch<React.SetStateAction<any>>;
  value: string;
  name: string;
  error?: string;
  multiline?: boolean;
};

const InputSpecial: React.FC<Props> = ({
  change,
  name,
  value,
  error,
  multiline = false,
}: Props) => {
  return (
    <>
      <Label name={name} />
      <InputSpecialView>
        <InputSpecialContainer
          style={{
            height: name === 'Descrição*' ? 130 : 40,
            textAlignVertical: name === 'Descrição*' ? 'top' : 'auto',
            backgroundColor: error ? '#ff9cb8' : '#fff',
          }}
          value={value}
          multiline={multiline}
          onChangeText={change}
        />
      </InputSpecialView>
      {error && <InputSpecialText>{error}</InputSpecialText>}
    </>
  );
};

export default InputSpecial;
