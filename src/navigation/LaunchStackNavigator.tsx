import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LaunchListScreen} from '../screens/LaunchListScreen';
import {LaunchDetailsScreen} from '../screens/LaunchDetailsScreen';

const StackNavigator = createNativeStackNavigator();

export const LaunchStackNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name={'LaunchList'}
        component={LaunchListScreen}
        options={{title: 'Launches'}}
      />
      <StackNavigator.Screen
        name={'LaunchDetails'}
        component={LaunchDetailsScreen}
        options={({route}) => ({
          title: route?.params?.missionName
            ? route.params.missionName
            : 'LaunchDetails',
        })}
      />
    </StackNavigator.Navigator>
  );
};
