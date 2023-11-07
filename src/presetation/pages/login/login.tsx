/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {
  LoginContainer,
  LoginIcon,
  LoginImage,
  LoginLink,
  LoginText,
} from './login-styles';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Button, Input, Loading} from '../../components';
import dogImage from '../../../img/LVcachorro.png';
import {useNavigation} from '@react-navigation/native';
import contextApi from '../../context/contextApi';
import {Authentication} from '../../../domain/usecases';
import {AccountModel} from '../../../domain/models';
import {Validation} from '../../../validation/protocols';

type Props = {
  authentication: Authentication;
  validation: Validation;
};

const Login: React.FC<Props> = ({authentication, validation}: Props) => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<any>();
  const [account, setAccount] = useState<AccountModel>();
  const {setCurrentAccount, getCurrentAccount} = useContext(contextApi);

  useEffect(() => {
    getCurrentAccount().then(el => setAccount(JSON.parse(el)));
    if (account) {
      navigation.navigate('RouterTabs');
    }
  }, []);

  const LoginAuthentication = () => {
    const input = {email, password};
    const errorEmailInput = validation.validate('email', input);
    const errorPasswordInput = validation.validate('password', input);
    setErrorEmail(errorEmailInput);
    setErrorPassword(errorPasswordInput);

    if (isLoading || !!errorEmailInput || !!errorPasswordInput) {
      return;
    }

    setIsLoading(true);

    authentication
      .auth({email, password})
      .then(accountModel => {
        setIsLoading(false);
        setEmail('');
        setPassword('');
        setCurrentAccount(accountModel);
        navigation.navigate('RouterTabs');
      })
      .catch(() => {
        setIsLoading(false);
        Alert.alert('Email ou Senha incorretos');
      });
  };

  return (
    <LoginContainer>
      <LoginImage source={dogImage} />

      <LoginIcon onPress={() => navigation.navigate('ProtectionLaw')}>
        <Icon name="info-circle" size={25} color={'#000'} />
      </LoginIcon>

      <Input value={email} change={setEmail} error={errorEmail} name="Email*" />

      <Input
        secure
        value={password}
        change={setPassword}
        error={errorPassword}
        name="Senha*"
      />

      <Button click={LoginAuthentication} name="Logar" />

      <LoginText>
        Não tem uma conta? <LoginLink to="/Signup"> Cadastrar</LoginLink>
      </LoginText>

      {isLoading && <Loading />}
    </LoginContainer>
  );
};

export default Login;
