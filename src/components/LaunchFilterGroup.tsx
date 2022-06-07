import React from 'react';
import {ButtonGroup, Text} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';

interface ILaunchFilterGroupProps {
  selectedIndex: number;
  onPress: (value: number) => void;
}

export const LaunchFilterGroup: React.FC<ILaunchFilterGroupProps> = ({
  selectedIndex,
  onPress,
}) => {
  return (
    <>
      <View style={styles.filterGroupTextContainer}>
        <Text>{'Filter By:'}</Text>
      </View>
      <ButtonGroup
        buttons={['Rocket Name', 'Launch Site']}
        selectedIndex={selectedIndex}
        onPress={onPress}
      />
    </>
  );
};

const styles = StyleSheet.create({
  filterGroupTextContainer: {
    padding: 12,
  },
});
