import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Button, Input, Label, Loading} from '../../components';
import dogImage from '../../../img/HPcachorro.png';
import {SignupContainer, SignupIcon, SignupImage} from './signup-styles';
import {useNavigation} from '@react-navigation/native';
import {MakwRemoteAddAccount} from '../../../main/factories/usecases';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();

  const SignupAuthentication = () => {
    if (!loading) {
      setLoading(true);
      MakwRemoteAddAccount().add({email, password, navigation, setLoading});
    }
  };

  return (
    <SignupContainer>
      <SignupIcon onPress={navigation.goBack}>
        <Icon name="arrow-left" size={25} color={'#000'} />
      </SignupIcon>

      <SignupImage source={dogImage} />

      <View>
        <Label name="Email" />
        <Input value={email} change={setEmail} />
      </View>

      <View>
        <Label name="Password" />
        <Input secure value={password} change={setPassword} />
      </View>

      <Button
        click={SignupAuthentication}
        name="Cadastrar"
        email={email}
        password={password}
      />
      {loading && <Loading />}
    </SignupContainer>
  );
};

export default Signup;
