/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {
  LoginContainer,
  LoginIcon,
  LoginImage,
  LoginLink,
  LoginText,
} from './login-styles';
import {Alert, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Button, Input, Label, Loading} from '../../components';
import dogImage from '../../../img/LVcachorro.png';
import {useNavigation} from '@react-navigation/native';
import contextApi from '../../context/contextApi';
import {Authentication} from '../../../domain/usecases';
import {AccountModel} from '../../../domain/models';

type Props = {
  authentication: Authentication;
};

const Login: React.FC<Props> = ({authentication}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    if (isLoading) {
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

      <View>
        <Label name="Email" />
        <Input value={email} change={setEmail} />
      </View>

      <View>
        <Label name="Password" />
        <Input secure value={password} change={setPassword} />
      </View>

      <Button
        click={LoginAuthentication}
        name="Logar"
        email={email}
        password={password}
      />

      <LoginText>
        Não tem uma conta? <LoginLink to="/Signup"> Cadastrar</LoginLink>
      </LoginText>

      {isLoading && <Loading />}
    </LoginContainer>
  );
};

export default Login;
