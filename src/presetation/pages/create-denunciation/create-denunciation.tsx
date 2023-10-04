/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  DenunciationButton,
  DenunciationContainer,
  DenunciationMapView,
  DenunciationText,
  DenunciationTitle,
  DenunciationView,
} from './create-denunciation-styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TouchableOpacity, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import dogImage from '../../../img/mapDogMarker.png';
import {AddPhotograph, InputMask, InputSpecial} from '../../components';
import {Text} from 'react-native-elements';

interface RouteParams {
  coords: {
    latitude: number;
    longitude: number;
  };
}

const CreateDenunciation: React.FC = () => {
  const [title, setTitle] = useState('');
  const [erroTitle, setErroTitle] = useState<any>();

  const [phone, setPhone] = useState('');
  const [erroPhone, setErrorPhone] = useState<any>();

  const [address, setAddress] = useState('');

  const [complement, setComplement] = useState('');

  const [description, setDescription] = useState('');
  const [erroDescription, setErroDescription] = useState<any>();

  const [photograph, setPhotograph] = useState('');
  const [erroPhotograph, setErroPhotograph] = useState<any>();

  const {coords} = useRoute().params as RouteParams;
  const navigation = useNavigation();

  return (
    <DenunciationContainer>
      <DenunciationTitle style={{borderBottomWidth: 2}}>
        Faça a Denúncia
      </DenunciationTitle>
      <InputSpecial
        change={setTitle}
        value={title}
        name={'Nome da Denúncia*'}
        error={erroTitle}
      />
      <InputMask
        change={setPhone}
        value={phone}
        name={'Telefone'}
        error={erroPhone}
      />
      <InputSpecial change={setAddress} value={address} name={'Endereço'} />
      <InputSpecial
        change={setComplement}
        value={complement}
        name={'Complemento'}
      />
      <InputSpecial
        change={setDescription}
        value={description}
        name={'Descrição'}
        error={erroDescription}
        multiline={true}
      />
      <DenunciationView>
        <DenunciationMapView
          initialRegion={{
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
          zoomEnabled={false}
          pitchEnabled={false}
          scrollEnabled={false}
          rotateEnabled={false}>
          <Marker
            icon={dogImage}
            coordinate={{
              latitude: coords.latitude,
              longitude: coords.longitude,
            }}
          />
        </DenunciationMapView>
      </DenunciationView>

      <AddPhotograph
        error={erroPhotograph}
        setPhotograph={setPhotograph}
        photograph={photograph}
      />

      <DenunciationButton onPress={() => {}}>
        <DenunciationText>Cadastrar</DenunciationText>
      </DenunciationButton>
    </DenunciationContainer>
  );
};

export default CreateDenunciation;
