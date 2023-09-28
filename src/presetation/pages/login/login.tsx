import React, {useState} from 'react';
import {
  LoginContainer,
  LoginIcon,
  LoginImage,
  LoginLink,
  LoginText,
} from './login-styles';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Button, Input, Label} from '../../components';
import dogImage from '../../../img/LVcachorro.png';
import {useNavigation} from '@react-navigation/native';

const Login: React.FC = () => {
  const [email, setEmaill] = useState('');
  const [Password, setPassword] = useState('');

  const LoginAuthentication = () => {
    navigator.navigate('MapSeach');
  };
  const navigator = useNavigation();

  return (
    <LoginContainer>
      <LoginImage source={dogImage} />

      <LoginIcon onPress={() => navigator.navigate('ProtectionLaw')}>
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

      <Button
        click={LoginAuthentication}
        name="Logar"
        email={email}
        password={Password}
      />

      <LoginText>
        Não tem uma conta? <LoginLink to="/Signup"> Cadastrar</LoginLink>
      </LoginText>
    </LoginContainer>
  );
};

export default Login;
