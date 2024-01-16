import React from 'react'
import { Image, StyleSheet, KeyboardAvoidingView } from 'react-native'
// import { theme } from '../core/theme'

export default function HeaderLogo() {
  return (
    <Image
      source={require('../assets/login_screen/header-logo.png')}>
    </Image>
  )
}
