import React from 'react';
import {ListItem} from '@rneui/themed';

interface ILaunchListItemProps {
  missionName: string;
  rocketName: string;
  launchSite: string;
  onPress: () => void;
}

export const LaunchListItem: React.FC<ILaunchListItemProps> = ({
  missionName,
  rocketName,
  launchSite,
  onPress,
}) => {
  return (
    <ListItem bottomDivider onPress={onPress}>
      <ListItem.Content>
        <ListItem.Title>{`Mission Name: ${missionName}`}</ListItem.Title>
        <ListItem.Subtitle>{`Rocket Name: ${rocketName}`}</ListItem.Subtitle>
        <ListItem.Subtitle>{`Launch Site: ${launchSite}`}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};
