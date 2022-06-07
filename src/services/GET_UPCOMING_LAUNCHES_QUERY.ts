import {gql} from '@apollo/client';

export const GET_UPCOMING_LAUNCHES_QUERY = gql`
  query GetUpcomingLaunches {
    launchesUpcoming {
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
