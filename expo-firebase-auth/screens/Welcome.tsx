import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
// import { Button } from 'react-native-elements';
import { getAuth, signInAnonymously } from 'firebase/auth';

import boxData from '../data/boxData';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import { StatusBar } from 'expo-status-bar';
import Paragraph from '../components/Paragraph';
import LoginContainer from '../components/LoginContainer';

const auth = getAuth();

const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    // <View style={styles.container}>
    <Background>
      <StatusBar
                barStyle="auto"
            />
      <Header/>
      <Header>Ga je weer eens zuipen?</Header>
      <Header>


      </Header>

      <LoginContainer
      >
        <Button
          mode="outlined"
          onPress={() => navigation.navigate('Sign In')}
        >
          Alcoholist
        </Button>

        
        <Button
          mode="outlined"
          onPress={() => navigation.navigate('Sign Up')}
        >
          <Text>Maak een nieuwe gebruiker!</Text>
        </Button>
       
      </LoginContainer>

      
      <Button
        mode="outlined"
        onPress={() => signInAnonymously(auth)}
      >
        Anonieme Alcoholist
      </Button>

    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttons: {
    flex: 1,
  },

  button: {
    marginTop: 10
  }
});

export default WelcomeScreen;