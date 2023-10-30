/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import firebase from '../../../infra/services/connection';
import {
  DetailsBox,
  DetailsContainer,
  DetailsContainerImages,
  DetailsContainerMensagem,
  DetailsContainerMessage,
  DetailsContent,
  DetailsContentMensagem,
  DetailsDescription,
  DetailsImages,
  DetailsInput,
  DetailsMapContainer,
  DetailsMapView,
  DetailsMensagem,
  DetailsMensagemSend,
  DetailsRoutesText,
  DetailsTag,
  DetailsTitle,
  DetailsView,
} from './map-details-styles';
import dogImage from '../../../img/mapDogMarker.png';
import {Marker} from 'react-native-maps';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {VisibleDenunciation, VisibleMessage, VisibleReport} from '../../hooks';
import {AddMessage, ListImage} from '../../../domain/usecases';
import {useRoute} from '@react-navigation/native';
import {Alert, Linking, StyleSheet} from 'react-native';
import {Loading} from '../../components';

type Props = {
  visibleDenunciation: VisibleDenunciation;
  listImage: ListImage;
  addMessage: AddMessage;
  visibleMessage: VisibleMessage;
};

const MapDetails: React.FC<Props> = ({
  visibleDenunciation,
  listImage,
  addMessage,
  visibleMessage,
}: Props) => {
  const scrollView = useRef<ScrollView>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [communication, setCommunication] = useState('');
  const {key} = useRoute<any>().params;
  const [image, setImage] = useState('');
  const {denunciation} = visibleDenunciation;
  const {message} = visibleMessage;
  const user = firebase.auth().currentUser;
  const report = denunciation.find(e => e.key === key) as VisibleReport;

  useEffect(() => {
    listImage
      .loadAll(key)
      .then(async refImage => {
        refImage.items[0].getDownloadURL().then(figure => {
          setImage(figure);
        });
      })
      .catch(() => {
        Alert.alert('Algo de errado aconteceu. Tente novamente em breve');
      });
  }, []);

  const openLocalizationInGoogleMaps = () => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${report?.latitude},${report?.longitude}`,
    );
  };

  const handleSendMenssge = () => {
    if (isLoading || !communication) {
      return;
    }

    setIsLoading(true);
    addMessage
      .add({
        key,
        email: user?.email || '',
        message: communication,
        name: user?.email?.split('@')[0] || '',
        uid: user?.uid || '',
      })
      .then(() => {
        setIsLoading(false);
        setCommunication('');
      })
      .catch(() => {
        setIsLoading(false);
        Alert.alert('Algo de errado aconteceu. Tente novamente em breve');
      });
  };

  return (
    <GestureHandlerRootView>
      <DetailsContainer>
        <DetailsContainerImages>
          {image && <DetailsImages source={{uri: image}} />}
        </DetailsContainerImages>

        <DetailsContent>
          <DetailsTitle>{report?.title}</DetailsTitle>
          {report?.address && (
            <DetailsBox>
              <DetailsTag>Endereço: </DetailsTag>
              <DetailsDescription>{report.address}</DetailsDescription>
            </DetailsBox>
          )}
          {report?.complement && (
            <DetailsBox>
              <DetailsTag>Complemento: </DetailsTag>
              <DetailsDescription>{report.complement}</DetailsDescription>
            </DetailsBox>
          )}
          <DetailsBox>
            <DetailsTag>Descrição: </DetailsTag>
            <DetailsDescription>{report?.description}</DetailsDescription>
          </DetailsBox>
          {report?.phone && (
            <DetailsBox>
              <DetailsTag>Contato: </DetailsTag>
              <DetailsDescription>{report.phone}</DetailsDescription>
            </DetailsBox>
          )}

          {report && (
            <DetailsMapContainer>
              <DetailsMapView
                initialRegion={{
                  latitude: report?.latitude,
                  longitude: report?.longitude,
                  latitudeDelta: 0.008,
                  longitudeDelta: 0.008,
                }}
                zoomEnabled={false}
                pitchEnabled={false}
                scrollEnabled={false}
                rotateEnabled={false}
                loadingEnabled={true}>
                <Marker
                  icon={dogImage}
                  coordinate={{
                    latitude: report?.latitude,
                    longitude: report?.longitude,
                  }}
                />
              </DetailsMapView>

              <DetailsContainerMessage onPress={openLocalizationInGoogleMaps}>
                <DetailsRoutesText>Ver no Google Maps</DetailsRoutesText>
              </DetailsContainerMessage>
            </DetailsMapContainer>
          )}

          <DetailsContainerMensagem
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
            ref={scrollView}
            onContentSizeChange={() => {
              scrollView.current?.scrollToEnd({animated: true});
            }}>
            {message.map(value => (
              <DetailsContentMensagem
                key={value.key}
                style={
                  value.user.uid === firebase.auth().currentUser?.uid
                    ? styled.user
                    : styled.outherUser
                }>
                <DetailsMensagem>{value.message}</DetailsMensagem>
              </DetailsContentMensagem>
            ))}
          </DetailsContainerMensagem>

          <DetailsView>
            <DetailsInput
              placeholder="Insira sua mensagem aqui"
              value={communication}
              onChangeText={setCommunication}
              multiline
            />
            <DetailsMensagemSend onPress={handleSendMenssge}>
              <Icon name="send" size={23} color={'#fff'} />
            </DetailsMensagemSend>
          </DetailsView>
        </DetailsContent>
      </DetailsContainer>
      {isLoading && <Loading />}
    </GestureHandlerRootView>
  );
};

export default MapDetails;

const styled = StyleSheet.create({
  user: {
    alignSelf: 'flex-start',
    backgroundColor: '#eb2f64',
  },
  outherUser: {
    alignSelf: 'flex-end',
    backgroundColor: '#666666',
  },
});
