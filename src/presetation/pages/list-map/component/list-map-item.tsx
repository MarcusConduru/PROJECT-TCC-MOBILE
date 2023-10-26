/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ListItemButton,
  ListItemSwipeable,
  ListItemTouch,
  ListItemWritten,
} from './list-map-item-styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {VisibleReport} from '../../../hooks';
import {
  DeleteDenunciation,
  DeleteImage,
  ListImage,
} from '../../../../domain/usecases';
import {Alert} from 'react-native';

type Props = {
  item: VisibleReport;
  deleteDenunciation: DeleteDenunciation;
  deleteImage: DeleteImage;
  listImage: ListImage;
};

const ListMapItem: React.FC<Props> = ({
  item,
  deleteDenunciation,
  deleteImage,
  listImage,
}: Props) => {
  const navigation = useNavigation<any>();

  const DeleteReport = (key: string) => {
    listImage
      .loadAll(key)
      .then(imageRef => {
        const image = imageRef.items[0].fullPath.replace(key + '/', '');
        Promise.all([
          deleteDenunciation.delete(key),
          deleteImage.delete({image, key}),
        ])
          .then(() => {
            Alert.alert('Denúncia apagada com sucesso!');
          })
          .catch(() => {
            Alert.alert('Algo de errado aconteceu. Tente novamente em breve');
          });
      })
      .catch(() => {
        Alert.alert('Algo de errado aconteceu. Tente novamente em breve');
      });
  };

  return (
    <ListItemSwipeable
      containerStyle={{borderRightWidth: 5, borderRightColor: 'red'}}
      renderRightActions={() => (
        <ListItemButton
          onPress={() => {
            DeleteReport(item.key);
          }}>
          <Icon name="trash-alt" size={24} color={'#fff'} />
        </ListItemButton>
      )}>
      <ListItemTouch
        onPress={() => {
          navigation.navigate('MapDetails', {key: item.key});
        }}>
        <ListItemWritten>{item.title}</ListItemWritten>
      </ListItemTouch>
    </ListItemSwipeable>
  );
};

export default ListMapItem;
