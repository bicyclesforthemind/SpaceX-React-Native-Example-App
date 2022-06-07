import React from 'react';
import {Card, Text} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';

interface IErrorMessageProps {
  title: string;
  text: string;
}

export const ErrorMessage: React.FC<IErrorMessageProps> = ({title, text}) => {
  return (
    <Card containerStyle={styles.errorContainer}>
      <Card.Title>{title}</Card.Title>
      <View>
        <Text style={styles.errorText}>{text}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    backgroundColor: 'red',
  },
  errorText: {
    textAlign: 'center',
  },
});
