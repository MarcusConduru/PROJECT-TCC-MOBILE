/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {ListMap, MapSeach} from '../../presetation/pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Stack = createBottomTabNavigator();

const RouterTabs: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabBarItemStyle: {
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
        },
        tabBarIconStyle: {
          flex: 0,
          width: 30,
          height: 30,
        },
        tabBarLabelStyle: {
          fontFamily: 'Lato-Bold',
          fontSize: 15,
          marginLeft: 16,
        },
        tabBarInactiveBackgroundColor: '#fafafc',
        tabBarActiveBackgroundColor: '#ebebf5',
        tabBarInactiveTintColor: '#c1bccc',
        tabBarActiveTintColor: '#32264d',
      }}>
      <Stack.Screen
        name="MapSeach"
        component={MapSeach}
        options={{
          tabBarLabel: 'Mapa',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Icon
                name="map-marked-alt"
                size={size}
                color={focused ? '#eb2f64' : color}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="ListMap"
        component={ListMap}
        options={{
          tabBarLabel: 'Marcações',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Icon
                name="list-ul"
                size={size}
                color={focused ? '#eb2f64' : color}
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default RouterTabs;
