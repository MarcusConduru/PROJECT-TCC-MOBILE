import React, {useState} from 'react';
import {
  LoginButton,
  LoginContainer,
  LoginIcon,
  LoginImage,
  LoginLink,
  LoginText,
} from './login-styles';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Input, Label} from '../../components';
import dogImage from '../../../img/LVcachorro.png';

const Login: React.FC = () => {
  const [email, setEmaill] = useState('');
  const [Password, setPassword] = useState('');

  const LoginAuthentication = () => {
    return;
  };

  return (
    <LoginContainer>
      <LoginImage source={dogImage} />

      <LoginIcon onPress={() => {}}>
        <Icon name="info-circle" size={25} color={'#fff'} />
      </LoginIcon>

      <View>
        <Label name="Email" />
        <Input value={email} change={setEmaill} />
      </View>

      <View>
        <Label name="Password" />
        <Input secure value={Password} change={setPassword} />
      </View>

      <LoginButton
        click={LoginAuthentication}
        name="Logar"
        email={email}
        password={Password}
      />

      <LoginText>
        Não tem uma conta? <LoginLink to="#"> Cadastrar</LoginLink>
      </LoginText>
    </LoginContainer>
  );
};

export default Login;
