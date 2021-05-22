import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image,ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function machineDetails(props) {

    const { navigation } = props;

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 20 }}>
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
        </ScrollView>
        </View>
    )
}

const styles = EStyleSheet.create({
    container: {
        justifyContent: 'center', alignItems: 'center',
      },
    homeHead: {
        height: '1.875rem',
        width: '40%',
        marginTop:'2 rem',
        marginBottom:'1 rem',
        fontSize: '1.25rem',
        fontWeight: '700',

    },
  
    flexBox: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    homeBox: {
        height: '25 rem',
        width: '90%',
        left: '1.25rem',
        borderRadius: '1.25rem',
        backgroundColor: '#000',
        marginBottom:'1 rem',
    },
    buttonView: {
        height: '4.375 rem',
        borderRadius: '0.625rem',
        backgroundColor: '#F2C94C',
        width: '90%',
        left: '1.25rem',
        alignItems: 'center',
        marginBottom:'2rem'
    },
    typeCode:{
        width: '90%',
        left: '1.25rem',
        marginBottom:'1 rem',
        borderRadius: '0.625rem',
        height: '4.375 rem',
        backgroundColor: "#FFF"
    },
    qrImage:{
        width: '1.25rem',
        height: '1.25rem',
        marginTop: '1 rem',
        marginLeft:'19rem'
    },
    textQR:{
        fontWeight: '500',
        marginTop: '-1 rem',
        marginLeft:'1 rem'
    },   
    scanButton:{
        fontSize: '1rem',
        fontWeight: '500',
        marginTop: '1 rem',
    }
})