/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  PhotographButton,
  PhotographContainer,
  PhotographContent,
  PhotographImages,
  PhotographImagesBox,
  PhotographText,
} from './add-photograph-styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Label from '../label/label';
import {launchCamera} from 'react-native-image-picker';

type Props = {
  error: string;
  photograph: string;
  setPhotograph: any;
};

const AddPhotograph: React.FC<Props> = ({
  error,
  photograph,
  setPhotograph,
}: Props) => {
  const ImagesSelectPhone = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchCamera(options, response => {
      if (!response.didCancel) {
        setPhotograph(response.assets[0].uri);
      }
    });
  };

  return (
    <PhotographContainer>
      <Label name={'Foto*'} />
      <PhotographImagesBox>
        {!!photograph && <PhotographImages source={{uri: photograph}} />}
      </PhotographImagesBox>

      <PhotographContent>
        <PhotographButton
          style={{backgroundColor: error ? '#ff9cb8' : '#fff'}}
          onPress={ImagesSelectPhone}>
          <Icon
            name="search-plus"
            size={28}
            color={error ? '#fff' : '#ffb5cb'}
          />
        </PhotographButton>
      </PhotographContent>
      {error && <PhotographText>{error}</PhotographText>}
    </PhotographContainer>
  );
};

export default AddPhotograph;
