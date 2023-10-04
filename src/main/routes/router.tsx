import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  CreateDenunciation,
  Login,
  ProtectionLaw,
  SelectMap,
  Signup,
} from '../../presetation/pages';
import RouterTabs from './routerTabs';

const Stack = createNativeStackNavigator();

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ProtectionLaw" component={ProtectionLaw} />
        <Stack.Screen name="SelectMap" component={SelectMap} />
        <Stack.Screen name="RouterTabs" component={RouterTabs} />
        <Stack.Screen
          name="CreateDenunciation"
          component={CreateDenunciation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
