import {gql} from '@apollo/client';

export const GET_LAUNCH_DETAILS_QUERY = gql`
  query GetLaunchDetails($find: LaunchFind) {
    launchesUpcoming(find: $find, limit: 1) {
      mission_id
      mission_name
      rocket {
        rocket_name
        rocket {
          company
          mass {
            kg
          }
        }
      }
      launch_site {
        site_id
        site_name_long
        site_name
      }
      launch_date_local
    }
  }
`;
