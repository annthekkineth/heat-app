import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function signIn(props) {

  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.signinText}> Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder='Username'
        placeholderTextColor='#808e9b' />
      <TextInput
        style={styles.input}
        placeholder='Mobile Number'
        placeholderTextColor='#808e9b' />
      <TextInput
        style={styles.input}
        placeholder='Password'
        placeholderTextColor='#808e9b'
        textContentType='password'
        secureTextEntry={true} />

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('homepage')}>
        <Text style={styles.loginButtonText}  >Login </Text>
      </TouchableOpacity>
      <View style={styles.signupTextView}>
        <Text style={styles.signupText}> Haven't registered?
          <TouchableOpacity>
            <Text style={[styles.signupText, { color: '#F2C94C' }]}
              onPress={() => navigation.navigate('signUp')}> {' Sign Up '}</Text>
          </TouchableOpacity></Text>
      </View>


    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    justifyContent: 'center', alignItems: 'center',
  },
  signinText: {
    height: '	2.5rem',
    width: '40%',
    marginTop: '5 rem',
    marginBottom: '2 rem',
    fontSize: '	1.5625rem',
    fontWeight: 'bold',
  },
  input: {
    width: '85%',
    marginBottom: '1 rem',
    height: '3.4375rem',
    backgroundColor: '#fff',
    borderRadius: '0.625rem',
    paddingHorizontal: '0.625rem',
  },
  loginButtonText: {
    color: '#fafafa',
    fontSize: '1.1875rem',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: '1.25rem',
  },
  loginButton: {
    backgroundColor: '#F2C94C',
    borderRadius: '0.625rem',
    marginTop: '1.25rem',
    width: '85%',
    height: '4.0625rem',
  },
  signupTextView: {
    width: '85%',
    marginTop: '1.25rem',
  },

  signupText: {
    color: '#808e9b',
    fontSize: '0.9375rem',
    fontWeight: 'bold',
  },
})