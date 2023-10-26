import React, {useEffect, useRef, useState} from 'react';
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
import {VisibleDenunciation, VisibleReport} from '../../hooks';
import {ListImage} from '../../../domain/usecases';
import {useRoute} from '@react-navigation/native';
import {Alert} from 'react-native';

type Props = {
  visibleDenunciation: VisibleDenunciation;
  listImage: ListImage;
};

const MapDetails: React.FC<Props> = ({
  visibleDenunciation,
  listImage,
}: Props) => {
  const scrollView = useRef<ScrollView>(null);
  const [mensagem, setMensagem] = useState('');
  const {key} = useRoute<any>().params;
  const [image, setImage] = useState('');
  const {denunciation} = visibleDenunciation;
  const {latitude, longitude, title, description, address, complement, phone} =
    denunciation.find(e => e.key === key) as VisibleReport;

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
  });

  return (
    <GestureHandlerRootView>
      <DetailsContainer>
        <DetailsContainerImages>
          <DetailsImages source={{uri: image}} />
        </DetailsContainerImages>

        <DetailsContent>
          <DetailsTitle>{title}</DetailsTitle>
          {address && (
            <DetailsBox>
              <DetailsTag>Endereço: </DetailsTag>
              <DetailsDescription>{address}</DetailsDescription>
            </DetailsBox>
          )}
          {complement && (
            <DetailsBox>
              <DetailsTag>Complemento: </DetailsTag>
              <DetailsDescription>{complement}</DetailsDescription>
            </DetailsBox>
          )}
          <DetailsBox>
            <DetailsTag>Descrição: </DetailsTag>
            <DetailsDescription>{description}</DetailsDescription>
          </DetailsBox>
          {phone && (
            <DetailsBox>
              <DetailsTag>Contato: </DetailsTag>
              <DetailsDescription>{phone}</DetailsDescription>
            </DetailsBox>
          )}

          <DetailsMapContainer>
            <DetailsMapView
              initialRegion={{
                latitude,
                longitude,
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
                  latitude: -9.4019328,
                  longitude: -40.4952273,
                }}
              />
            </DetailsMapView>

            <DetailsContainerMessage onPress={() => {}}>
              <DetailsRoutesText>Ver no Google Maps</DetailsRoutesText>
            </DetailsContainerMessage>
          </DetailsMapContainer>

          <DetailsContainerMensagem
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
            ref={scrollView}
            onContentSizeChange={() => {
              scrollView.current?.scrollToEnd({animated: true});
            }}>
            <DetailsContentMensagem
              style={{alignSelf: 'flex-start', backgroundColor: '#eb2f64'}}>
              <DetailsMensagem>Mensagem aleatoria</DetailsMensagem>
            </DetailsContentMensagem>
            <DetailsContentMensagem
              style={{alignSelf: 'flex-end', backgroundColor: '#666'}}>
              <DetailsMensagem>Mensagem aleatoria</DetailsMensagem>
            </DetailsContentMensagem>
            <DetailsContentMensagem
              style={{alignSelf: 'flex-start', backgroundColor: '#eb2f64'}}>
              <DetailsMensagem>Mensagem aleatoria</DetailsMensagem>
            </DetailsContentMensagem>
            <DetailsContentMensagem
              style={{alignSelf: 'flex-start', backgroundColor: '#eb2f64'}}>
              <DetailsMensagem>Mensagem aleatoria</DetailsMensagem>
            </DetailsContentMensagem>
            <DetailsContentMensagem
              style={{alignSelf: 'flex-end', backgroundColor: '#666'}}>
              <DetailsMensagem>Mensagem aleatoria</DetailsMensagem>
            </DetailsContentMensagem>
            <DetailsContentMensagem
              style={{alignSelf: 'flex-end', backgroundColor: '#666'}}>
              <DetailsMensagem>Mensagem aleatoria</DetailsMensagem>
            </DetailsContentMensagem>
            <DetailsContentMensagem
              style={{alignSelf: 'flex-end', backgroundColor: '#666'}}>
              <DetailsMensagem>Mensagem aleatoria</DetailsMensagem>
            </DetailsContentMensagem>
            <DetailsContentMensagem
              style={{alignSelf: 'flex-end', backgroundColor: '#666'}}>
              <DetailsMensagem>Mensagem aleatoria</DetailsMensagem>
            </DetailsContentMensagem>
            <DetailsContentMensagem
              style={{alignSelf: 'flex-end', backgroundColor: '#666'}}>
              <DetailsMensagem>Mensagem aleatoria</DetailsMensagem>
            </DetailsContentMensagem>
            <DetailsContentMensagem
              style={{alignSelf: 'flex-end', backgroundColor: '#666'}}>
              <DetailsMensagem>Mensagem aleatoria</DetailsMensagem>
            </DetailsContentMensagem>
            <DetailsContentMensagem
              style={{alignSelf: 'flex-end', backgroundColor: '#666'}}>
              <DetailsMensagem>Mensagem aleatoria10</DetailsMensagem>
            </DetailsContentMensagem>
          </DetailsContainerMensagem>

          <DetailsView>
            <DetailsInput
              placeholder="Insira sua mensagem aqui"
              value={mensagem}
              onChangeText={setMensagem}
              multiline
            />
            <DetailsMensagemSend onPress={() => {}}>
              <Icon name="send" size={23} color={'#fff'} />
            </DetailsMensagemSend>
          </DetailsView>
        </DetailsContent>
      </DetailsContainer>
    </GestureHandlerRootView>
  );
};

export default MapDetails;
