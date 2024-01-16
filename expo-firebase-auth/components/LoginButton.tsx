import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'

export default function LoginButton({ mode, style, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: theme.colors.surface },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    color: '#fff',
    backgroundColor: '#F25858',
    height: 48,
    borderWidth: 0,
    padding: 0,
    borderRadius: 11,
    justifyContent: 'center',  

  },
  text: {
    fontStyle: 'normal',
    letterSpacing: 0.36,
    fontWeight: 'normal',
    fontSize: 16,
    // lineHeight: 26,
    color: '#FFF'
  },
})