import {SearchBar} from '@rneui/themed';
import React, {useState} from 'react';
import {View} from 'react-native';
import {ErrorMessage} from '../components/ErrorMessage';
import {LaunchFilterGroup} from '../components/LaunchFilterGroup';
import {LaunchList} from '../components/LaunchList';
import {LoadingSpinner} from '../components/LoadingSpinner';
import {launchFilter} from '../models/launchFilter';
import {useGetUpcomingLaunchesQuery} from '../services/useGetUpcomingLaunchesQuery';

export const LaunchListScreen: React.FC<{}> = () => {
  const [searchBarText, setSearchBarText] = useState('');
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  // filters
  const {loading, error, data} = useGetUpcomingLaunchesQuery();

  if (error) {
    return <ErrorMessage title="An Error Occurred" text="Please Try Again" />;
  }

  return (
    <View>
      <SearchBar
        platform="ios"
        value={searchBarText}
        onChangeText={text => setSearchBarText(text)}
      />
      <LaunchFilterGroup
        selectedIndex={selectedFilterIndex}
        onPress={value => setSelectedFilterIndex(value)}
      />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <LaunchList
          launches={launchFilter(
            data.launchesUpcoming,
            searchBarText,
            selectedFilterIndex,
          )}
        />
      )}
    </View>
  );
};
