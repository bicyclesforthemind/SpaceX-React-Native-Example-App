import {useRoute} from '@react-navigation/native';
import React from 'react';
import {ErrorMessage} from '../components/ErrorMessage';
import {LaunchDetailsCard} from '../components/LaunchDetailsCard';
import {launchExtractor} from '../models/launchExtractor';
import {useGetLaunchDetailsQuery} from '../services/useGetLaunchDetailsQuery';
import {LoadingSpinner} from '../components/LoadingSpinner';

export const LaunchDetailsScreen: React.FC<{}> = () => {
  const route = useRoute();
  const {loading, error, data} = useGetLaunchDetailsQuery(
    route?.params?.missionName ? route.params.missionName : undefined,
  );

  if (error) {
    return <ErrorMessage title="An Error Occurred" text="Please Try Again" />;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  const {launchesUpcoming} = data;

  const {
    missionId,
    rocketName,
    rocketCompanyName,
    rocketMass,
    launchSiteName,
    launchDateLocal,
  } = launchExtractor(launchesUpcoming);

  return (
    <LaunchDetailsCard
      missionId={missionId}
      rocketName={rocketName}
      rocketCompanyName={rocketCompanyName}
      rocketMass={rocketMass}
      launchSiteName={launchSiteName}
      launchDateLocal={launchDateLocal}
    />
  );
};
