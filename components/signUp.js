import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

export default function signUp( props ) {
    const { navigation } = props;
    
    return (
        <View style={styles.container}>
            <Text style={styles.signinText}> Sign Up</Text>
            <TextInput
                style={styles.input}
                placeholder='Mobile Number'
                placeholderTextColor='#808e9b' />
            <TextInput
                style={styles.inputPassword}
                placeholder='Password'
                placeholderTextColor='#808e9b'
                textContentType='password'
                secureTextEntry={true} />
                <TextInput
                style={styles.confirmPassword}
                placeholder='Confirm Password'
                placeholderTextColor='#808e9b'
                textContentType='password'
                secureTextEntry={true} />

<TouchableOpacity style={styles.loginButton} onPress={() => alert("Success")}>
          <Text style={styles.loginButtonText}  > Register </Text>
        </TouchableOpacity>
        {/* <View style={styles.signupTextView}>
          <Text style={styles.signupText}> Haven't registered? </Text>
          <TouchableOpacity>
            <Text style={[styles.signupText, { color: '#F2C94C' }]}
              > {' Sign Up '}</Text>
          </TouchableOpacity>
        </View> */}


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#878787',
    },
    signinText: {
        position: 'absolute',
        height: 40,
        width: 100,
        left: 165,
        top: 150,
        fontSize: 25,
        fontWeight: 'bold',
    },
    input: {
        width: 320,
        left: 50,
        height: 55,
        top: 252,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        position: 'absolute',
    },
    inputPassword: {
        position: 'absolute',
        width: 320,
        left: 50,
        height: 55,
        top: 317,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },
    confirmPassword: {
        position: 'absolute',
        width: 320,
        left: 50,
        height: 55,
        top: 385,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
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
        width: 320,
        left: 50,
        height: 65,
        top: 450,
      },
      signupTextView: {
        // marginTop: 40,
        display: 'flex',
        //flexDirection: 'row',
        //justifyContent: 'center',
        width: 300,
        left: 50,
        height: 80,
        top: 450,
      },
    
      signupText: {
        color: '#808e9b',
        fontSize: 15,
        fontWeight: '500',
      },
})