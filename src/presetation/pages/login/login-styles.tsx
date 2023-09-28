import styled from 'styled-components/native';
import {Link} from '@react-navigation/native';

export const LoginContainer = styled.View`
  flex: 1;
  background-color: #f75683;
  align-items: center;
  justify-content: center;
`;

export const LoginImage = styled.Image`
  height: 250px;
  object-fit: contain;
  margin-top: -80px;
`;

export const LoginIcon = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  left: 15px;
`;

export const LoginText = styled.Text`
  font-size: 15px;
  margin-top: 5px;
  color: #fff;
`;

export const LoginLink = styled(Link)`
  margin-top: 5px;
  color: #fff;
  font-weight: bold;
`;
