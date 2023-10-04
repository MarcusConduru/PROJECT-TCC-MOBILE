/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ListContainer, ListGesture} from './list-map-styles';
import {FlatList} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Text} from 'react-native-elements';

const ListMap: React.FC = () => {
  const listUser = [
    {
      key: '1',
      latitude: -9.4019328,
      longitude: -40.4952273,
      title: 'Teste',
    },
  ];

  return (
    <ListContainer>
      <ListGesture>
        <FlatList
          data={listUser}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <Swipeable
              containerStyle={{borderRightWidth: 5, borderRightColor: 'red'}}
              renderRightActions={() => (
                <RectButton onPress={() => {}}>
                  <Icon name="trash-alt" size={24} color={'#fff'} />
                </RectButton>
              )}>
              <RectButton onPress={() => {}}>
                <Text>{item.title}</Text>
              </RectButton>
            </Swipeable>
          )}
        />
      </ListGesture>
      {/* <View style={{alignItems: 'center'}}>
        <MaterialIcons name="pets" size={80} color="#888" />
        <Text style={styles.text}>Você ainda não tem denúncia</Text>
      </View> */}
    </ListContainer>
  );
};

export default ListMap;
