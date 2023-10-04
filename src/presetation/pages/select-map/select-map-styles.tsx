import MapView from 'react-native-maps';
import styled from 'styled-components/native';

export const SelectContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const SelectMapView = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const SelectText = styled.Text`
  color: #fff;
  font-family: 'Lato-Regular';
  font-size: 18px;
`;

export const SelectButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 30px;
  width: 70%;
  height: 46px;
  background-color: #f75683;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const SelectIcon = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  background-color: #f75683;
  position: absolute;
  top: 10px;
  left: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const SelectView = styled.View`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 46px;
  background-color: #f75683;
  justify-content: center;
  align-items: center;
`;
