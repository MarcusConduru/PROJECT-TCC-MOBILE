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

type Props = {
  title: string;
  id: string;
  latitude: number;
  longitude: number;
};

const ListMapItem: React.FC<Props> = ({
  id,
  latitude,
  longitude,
  title,
}: Props) => {
  const navigation = useNavigation<any>();

  return (
    <ListItemSwipeable
      containerStyle={{borderRightWidth: 5, borderRightColor: 'red'}}
      renderRightActions={() => (
        <ListItemButton onPress={() => {}}>
          <Icon name="trash-alt" size={24} color={'#fff'} />
        </ListItemButton>
      )}>
      <ListItemTouch
        onPress={() => {
          navigation.navigate('MapDetails');
        }}>
        <ListItemWritten>{title}</ListItemWritten>
      </ListItemTouch>
    </ListItemSwipeable>
  );
};

export default ListMapItem;
