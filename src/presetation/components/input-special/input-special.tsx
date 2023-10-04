/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {InputSpecialContainer, InputSpecialView} from './input-special-styles';
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
          style={[
            name === 'Descrição' && {height: 130, textAlignVertical: 'top'},
            !!error && {borderColor: '#c73a3a'},
          ]}
          value={value}
          multiline={multiline}
          onChangeText={change}
        />
      </InputSpecialView>
    </>
  );
};

export default InputSpecial;
