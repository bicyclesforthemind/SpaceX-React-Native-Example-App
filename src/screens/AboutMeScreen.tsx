import React from 'react';
import {AboutMeCard} from '../components/AboutMeCard';
import {SafeAreaView} from 'react-native';

export const AboutMeScreen: React.FC<{}> = () => {
  return (
    <SafeAreaView>
      <AboutMeCard
        name={'Aaron Free'}
        phoneNumber={'612-819-7606'}
        email={'aaa2141@gmail.com'}
      />
    </SafeAreaView>
  );
};
