import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Button, Input, Label} from '../../components';
import dogImage from '../../../img/HPcachorro.png';
import {SignupContainer, SignupIcon, SignupImage} from './signup-styles';
import {useNavigation} from '@react-navigation/native';

const Signup: React.FC = () => {
  const [email, setEmaill] = useState('');
  const [Password, setPassword] = useState('');
  const navigation = useNavigation();

  const SignupAuthentication = () => {
    return;
  };

  return (
    <SignupContainer>
      <SignupIcon onPress={navigation.goBack}>
        <Icon name="arrow-left" size={25} color={'#000'} />
      </SignupIcon>

      <SignupImage source={dogImage} />

      <View>
        <Label name="Email" />
        <Input value={email} change={setEmaill} />
      </View>

      <View>
        <Label name="Password" />
        <Input secure value={Password} change={setPassword} />
      </View>

      <Button
        click={SignupAuthentication}
        name="Cadastrar"
        email={email}
        password={Password}
      />
    </SignupContainer>
  );
};

export default Signup;
