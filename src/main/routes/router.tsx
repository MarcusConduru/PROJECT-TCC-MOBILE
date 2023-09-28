import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Login, MapSeach, ProtectionLaw, Signup} from '../../presetation/pages';

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
        <Stack.Screen name="MapSeach" component={MapSeach} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
