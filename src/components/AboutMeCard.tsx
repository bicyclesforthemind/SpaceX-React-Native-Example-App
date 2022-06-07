import {Card} from '@rneui/themed';
import React from 'react';
import {TextGroup} from './TextGroup';

interface IAboutMeCardProps {
  name: string;
  phoneNumber: string;
  email: string;
}

export const AboutMeCard: React.FC<IAboutMeCardProps> = ({
  name,
  phoneNumber,
  email,
}) => {
  return (
    <Card>
      <Card.Title>{'About Me'}</Card.Title>
      <Card.Divider />
      <TextGroup title={'Name'} text={name} />
      <TextGroup title={'Phone Number'} text={phoneNumber} />
      <TextGroup title={'Email'} text={email} />
    </Card>
  );
};
