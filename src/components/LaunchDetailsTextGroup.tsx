import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ITextGroupProps {
  title: string;
  text: string;
}

export const TextGroup: React.FC<ITextGroupProps> = ({title, text}) => {
  return (
    <View style={styles.textGroupContainer}>
      <Text>{`${title}: `}</Text>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textGroupContainer: {
    flexDirection: 'row',
  },
});
