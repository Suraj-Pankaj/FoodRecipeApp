import React from 'react';
import {useContext, useState} from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  ScrollView
} from 'react-native';

import FormButton from '../components/FormButton.js';
import FormInput from '../components/FormInput.js'; 
import { windowHeight, windowWidth } from '../utils/Dimensions';
import { AuthContext } from '../navigation/AuthProvider.js';


const LoginScreen = ({navigation})=> {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* <Header/> */}

      
      <Image
        source={require('../assets/logofl.png')}
        style={styles.logo}></Image>

      <Text style={styles.text}>Food Lens</Text>

      <FormInput
        labelValue= {email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Email"
        // iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}></FormInput>

<FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

<FormButton
        buttonTitle="Login"
        onPress={() => login(email, password)}
      />

<TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </View>
  
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
