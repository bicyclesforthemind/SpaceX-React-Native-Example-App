import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import {Launch} from '../models/Launch';
import {LaunchListItem} from './LaunchListItem';

interface ILaunchListProps {
  launches: Launch[];
}

export const LaunchList: React.FC<ILaunchListProps> = ({launches}) => {
  const navigation = useNavigation();

  const renderItem = (launch: Launch) => (
    <LaunchListItem
      key={launch.mission_id}
      missionName={launch.mission_name}
      rocketName={
        launch.rocket?.rocket_name
          ? launch.rocket.rocket_name
          : 'Unknown Rocket'
      }
      launchSite={
        launch.launch_site?.site_name
          ? launch.launch_site.site_name
          : 'Unknown Launch Site'
      }
      onPress={() =>
        navigation.navigate('LaunchDetails', {missionName: launch.mission_name})
      }
    />
  );

  return (
    <FlatList
      keyExtractor={item => item.mission_name}
      data={launches}
      renderItem={({item}) => renderItem(item)}
    />
  );
};
