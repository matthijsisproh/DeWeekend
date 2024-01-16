import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScreenWidth } from 'react-native-elements/dist/helpers';

export default function GameOverviewContainer({ children }) {
  return (
    <View style={styles.GameOverviewContainer}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
    GameOverviewContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    // shadowOffset: { width: 0, height: 4 },
    // shadowRadius: 4,
    // shadowOpacity: 0.25,
    width: ScreenWidth - 20,
    marginLeft: 20,
    marginRight: 20,
    // elevation: 4, // Dit 
    justifyContent: 'center'
  },
});