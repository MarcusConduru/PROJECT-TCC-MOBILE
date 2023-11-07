import React, {useState} from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Button, Input, Loading} from '../../components';
import dogImage from '../../../img/HPcachorro.png';
import {SignupContainer, SignupIcon, SignupImage} from './signup-styles';
import {useNavigation} from '@react-navigation/native';
import {AddAccount} from '../../../domain/usecases';
import {Validation} from '../../../validation/protocols';

type Props = {
  addAccount: AddAccount;
  validation: Validation;
};

const Signup: React.FC<Props> = ({addAccount, validation}: Props) => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<any>();

  const SignupAuthentication = () => {
    const input = {email, password};
    const errorEmailInput = validation.validate('email', input);
    const errorPasswordInput = validation.validate('password', input);
    setErrorEmail(errorEmailInput);
    setErrorPassword(errorPasswordInput);

    if (isLoading || !!errorEmailInput || !!errorPasswordInput) {
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

      <Input value={email} change={setEmail} error={errorEmail} name="Email*" />

      <Input
        secure
        value={password}
        change={setPassword}
        error={errorPassword}
        name="Senha*"
      />

      <Button click={SignupAuthentication} name="Cadastrar" />
      {isLoading && <Loading />}
    </SignupContainer>
  );
};

export default Signup;
