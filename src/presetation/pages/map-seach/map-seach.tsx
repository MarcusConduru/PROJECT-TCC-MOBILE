import React, {useEffect, useState} from 'react';
import {
  MapButton,
  MapLogout,
  MapContainer,
  MapMapView,
  MapCallout,
  MapText
} from './map-seach-styles';
import {Callout, Marker, PROVIDER_GOOGLE, Region} from 'react-native-maps';
import {PermissionsAndroid, View} from 'react-native';
import dogImage from '../../../img/mapDogMarker.png';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Geolocation from '@react-native-community/geolocation';

const MapSeach: React.FC = () => {
  const [region, setRegion] = useState<Region>();

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
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

      <MapButton onPress={() => {}}>
        <Icon name="search-plus" size={28} color={'#fff'} />
      </MapButton>

      <MapLogout onPress={() => {}}>
        <Icon name="sign-out-alt" size={16} color={'#fff'} />
      </MapLogout>
    </MapContainer>
  );
};

export default MapSeach;
