import React from 'react';
import {Dimensions} from 'react-native';
import {ButtonContainer, ButtonTouchable, ButtonText} from './button-styles';

interface buttonClick {
  click: any;
  name: string;
}

const button: React.FC<buttonClick> = (props: buttonClick) => {
  return (
    <ButtonContainer style={{width: Dimensions.get('window').width - 10}}>
      <ButtonTouchable onPress={props.click}>
        <ButtonText>{props.name}</ButtonText>
      </ButtonTouchable>
    </ButtonContainer>
  );
};

export default button;
