import React from 'react';
import {Card} from '@rneui/themed';
import {TextGroup} from './LaunchDetailsTextGroup';

interface ILaunchDetailsCardProps {
  missionId: string;
  rocketName: string;
  rocketCompanyName: string;
  rocketMass: string;
  launchSiteName: string;
  launchDateLocal: string;
}

export const LaunchDetailsCard: React.FC<ILaunchDetailsCardProps> = ({
  missionId,
  rocketName,
  rocketCompanyName,
  rocketMass,
  launchSiteName,
  launchDateLocal,
}) => {
  return (
    <Card>
      <Card.Title>{'Launch Details'}</Card.Title>
      <TextGroup title={'Mission Id'} text={missionId} />
      <TextGroup title={'Rocket Name'} text={rocketName} />
      <TextGroup title={'Rocket Company Name'} text={rocketCompanyName} />
      <TextGroup title={'Rocket Mass'} text={rocketMass} />
      <TextGroup title={'Launch Site Name'} text={launchSiteName} />
      <TextGroup title={'Launch Date Local'} text={`${launchDateLocal}`} />
    </Card>
  );
};
