/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import firebase from 'firebase/compat';
import {
  DenunciationBox,
  DenunciationButton,
  DenunciationContainer,
  DenunciationIcon,
  DenunciationMapView,
  DenunciationText,
  DenunciationTitle,
  DenunciationView,
} from './create-denunciation-styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Marker} from 'react-native-maps';
import dogImage from '../../../img/mapDogMarker.png';
import {
  AddPhotograph,
  InputMask,
  InputSpecial,
  Loading,
} from '../../components';
import {AddDenunciation} from '../../../domain/usecases';
import {Alert, View} from 'react-native';
import {Validation} from '../../../validation/protocols';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface RouteParams {
  coords: {
    latitude: number;
    longitude: number;
  };
}

type Props = {
  addDenunciation: AddDenunciation;
  validation: Validation;
};

const CreateDenunciation: React.FC<Props> = ({
  addDenunciation,
  validation,
}: Props) => {
  const [title, setTitle] = useState('');
  const [errorTitle, setErrorTitle] = useState<any>();

  const [phone, setPhone] = useState('');
  const [errorPhone, setErrorPhone] = useState<any>();

  const [address, setAddress] = useState('');

  const [complement, setComplement] = useState('');

  const [description, setDescription] = useState('');
  const [errorDescription, setErrorDescription] = useState<any>();

  const [photograph, setPhotograph] = useState('');
  const [errorPhotograph, setErrorPhotograph] = useState<any>();

  const {coords} = useRoute().params as RouteParams;
  const navigation = useNavigation<any>();
  const [isLoading, setIsLoading] = useState(false);

  const uploadImage = async (uri: any, imageName: string) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase
      .storage()
      .ref(`${coords.latitude + coords.longitude}`)
      .child(imageName);
    ref.put(blob);
  };

  const CreateNewDenutiation = () => {
    const input = {photograph, title, description, phone};
    const errorTitleInput = validation.validate('title', input);
    const errorPhoneInput = validation.validate('phone', input);
    const errorDescriptionInput = validation.validate('description', input);
    const errorPhotographInput = validation.validate('photograph', input);

    setErrorTitle(errorTitleInput);
    setErrorPhotograph(errorPhotographInput);
    setErrorDescription(errorDescriptionInput);
    setErrorPhone(errorPhoneInput);

    if (
      isLoading ||
      !!errorTitleInput ||
      !!errorPhoneInput ||
      !!errorDescriptionInput ||
      !!errorPhotographInput
    ) {
      return;
    }

    uploadImage(
      photograph,
      photograph.substring(photograph.lastIndexOf('/') + 1),
    );

    setIsLoading(true);

    addDenunciation
      .add({
        userID: firebase.auth().currentUser?.uid || '',
        title: title,
        phone: phone,
        address: address,
        complement: complement,
        description: description,
        latitude: coords.latitude,
        longitude: coords.longitude,
      })
      .then(() => {
        Alert.alert('Denúncia criada com sucesso!');
        navigation.navigate('MapSeach');
      })
      .catch(() => {
        Alert.alert('Algo de errado aconteceu. Tente novamente em breve');
      });
  };

  return (
    <>
      <DenunciationContainer>
        <DenunciationBox style={{borderBottomWidth: 2}}>
          <DenunciationIcon onPress={navigation.goBack}>
            <Icon name="arrow-left" size={24} color={'#fc6690'} />
          </DenunciationIcon>
          <DenunciationTitle>Faça a sua Denúncia</DenunciationTitle>
          <View style={{width: 36}} />
        </DenunciationBox>

        <InputSpecial
          change={setTitle}
          value={title}
          name={'Nome da Denúncia*'}
          error={errorTitle}
        />
        <InputMask
          change={setPhone}
          value={phone}
          name={'Telefone'}
          error={errorPhone}
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
          name={'Descrição*'}
          error={errorDescription}
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
          error={errorPhotograph}
          setPhotograph={setPhotograph}
          photograph={photograph}
        />

        <DenunciationButton onPress={CreateNewDenutiation}>
          <DenunciationText>Cadastrar</DenunciationText>
        </DenunciationButton>
      </DenunciationContainer>
      {isLoading && <Loading />}
    </>
  );
};

export default CreateDenunciation;
