import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const MapContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const MapMapView = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapButton = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  background-color: #f75683;
  position: absolute;
  bottom: 10px;
  left: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const MapLogout = styled.TouchableOpacity`
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

export const MapCallout = styled.View`
  width: 170px;
  height: 50px;
  background-color: #f75683;
  padding: 0 20px;
  border-radius: 10px;
  justify-content: center;
`;

export const MapText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: 'Lato-Regular';
`;
