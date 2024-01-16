import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



export default function HeaderContainer({ children }) {
  return (
    <View style={styles.HeaderContainer}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
    HeaderContainer: {
        width: screenWidth,
        height: screenHeight/10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        backgroundColor: 'rgba(0,0,0,0.5)',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4,
        shadowOpacity: 0.25,
        shadowColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center'
  },
});