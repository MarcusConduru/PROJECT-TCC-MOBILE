import React from 'react';
import {Container} from './login-styles';
// import {Info} from 'react-native-feather';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Login: React.FC = () => {
  return (
    <Container>
      {/* <Image source={dogImage} /> */}

      <TouchableOpacity onPress={() => {}}>
        <Icon name="info-circle" size={25} color={'#000'} />
        <Text>asdas</Text>
      </TouchableOpacity>

      {/* <View>
        <Label name="Email" />
        <Input value={email} onChangeText={setEmail} />
      </View> */}

      {/* <View>
        <Label name="Password" />
        <Input
          secureTextEntry={true}
          value={Password}
          onChangeText={setPassword}
        />
      </View> */}

      {/* <Button
        click={loginUser}
        name="Logar"
        email={email}
        password={Password}
      />
      <Text style={styles.text}>
        Não tem uma conta?{' '}
        <Link to="/home" style={styles.link}>
          {' '}
          Cadastrar
        </Link>
      </Text> */}
    </Container>
  );
};

export default Login;
