import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ProtectionLaw, SelectMap} from '../../presetation/pages';
import RouterTabs from './routerTabs';
import ContextApi from '../../presetation/context/contextApi';
import {
  getCurrentAccountAdapter,
  setCurrentAccountAdapter,
} from '../adapters/current-account-adpter';
import {MakeLogin, MakeSignup} from '../factories/pages';
import {PrivateRoute} from '../../presetation/components';
import MakeCreateDenunciation from '../factories/pages/create-denunciation-factory';
import MakeMapDetails from '../factories/pages/map-details-factory';

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
          <Stack.Screen name="Login" component={MakeLogin} />
          <Stack.Screen name="Signup" component={MakeSignup} />
          <Stack.Screen name="ProtectionLaw" component={ProtectionLaw} />
          <Stack.Screen name="SelectMap">
            {props => <PrivateRoute Componet={<SelectMap />} {...props} />}
          </Stack.Screen>
          <Stack.Screen name="RouterTabs">
            {props => <PrivateRoute Componet={<RouterTabs />} {...props} />}
          </Stack.Screen>
          <Stack.Screen name="MapDetails">
            {props => <PrivateRoute Componet={<MakeMapDetails />} {...props} />}
          </Stack.Screen>
          <Stack.Screen name="CreateDenunciation">
            {props => (
              <PrivateRoute Componet={<MakeCreateDenunciation />} {...props} />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ContextApi.Provider>
  );
};

export default Router;
