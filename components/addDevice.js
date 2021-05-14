import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export default function machineDetails(props) {

    const { navigation } = props;

    return (
        <View>
           <Text style={styles.homeHead}> Add Device </Text>
            <View style={styles.flexBox}>
                <View style={styles.homeBox}>
                    
                </View>
                
                <View style={styles.setTemp}>
                <Image style={styles.thermoImage} source={require('../icons/qrcode.png')}/>
                    <Text style={styles.textTemp}>Type QR Code</Text>
                </View>
                <View style={styles.notificationBox} >
                    <Text style={styles.scanButton}>Scan </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    homeHead: {
        height: 30,
        width: 225,
        left: 120,
        top: 30,
        position: "absolute",
        fontSize: 20,
        fontWeight: '700',

    },
  
    flexBox: {
        //display: 'flex',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // alignItems: 'center',
        top: 90,
        // justifyContent: 'center',
        
    },
    homeBox: {
        height: 400,
        width: '90%',
        left: 20,
        borderRadius: 20,
        backgroundColor: '#000',
        // alignSelf: "flex-start",
    },
    notificationBox: {
        height: 70,
        width: 286,
        left: 70,
        borderRadius: 10,
        backgroundColor: '#F2C94C',
        top: 530,
        position:'absolute',
        alignItems: 'center'
    },
    setTemp:{
        position: 'absolute',
        top:420,
        left: 70,
        borderRadius: 10,
        height: 70,
        width:286,
        backgroundColor: "#FFF"
    },
    thermoImage:{
        // position: 'absolute',
        top: 20,
        left: 250,
        width: 20,
        height: 20,
    },
    textTemp:{
        left: 20,
        top: 3,
        fontWeight: '500',
    },   
    scanButton:{
        top: 20,
        fontSize: 16,
        fontWeight: '500',
    }
})