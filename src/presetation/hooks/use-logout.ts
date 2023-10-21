import {useContext} from 'react';
import contextApi from '../context/contextApi';
import {useNavigation} from '@react-navigation/native';

type LogoutType = () => void;

export const useLogout = (): LogoutType => {
  const {setCurrentAccount} = useContext(contextApi);
  const navigate = useNavigation<any>();

  return (): void => {
    setCurrentAccount(undefined as any);
    navigate.navigate('Login');
  };
};
