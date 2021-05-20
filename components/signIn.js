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
    height: 40,
    width: '40%',
    marginTop: '5 rem',
    marginBottom: '2 rem',
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    width: '85%',
    marginBottom: '1 rem',
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  loginButtonText: {
    color: '#fafafa',
    fontSize: 19,
    fontWeight: '400',
    alignSelf: 'center',
  },
  loginButton: {
    paddingVertical: 12,
    backgroundColor: '#F2C94C',
    borderRadius: 6,
    marginTop: 20,
    width: '85%',
    height: 65,
  },
  signupTextView: {
    width: 300,
    height: 80,
    marginTop: 20,
  },

  signupText: {
    color: '#808e9b',
    fontSize: 15,
    fontWeight: '500',
  },
})