import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { theme } from '../core/theme'


import HeaderLogo from './HeaderLogo';
import HeaderLogoText from './HeaderLogoText';


export default function HeaderSpan({text}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

        <HeaderLogo/>
        <HeaderLogoText>{text}</HeaderLogoText>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0, // Gebruik flex 0 om te voorkomen dat SafeAreaView de volledige hoogte inneemt
    backgroundColor: theme.colors.surface,
    opacity: 1,
  },
  header: {
    backgroundColor: theme.colors.surface,
    padding: 70,
    alignItems: 'center',
    opacity: 1
  },
});
