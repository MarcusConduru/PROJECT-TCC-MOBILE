import MapView from 'react-native-maps';
import styled from 'styled-components/native';

export const DenunciationContainer = styled.ScrollView`
  flex: 1;
  background-color: #fc6690;
  padding: 20px;
`;

export const DenunciationView = styled.View`
  border-width: 1px;
  overflow: hidden;
  border-radius: 20px;
  margin: 20px 0;
  border-color: #fff;
`;

export const DenunciationMapView = styled(MapView)`
  width: 100%;
  height: 150px;
`;

export const DenunciationButton = styled.TouchableOpacity`
  border-radius: 15px;
  background-color: #fff;
  height: 46px;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  width: 100%;
  align-self: center;
  margin-bottom: 36px;
`;

export const DenunciationText = styled.Text`
  color: #000;
  font-family: 'Lato-Bold';
  font-size: 18px;
`;

export const DenunciationTitle = styled.Text`
  color: #fff;
  font-family: 'Lato-Bold';
  font-size: 24px;
  border-color: #fff;
  margin-bottom: 15px;
  font-weight: bold;
`;
