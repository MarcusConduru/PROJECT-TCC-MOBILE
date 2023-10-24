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
import {VisibleDenunciation} from '../../hooks';
import {DeleteDenunciation} from '../../../domain/usecases';

type Props = {
  visibleDenunciation: VisibleDenunciation;
  deleteDenunciation: DeleteDenunciation;
};

const ListMap: React.FC<Props> = ({
  visibleDenunciation,
  deleteDenunciation,
}: Props) => {
  const {denunciation} = visibleDenunciation;

  return (
    <ListContainer>
      <ListView>
        <ListTitle>Marcações</ListTitle>
        <ListSub>Todas as suas marcações de denúncias</ListSub>
      </ListView>
      {denunciation.length ? (
        <ListGesture>
          <FlatList
            data={denunciation}
            keyExtractor={item => item.key}
            renderItem={({item}) => (
              <ListMapItem item={item} deleteReport={deleteDenunciation} />
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
