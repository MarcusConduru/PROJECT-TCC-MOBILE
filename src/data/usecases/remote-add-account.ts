import {Alert} from 'react-native';
import {AddAccount, TypeAddAccount} from '../../domain/usecases';
import firebase from '../../infra/services/connection';

export class RemoteAddAccount implements AddAccount {
  add(params: TypeAddAccount): Promise<void> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(params.email, params.password)
      .then(() => {
        Alert.alert('Cadastro feito Com sucesso');
        params.navigation.navigate('RouterTabs');
      })
      .catch(err => {
        params.setLoading(false)
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
  }
}
