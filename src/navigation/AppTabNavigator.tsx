import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AboutMeScreen} from '../screens/AboutMeScreen';
import {LaunchStackNavigator} from './LaunchStackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator();

export const AppTabNavigator = () => {
  return (
    <TabNavigator.Navigator
      initialRouteName={'Launches'}
      screenOptions={{headerShown: false}}>
      <TabNavigator.Screen
        name={'Launches'}
        component={LaunchStackNavigator}
        options={{
          tabBarLabel: 'Launches',
          tabBarIcon: ({color, size}) => (
            <Icon name={'rocket-outline'} color={color} size={size} />
          ),
        }}
      />
      <TabNavigator.Screen
        name={'About Me'}
        component={AboutMeScreen}
        options={{
          tabBarLabel: 'About Me',
          tabBarIcon: ({color, size}) => (
            <Icon name={'person-outline'} color={color} size={size} />
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
};
