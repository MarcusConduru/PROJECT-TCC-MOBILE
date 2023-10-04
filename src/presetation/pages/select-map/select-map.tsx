import React, {useEffect, useState} from 'react';
import {
  SelectButton,
  SelectContainer,
  SelectIcon,
  SelectMapView,
  SelectText,
  SelectView,
} from './select-map-styles';
import {
  PROVIDER_GOOGLE,
  MapPressEvent,
  Marker,
  Region,
} from 'react-native-maps';
import dogImage from '../../../img/mapDogMarker.png';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SelectMap: React.FC = () => {
  const [coords, setCoords] = useState({latitude: 0, longitude: 0});
  const [region, setRegion] = useState<Region>();
  const navigation = useNavigation<any>();

  useEffect(() => {
    Geolocation.getCurrentPosition(() => {
      setRegion({
        // latitude: info.coords.latitude,
        // longitude: info.coords.longitude,
        latitude: -9.4019328,
        longitude: -40.4952273,
        latitudeDelta: 0.0008,
        longitudeDelta: 0.0008,
      });
    });
  }, []);

  const positionMap = (event: MapPressEvent) => {
    setCoords(event.nativeEvent.coordinate);
  };

  const handleNavigateToCreateDenunciation = () => {
    navigation.navigate('CreateDenunciation', {coords});
  };

  return (
    <SelectContainer>
      <SelectMapView
        provider={PROVIDER_GOOGLE}
        zoomEnabled={true}
        loadingEnabled={true}
        // showsUserLocation
        region={region}
        onPress={positionMap}>
        {coords.latitude !== 0 && (
          <Marker
            icon={dogImage}
            coordinate={{
              latitude: coords.latitude,
              longitude: coords.longitude,
            }}
          />
        )}
      </SelectMapView>
      <SelectIcon onPress={navigation.goBack}>
        <Icon name="arrow-left" size={24} color={'#fff'} />
      </SelectIcon>
      {coords.latitude !== 0 ? (
        <SelectButton onPress={handleNavigateToCreateDenunciation}>
          <SelectText>Proximo</SelectText>
        </SelectButton>
      ) : (
        <SelectView>
          <SelectText>Qual o lugar da denuncia?</SelectText>
        </SelectView>
      )}
    </SelectContainer>
  );
};

export default SelectMap;
