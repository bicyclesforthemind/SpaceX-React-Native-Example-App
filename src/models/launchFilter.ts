import {Launch} from './Launch';

enum SearchType {
  rocket,
  site,
}

// eslint-disable-next-line prettier/prettier
export const launchFilter: (launches: Launch[], searchValue: string, searchType: SearchType) => Launch[] = (launches, searchValue, searchType) => {
  if (searchValue === '') {
    return launches;
  } else {
    if (searchType === SearchType.rocket) {
      return launches.filter(launch =>
        launch.rocket?.rocket_name
          .toLowerCase()
          .includes(searchValue.toLowerCase()),
      );
    } else {
      return launches.filter(launch =>
        launch.launch_site?.site_name
          .toLowerCase()
          .includes(searchValue.toLowerCase()),
      );
    }
  }
};
