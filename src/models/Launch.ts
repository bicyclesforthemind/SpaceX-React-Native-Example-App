import {LaunchSite} from './LaunchSite';
import {LaunchRocket} from './LaunchRocket';

export interface Launch {
  mission_name: string;
  mission_id: string;
  rocket?: LaunchRocket;
  launch_site?: LaunchSite;
  launch_date_local: Date;
}
