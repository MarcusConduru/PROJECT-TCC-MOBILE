import React from 'react';
import {
  ProtectionContent,
  ProtectionImage,
  ProtectionItemContainer,
  ProtectionView,
} from './protection-item-styles';
import {View} from 'react-native';
import {Separator} from '../../../../components';

type Props = {
  data: {
    penalty: Array<{
      text: string;
      image: any;
    }>;
  };
};

const ProtectionItem: React.FC<Props> = ({data}: Props) => {
  return (
    <ProtectionItemContainer>
      {data.penalty.map(penalty => (
        <View key={penalty.text}>
          <ProtectionView>
            <ProtectionImage source={penalty.image} />
            <ProtectionContent>{penalty.text}</ProtectionContent>
          </ProtectionView>
          <Separator />
        </View>
      ))}
    </ProtectionItemContainer>
  );
};

export default ProtectionItem;
