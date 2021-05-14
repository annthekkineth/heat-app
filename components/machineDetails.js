import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export default function machineDetails(props) {

    const { navigation } = props;

    return (
        <View>
           
            <View style={styles.flexBox}>
                <View style={styles.homeBox}>
                    <Text style={styles.box1Text}>Day</Text>
                    <TextInput style={styles.input}/>
                    <Text style={styles.box1Text}>Period</Text>
                    <TextInput style={styles.inputPeriod}/>
                    <Image style={styles.refreshImage} source={require('../icons/rotateleft.png')}/>
                </View>
                <View style={styles.notificationBox} >
                    <Text style={styles.notificationHead}>Notification </Text>
                </View>
                <View style={styles.setTemp}>
                <Image style={styles.thermoImage} source={require('../icons/thermometer.png')}/>
                    <Text style={styles.textTemp}>Set Temparature</Text>
                </View>
                <View style={styles.setHumidity}>
                <Image style={styles.thermoImage} source={require('../icons/water-drop.png')}/>
                    <Text style={styles.textTemp}>Set Humidity</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  
    flexBox: {
        //display: 'flex',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // alignItems: 'center',
        top: 74,
        // justifyContent: 'center',
        
    },
    homeBox: {
        height: 180,
        width: '90%',
        left: 20,
        borderRadius: 20,
        backgroundColor: '#E9E9E9',
        // alignSelf: "flex-start",
    },
    notificationBox: {
        height: 180,
        width: '90%',
        left: 20,
        borderRadius: 20,
        backgroundColor: '#F2C94C',
        top: 200,
        position:'absolute',
    },
    setTemp:{
        position: 'absolute',
        top:400,
        left: 20,
        borderRadius: 20,
        height: 70,
        width:180,
        backgroundColor: "#FFF"
    },
    thermoImage:{
        // position: 'absolute',
        top: 20,
        left: 10,
        width: 20.02,
        height: 20,
    },
    textTemp:{
        left: 40,
        top: 3,
    },
    setHumidity:{
        position: 'absolute',
        top:400,
        left: 250,
        borderRadius: 20,
        height: 70,
        width:180,
        backgroundColor: "#FFF"
    },
    box1Text: {
        height: 50,
        width: 90,
        left: 35,
        top: 60,
        fontSize: 17,
        fontWeight: '500',
    },
    input: {
        width: 183,
        left: 150,
        height: 55,
        top: 30,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        position: 'absolute',
    },
    inputPeriod: {
        width: 183,
        left: 150,
        height: 55,
        top: 100,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        position: 'absolute',
    },
    refreshImage: {
        position: 'absolute',
        top: 120,
        left: 350,
        width: 20,
        height:20,
    },
    notificationHead:{
        left: 24,
        top: 10,
        fontSize: 16,
    }
})