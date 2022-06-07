import {useQuery} from '@apollo/client';
import {GET_LAUNCH_DETAILS_QUERY} from './GET_LAUNCH_DETAILS_QUERY';

export const useGetLaunchDetailsQuery = missionName => {
  const {loading, error, data} = useQuery(GET_LAUNCH_DETAILS_QUERY, {
    variables: {
      find: {
        mission_name: missionName,
    }},
  });
  return {loading, error, data};
};
