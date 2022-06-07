import {useQuery} from '@apollo/client';
import {GET_UPCOMING_LAUNCHES_QUERY} from './GET_UPCOMING_LAUNCHES_QUERY';

export const useGetUpcomingLaunchesQuery = () => {
  const {loading, error, data} = useQuery(GET_UPCOMING_LAUNCHES_QUERY);
  return {loading, error, data};
};
