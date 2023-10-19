import React, {useContext, useEffect, useState} from 'react';
import {
  MapButton,
  MapLogout,
  MapContainer,
  MapMapView,
  MapCallout,
  MapText,
} from './map-seach-styles';
import {Callout, Marker, PROVIDER_GOOGLE, Region} from 'react-native-maps';
import {PermissionsAndroid} from 'react-native';
import dogImage from '../../../img/mapDogMarker.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import contextApi from '../../context/contextApi';
import {AccountModel} from '../../../domain/models';

const MapSeach: React.FC = () => {
  const [region, setRegion] = useState<Region>();
  const [account, setAccount] = useState<AccountModel>();
  const navigation = useNavigation<any>();
  const {getCurrentAccount} = useContext(contextApi);

  useEffect(() => {
    getCurrentAccount().then(el => setAccount(JSON.parse(el)));
  }, [getCurrentAccount]);

  useEffect(() => {
    Geolocation.getCurrentPosition(() => {
      setRegion({
        // latitude: info.coords.latitude,
        // longitude: info.coords.longitude,
        latitude: -9.4019328,
        longitude: -40.4952273,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
      });
    });
  }, []);

  const permissionAccess = () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  };

  const handleNavigateToCreateDenunciation = () => {
    navigation.navigate('SelectMap');
  };

  return (
    <MapContainer>
      <MapMapView
        onMapReady={permissionAccess}
        provider={PROVIDER_GOOGLE}
        // showsUserLocation
        zoomEnabled={true}
        loadingEnabled={true}
        region={region}>
        <Marker
          calloutAnchor={{
            x: 0.5,
            y: 1.4,
          }}
          icon={dogImage}
          coordinate={{
            latitude: -9.4019328,
            longitude: -40.4952273,
          }}>
          <Callout tooltip onPress={() => {}}>
            <MapCallout>
              <MapText>teste</MapText>
            </MapCallout>
          </Callout>
        </Marker>
      </MapMapView>

      <MapButton onPress={handleNavigateToCreateDenunciation}>
        <Icon name="search-plus" size={28} color={'#fff'} />
      </MapButton>

      <MapLogout onPress={() => {}}>
        <Icon name="sign-out-alt" size={16} color={'#fff'} />
      </MapLogout>
    </MapContainer>
  );
};

export default MapSeach;
