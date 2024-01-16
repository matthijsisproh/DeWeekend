import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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
import TextInputCustom from '../components/TextInput';
import LoginButton from '../components/LoginButton';
import HeaderSpan from '../components/HeaderSpan';


const auth = getAuth();

const LoginScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    // <View style={styles.container}>
    <Background>
      <StatusBar
                barStyle="auto"
            />
      <HeaderSpan text="Maakt jouw weekend nóg mooier"/>

    <LoginContainer description="Inloggen of account aanmaken">
      <TextInputCustom inputText="E-mailadres" enableAutoFocus={false}></TextInputCustom>
      <TextInputCustom inputText="Wachtwoord" enableAutoFocus={false}></TextInputCustom>
      <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
        <Text style={{ textDecorationLine: 'underline' }}>Wachtwoord vergeten?</Text>
      </TouchableOpacity>
      <View style={[styles.buttonrow]}>

      <LoginButton
        style={styles.signinbutton}
      >
        Inloggen
      </LoginButton>
      <Image
        style={styles.image}
        source={require('../assets/login_screen/google-icon.png')}
      />
      <Image
        style={styles.image}
        source={require('../assets/login_screen/apple-icon.png')}
      />
      <Image
        style={styles.image}
        source={require('../assets/login_screen/facebook-icon.png')}
      />
      </View>

      <View style={[styles.buttoncol]}>
        <LoginButton style={styles.largebutton} onPress={() => navigation.navigate('Sign Up')}>
          Account aanmaken
        </LoginButton>
        <Text>OF</Text>

        <LoginButton style={styles.largebutton} onPress={() => signInAnonymously(auth)}>
          Spelen als gast
        </LoginButton>
      </View>

    </LoginContainer>


      {/* <LoginContainer
      > */}
        
        {/* <TextInputCustom inputTerrxt="E-mailadres"><Text>E-mailadres</Text></TextInputCustom> */}
        {/* <TextInputCustom inputText="Wachtwoord"></TextInputCustom> */}
{/* ]
        <Button
          mode="outlined"
          onPress={() => navigation.navigate('Sign In')}
        >
          <Text>Alcoholist</Text>
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
        <Text>Anonieme Alcoholist</Text>
      </Button> */}

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

  signinbutton: {
    width: 195,
    // paddingBottom: 11,
    // paddingRight: 16,
    // paddingLeft: 16,
   },
  iconbutton: {
    // width: 48,
    // height: 48,
    // marginLeft: 10,
    // paddingTop: 11,
    // paddingBottom: 11,
    // paddingRight: 16,
    // paddingLeft: 16,
  },
  largebutton: {
    width: '100%',
  },
  buttonrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',  
  },
  buttoncol: {
    alignItems: 'center',
    justifyContent: 'center',  
  },
  image: {
    marginVertical: 10,
    marginLeft: 8,
    // height: 
    width: 48,
    resizeMode: 'cover'
  }

});

export default LoginScreen;