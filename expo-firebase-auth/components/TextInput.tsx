import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { theme } from '../core/theme'
import styled from 'styled'  




export default function TextInputCustom({inputText, enableAutoFocus, errorText, description, inputStyle, ...props }) {
  return (
    <View style={styles.container}>
      <Input
        aria-label="hoi"
        data-testID="hoi"
        autoFocus={enableAutoFocus}
        tabIndex={0}
        style={[styles.input, styles.customInputStyle]}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        placeholder={inputText}
        mode="flat"
        {...props}

      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 12,
  },
  input: {
    // backgroundColor: 'white',
    // borderBlockColor: 'white',
    // borderRadius: 11,
  },
  customInputStyle: {
    // Voeg hier je aangepaste stijlen toe voor het invoerveld
    width: '100%',
    height: 48,
    backgroundColor: 'white',
    borderColor: 'white',
    borderTopStartRadius: 11,
    borderTopEndRadius: 11,
    borderBottomStartRadius: 11,
    borderBottomEndRadius: 11,
    color: 'white'

  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
})