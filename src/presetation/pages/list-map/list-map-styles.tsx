import {GestureHandlerRootView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const ListContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ListGesture = styled(GestureHandlerRootView)``;

export const ListText = styled.Text`
  color: #888;
  font-size: 18px;
  margin-top: 10px;
  font-family: 'Lato-Regular';
`;

export const ListTitle = styled.Text`
  color: #000;
  font-size: 28px;
  margin-top: 10px;
  font-family: 'Lato-Bold';
  margin-bottom: 10px;
`;

export const ListSub = styled.Text`
  color: #000;
  font-size: 20px;
  margin-top: 10px;
  font-family: 'Lato-Bold';
`;

export const ListView = styled.View`
  padding: 5px;
`;

export const ListDog = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ListAlert = styled.Text`
  font-size: 20px;
  color: #000;
  font-family: 'Lato-Bold';
  margin-top: 15px;
`;
