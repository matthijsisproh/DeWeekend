import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

export default function HeaderLogoText(props) {
  return <Text style={styles.header} {...props} />
  
}

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    color: theme.colors.primary
  },
})