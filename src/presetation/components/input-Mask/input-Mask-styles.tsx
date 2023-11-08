import {TextInputMask} from 'react-native-masked-text';
import styled from 'styled-components/native';

export const InputMaskContainer = styled(TextInputMask)`
  padding: 10px 20px;
  height: 40px;
  margin: 12px;
  color: #000;
  border-radius: 20px;
  background-color: #fff;
  font-family: 'Lato-Regular';
`;

export const InputMaskView = styled.View`
  position: relative;
  justify-content: center;
`;

export const InputMaskText = styled.Text`
  color: white;
  font-family: 'Lato-Bold';
  font-size: 16px;
  margin: -5px 12px 10px;
`;
