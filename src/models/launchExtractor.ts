import {Launch} from './Launch';

export const launchExtractor = (launches: Launch[]) => {
  const upcomingLaunch: Launch = launches[0];

  const missionId = upcomingLaunch.mission_id[0]
    ? upcomingLaunch.mission_id[0]
    : 'Unknown Mission ID';
  const missionName = upcomingLaunch.mission_name;
  const rocketName = upcomingLaunch?.rocket?.rocket_name
    ? upcomingLaunch.rocket.rocket_name
    : 'Unknown Rocket Name';
  const rocketCompanyName = upcomingLaunch?.rocket?.rocket.company
    ? upcomingLaunch.rocket.rocket.company
    : 'Unknown Rocket Company Name';
  const rocketMass = upcomingLaunch?.rocket?.rocket.mass.kg
    ? upcomingLaunch.rocket.rocket.mass.kg
    : 'Unknown Rocket Mass';
  const launchSiteName = upcomingLaunch?.launch_site?.site_name
    ? upcomingLaunch.launch_site.site_name
    : 'Unknown Launch Site Name';
  const launchDateLocal = new Date(
    upcomingLaunch.launch_date_local,
  ).toLocaleString('en-us');
  return {
    missionId,
    missionName,
    rocketName,
    rocketCompanyName,
    rocketMass,
    launchSiteName,
    launchDateLocal,
  };
};
