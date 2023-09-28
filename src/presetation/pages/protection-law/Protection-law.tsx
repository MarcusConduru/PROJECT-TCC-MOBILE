/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import catImage from '../../../img/cat.jpg';
import rabbitImage from '../../../img/rabbit.jpg';
import dogImage from '../../../img/dogG.jpg';
import lizardImage from '../../../img/lizard.jpg';
import mistreatmentImage from '../../../img/mausTratos.jpg';
import {WebView} from 'react-native-webview';

import {
  ProtectionButton,
  ProtectionContainer,
  ProtectionInfo,
  ProtectionInformation,
  ProtectionMistreatment,
  ProtectionText,
} from './protection-law-styles';
import {ProtectionItem} from './component';

const ProtectionLaw: React.FC = () => {
  const [web, setWeb] = useState(false);

  const handleShowWebView = () => {
    setWeb(true);
  };

  const TaskList = [
    {
      id: '1',
      penalty: [
        {
          text: 'Art. 32. Praticar ato de abuso, maus-tratos, ferir ou mutilar animais silvestres, domésticos ou domesticados, nativos ou exóticos: Pena - detenção, de três meses a um ano, e multa.',
          image: catImage,
        },
        {
          text: '§ 1º. Incorre nas mesmas penas quem realiza experiência dolorosa ou cruel em animal vivo, ainda que para fins didáticos ou científicos, quando existirem recursos alternativos.',
          image: rabbitImage,
        },
        {
          text: '§ 1º-A Quando se tratar de cão ou gato, a pena para as condutas descritas no caput deste artigo será de reclusão, de 2 (dois) a 5 (cinco) anos, multa e proibição da guarda. (Incluído pela Lei nº 14.064, de 2020)',
          image: dogImage,
        },
        {
          text: '§ 2º. “A pena é aumentada de um sexto a um terço, se ocorre morte do animal.”',
          image: lizardImage,
        },
      ],
    },
  ];

  return (
    <ProtectionContainer>
      {web ? (
        <WebView
          source={{
            uri: 'https://servicos.sds.pe.gov.br/delegacia/bo.flow?execution=e1s1',
          }}
          style={{flex: 1}}
        />
      ) : (
        <>
          <ProtectionMistreatment source={mistreatmentImage} />
          <ProtectionText>Lei 9.605/98</ProtectionText>
          <FlatList
            data={TaskList}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ProtectionItem data={item} />}
          />
          <ProtectionInformation>
            <ProtectionInfo>Para mais informações, acesse:</ProtectionInfo>
            <ProtectionButton
              title="Secretaria de Defesa Social"
              onPress={handleShowWebView}
            />
          </ProtectionInformation>
        </>
      )}
    </ProtectionContainer>
  );
};

export default ProtectionLaw;
