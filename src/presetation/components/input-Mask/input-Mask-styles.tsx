import {TextInputMask} from 'react-native-masked-text';
import styled from 'styled-components/native';

export const InputMaskContainer = styled(TextInputMask)`
  padding: 10px 20px;
  height: 40px;
  margin: 12px;
  color: #000;
  border-radius: 20px;
  background-color: #fff;
  border-width: 2.5px;
  border-color: #f8c6d5;
  font-family: 'Lato-Regular';
`;

export const InputMaskView = styled.View`
  position: relative;
  justify-content: center;
`;
