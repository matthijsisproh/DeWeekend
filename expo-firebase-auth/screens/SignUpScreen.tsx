import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';



import Background from '../components/Background';
import Header from '../components/Header';
import LoginContainer from '../components/LoginContainer';
import TextInputCustom from '../components/TextInput';
import LoginButton from '../components/LoginButton';
import HeaderSpan from '../components/HeaderSpan';
import BackButton from '../components/BackButton';
import EmailVerificationModal from '../components/EmailVerificationModal';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

type Props=
{
  style:any
}

const Input = (props:Props) =>
{
    return <TextInput {...props} style = {{...styles.input, ...props.style}} blurOnSubmit autoCorrect = {false} maxLength = {100} />
}

const SignUpScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  })

  async function signUp() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }
  
    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate('Sign In');
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }

  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    // <View style={styles.container}>
    //   <Text>Signup screen!</Text>

    //   {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}

    //   <View style={styles.controls}>
    //     <Input
    //       placeholder='Email'
    //       containerStyle={styles.control}
    //       value={value.email}
    //       onChangeText={(text) => setValue({ ...value, email: text })}
    //       leftIcon={<Icon
    //         name='envelope'
    //         size={16}
    //       />}
    //     />

    //     <Input
    //       placeholder='Password'
    //       containerStyle={styles.control}
    //       value={value.password}
    //       onChangeText={(text) => setValue({ ...value, password: text })}
    //       secureTextEntry={true}
    //       leftIcon={<Icon
    //         name='key'
    //         size={16}
    //       />}
    //     />

    //     <Button title="Sign up" buttonStyle={styles.control} onPress={signUp} />
    //   </View>
    // </View>
    <Background>
      <StatusBar
                barStyle="auto"
            />
      <HeaderSpan text="Maakt jouw weekend nóg mooier"/>
      <LoginContainer description="Maak jouw account aan">
        <TextInputCustom inputText="Naam" enableAutoFocus={false}></TextInputCustom>
        <TextInputCustom inputText="E-mailadres" enableAutoFocus={false}></TextInputCustom>
        <TextInputCustom inputText="Wachtwoord" enableAutoFocus={false}></TextInputCustom>
        <LoginButton onPress={handleOpenModal}>
          Account aanmaken
        </LoginButton>
        <EmailVerificationModal visible={modalVisible} onClose={handleCloseModal} />
      </LoginContainer>

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

  controls: {
    flex: 1,
  },

  control: {
    marginTop: 10
  },

  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  },

  input:{
    height:30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10
  }
});

export default SignUpScreen;