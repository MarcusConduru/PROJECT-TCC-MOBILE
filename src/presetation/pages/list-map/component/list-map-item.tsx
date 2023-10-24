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
import {DeleteDenunciation} from '../../../../domain/usecases';
import {Alert} from 'react-native';

type Props = {
  item: VisibleReport;
  deleteReport: DeleteDenunciation;
};

const ListMapItem: React.FC<Props> = ({item, deleteReport}: Props) => {
  const navigation = useNavigation<any>();

  const DeleteReport = (id: string) => {
    deleteReport
      .delete(id)
      .then(() => {
        Alert.alert('Denúncia apagada com sucesso!');
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
          navigation.navigate('MapDetails');
        }}>
        <ListItemWritten>{item.title}</ListItemWritten>
      </ListItemTouch>
    </ListItemSwipeable>
  );
};

export default ListMapItem;
