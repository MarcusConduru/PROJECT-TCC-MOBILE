import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  CreateDenunciation,
  Login,
  MapDetails,
  ProtectionLaw,
  SelectMap,
  Signup,
} from '../../presetation/pages';
import RouterTabs from './routerTabs';
import ContextApi from '../../presetation/context/contextApi';
import {
  getCurrentAccountAdapter,
  setCurrentAccountAdapter,
} from '../adapters/current-account-adpter';

const Stack = createNativeStackNavigator();

const Router: React.FC = () => {
  return (
    <ContextApi.Provider
      value={{
        getCurrentAccount: getCurrentAccountAdapter,
        setCurrentAccount: setCurrentAccountAdapter,
      }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="ProtectionLaw" component={ProtectionLaw} />
          <Stack.Screen name="SelectMap" component={SelectMap} />
          <Stack.Screen name="RouterTabs" component={RouterTabs} />
          <Stack.Screen name="MapDetails" component={MapDetails} />
          <Stack.Screen
            name="CreateDenunciation"
            component={CreateDenunciation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextApi.Provider>
  );
};

export default Router;
