import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function machineDetails(props) {

    const { navigation } = props;

    return (
        <View style={styles.container}>
           <Text style={styles.homeHead}> Add Device </Text>
            <View style={styles.flexBox}>
                <View style={styles.homeBox}>
                    
                </View>
                
                <View style={styles.typeCode}>
                <Image style={styles.qrImage} source={require('../icons/qrcode.png')}/>
                    <Text style={styles.textQR}>Type QR Code</Text>
                </View>
                <View style={styles.buttonView} >
                    <Text style={styles.scanButton}>Scan </Text>
                </View>
            </View>
        </View>
    )
}

const styles = EStyleSheet.create({
    container: {
        justifyContent: 'center', alignItems: 'center',
      },
    homeHead: {
        height: 30,
        width: '40%',
        marginTop:'2 rem',
        marginBottom:'1 rem',
        fontSize: 20,
        fontWeight: '700',

    },
  
    flexBox: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    homeBox: {
        height: 400,
        width: '90%',
        left: 20,
        borderRadius: 20,
        backgroundColor: '#000',
        marginBottom:'1 rem',
    },
    buttonView: {
        height: 70,
        borderRadius: 10,
        backgroundColor: '#F2C94C',
        width: '90%',
        left: 20,
        alignItems: 'center'
    },
    typeCode:{
        // position: 'absolute',
        // top:420,
        width: '90%',
        left: 20,
        marginBottom:'1 rem',
        borderRadius: 10,
        height: 70,
        backgroundColor: "#FFF"
    },
    qrImage:{
        width: 20,
        height: 20,
        marginTop: '1 rem',
        marginLeft:'19rem'
    },
    textQR:{
        fontWeight: '500',
        marginTop: '-1 rem',
        marginLeft:'1 rem'
    },   
    scanButton:{
        fontSize: 16,
        fontWeight: '500',
        marginTop: '1 rem',
    }
})