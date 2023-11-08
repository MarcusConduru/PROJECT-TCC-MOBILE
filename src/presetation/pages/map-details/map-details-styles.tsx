import {RectButton} from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';

export const DetailsContainer = styled.ScrollView``;

export const DetailsContainerImages = styled.View`
  height: 240px;
`;

export const DetailsImages = styled.Image`
  width: 100%;
  height: 240px;
  object-fit: contain;
`;

export const DetailsContent = styled.View`
  padding: 24px;
`;

export const DetailsTitle = styled.Text`
  color: #eb2f64;
  font-size: 34px;
  font-family: 'Lato-Bold';
`;

export const DetailsBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2px;
`;

export const DetailsTag = styled.Text`
  color: #eb2f64;
  font-size: 18px;
  font-family: 'Lato-Bold';
`;

export const DetailsDescription = styled.Text`
  font-family: 'Lato-Regular';
  color: #eb2f64;
  font-size: 16px;
`;

export const DetailsMapContainer = styled.View`
  border-radius: 10px;
  border-width: 1.2px;
  border-color: #ff85a8;
  margin-top: 40px;
  background-color: #ffc2d3;
`;

export const DetailsMapView = styled(MapView)`
  width: 100%;
  height: 160px;
`;

export const DetailsContainerMessage = styled(RectButton)`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailsRoutesText = styled.Text`
  font-family: 'Lato-Bold';
  color: #eb2f64;
`;

export const DetailsContainerMensagem = styled.ScrollView`
  background-color: #ffc2d3;
  margin-top: 32px;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 5px 15px 0px;
  height: 300px;
`;

export const DetailsContentMensagem = styled.View`
  margin-bottom: 10px;
  padding: 7px 15px;
  border-radius: 20px;
  max-width: 90%;
`;

export const DetailsMensagem = styled.Text`
  font-family: 'Lato-Regular';
  color: #fff;
  font-size: 15px;
`;

export const DetailsView = styled.View`
  position: relative;
`;

export const DetailsInput = styled.TextInput`
  padding: 10px 20px;
  height: 45px;
  margin: 12px 0;
  color: #000;
  border-radius: 20px;
  background-color: #ffc2d3;
  vertical-align: top;
  padding-right: 60px;
  width: 100%;
  font-size: 16px;
`;

export const DetailsMensagemSend = styled.TouchableOpacity`
  position: absolute;
  bottom: 8px;
  right: 0;
  background-color: #eb2f64;
  padding: 14px;
  border-radius: 20px;
`;

export const DetailsIcon = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  background-color: #f75683;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 20;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
