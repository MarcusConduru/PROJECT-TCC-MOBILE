import {RectButton, Swipeable} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const ListItemSwipeable = styled(Swipeable)``;

export const ListItemButton = styled(RectButton)`
  background-color: red;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

export const ListItemTouch = styled(RectButton)`
  flex: 1;
  background-color: #fff;
  padding: 18px 10px;
`;

export const ListItemWritten = styled.Text`
  font-size: 18px;
  color: #222;
  line-height: 30px;
  font-family: 'Lato-Regular';
  margin: 5px;
`;
