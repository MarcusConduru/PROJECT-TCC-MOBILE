import React from 'react';
import {
  ListAlert,
  ListContainer,
  ListDog,
  ListGesture,
  ListSub,
  ListTitle,
  ListView,
} from './list-map-styles';
import {FlatList} from 'react-native';
import {ListMapItem} from './component';
import {Separator} from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ListMap: React.FC = () => {
  const listUser = [
    {
      key: '1',
      latitude: -9.4019328,
      longitude: -40.4952273,
      title: 'Teste',
    },
    {
      key: '2',
      latitude: -9.4019328,
      longitude: -40.4952273,
      title: 'Teste2',
    },
  ];

  return (
    <ListContainer>
      <ListView>
        <ListTitle>Marcações</ListTitle>
        <ListSub>Todas as suas marcações de denúncias</ListSub>
      </ListView>
      {listUser ? (
        <ListGesture>
          <FlatList
            data={listUser}
            keyExtractor={item => item.key}
            renderItem={({item}) => (
              <ListMapItem
                latitude={item.latitude}
                longitude={item.longitude}
                title={item.title}
                id={item.key}
              />
            )}
            ItemSeparatorComponent={Separator}
          />
        </ListGesture>
      ) : (
        <ListDog>
          <Icon name="dog" size={120} color={'#000'} />
          <ListAlert>Você ainda não tem denúncia</ListAlert>
        </ListDog>
      )}
    </ListContainer>
  );
};

export default ListMap;
