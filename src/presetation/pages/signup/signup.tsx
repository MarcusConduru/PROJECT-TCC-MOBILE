import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Button, Input, Label, Loading} from '../../components';
import dogImage from '../../../img/HPcachorro.png';
import {SignupContainer, SignupIcon, SignupImage} from './signup-styles';
import {useNavigation} from '@react-navigation/native';
import {AddAccount} from '../../../domain/usecases';

type Props = {
  addAccount: AddAccount;
};

const Signup: React.FC<Props> = ({addAccount}: Props) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();

  const SignupAuthentication = () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    addAccount
      .add({email, password})
      .then(() => {
        setIsLoading(false);
        setEmail('');
        setPassword('');
        Alert.alert('Cadastro feito Com sucesso');
        navigation.navigate('RouterTabs');
      })
      .catch(err => {
        setIsLoading(false);
        switch (err.code) {
          case 'auth/invalid-email':
            Alert.alert('O endereço de e-mail é inválido');
            break;
          case 'auth/weak-password':
            Alert.alert('A senha deve ter pelo menos 6 caracteres');
            break;
          default:
            Alert.alert('O endereço de e-mail já foi cadastrado');
            break;
        }
      });
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
      {isLoading && <Loading />}
    </SignupContainer>
  );
};

export default Signup;
