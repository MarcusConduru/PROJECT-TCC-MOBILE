import React, {useRef, useState} from 'react';
import {
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
  DetailsTitle,
  DetailsView,
} from './map-details-styles';
import dogImage from '../../../img/mapDogMarker.png';
import Teste from '../../../img/HPcachorro.png';
import {Marker} from 'react-native-maps';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const MapDetails: React.FC = () => {
  const scrollView = useRef<ScrollView>(null);
  const [mensagem, setMensagem] = useState('');

  return (
    <GestureHandlerRootView>
      <DetailsContainer>
        <DetailsContainerImages>
          <DetailsImages source={Teste} />
        </DetailsContainerImages>

        <DetailsContent>
          <DetailsTitle>Titulo</DetailsTitle>
          {/* {!!listInfo?.address && !!listInfo.complement && <Text style={styled.description}>{listInfo?.address + ' ' + listInfo?.complement}</Text>} */}
          <DetailsDescription>Descrição</DetailsDescription>
          {/* {!!listInfo?.phone && <Text style={styled.description}>{listInfo?.phone}</Text>} */}

          <DetailsMapContainer>
            <DetailsMapView
              initialRegion={{
                latitude: -9.4019328,
                longitude: -40.4952273,
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
