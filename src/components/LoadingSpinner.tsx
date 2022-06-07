import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

export const LoadingSpinner: React.FC<{}> = () => (
  <ActivityIndicator style={styles.loadingSpinner} size={'large'} />
);

const styles = StyleSheet.create({
  loadingSpinner: {
    marginTop: 10,
  },
});
