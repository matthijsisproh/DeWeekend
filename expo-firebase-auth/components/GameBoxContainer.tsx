import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
import Header from './Header';

export default function GameBoxContainer({ headerText, children }) {
  return (
    <View style={styles.GameBoxContainer}>
      {children}
      <Header>{headerText}</Header>

      
    </View>
  );
}

const styles = StyleSheet.create({
    GameBoxContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(100, 0, 0, 0.5)',
    // shadowOffset: { width: 0, height: 4 },
    // shadowRadius: 4,
    // shadowOpacity: 0.25,
    height: '25%',
    marginTop: 20,
    borderRadius: 11,
    // elevation: 4, // Dit 
  },
});

