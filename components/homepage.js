import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default function signIn(props) {

    const { navigation } = props;

    return (
        <View>
            <Image style={styles.controlImage} source={require('../icons/control.png')}/>
            <Text style={styles.homeHead}> RD150 Smart Controller </Text>

            <View style={styles.flexBox}>

                <TouchableOpacity style={styles.homeBox} onPress={() => navigation.navigate('machineDetails')}>
                    <Text style={styles.macTitle}> Machine 1</Text>
                    <Image style={styles.macImage} source={require('../icons/machine.png')}/>
                    <Image style={styles.rectImage} source={require('../icons/Rectangle.png')}/>
                    <Image style={styles.thermoImage} source={require('../icons/thermometer.png')}/>
                    <Text style={styles.thermoData}>37.4</Text>
                    <Image style={styles.waterdropImage} source={require('../icons/water-drop.png')}/>
                    <Text style={styles.waterdropData}>67 RH</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.homeBox} onPress={() => navigation.navigate('addDevice')}>
                    <Text style={styles.macTitle}> Add Machine </Text>
                    <Image style={styles.addImage} source={require('../icons/add.png')}/>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    homeHead: {
        height: 30,
        width: 225,
        left: 120,
        top: 75,
        position: "absolute",
        fontSize: 19,
        fontWeight: '700',

    },
    controlImage:{
        top: 50,
        left: 60,
    },
    macImage:{
        left:70,
        top: 40,
    },
    rectImage:{
        top: 50,
        left: 70,
    },
    thermoImage:{
        top: 80,
        left: 10,
        width: 20.02,
        height: 20,
    },
    thermoData:{
        top: 60,
        left: 35,
        
    },
    waterdropImage:{
        top: 40,
        left: 95,
        width: 20.02,
        height: 20,
    },
    waterdropData:{
        top: 20,
        left: 120,
        
    },
    addImage:{
        left: 65,
        top:40,
        width: 48,
        height: 50,
    },
    flexBox: {
        //display: 'flex',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        top: 143,
        justifyContent: 'space-around',
    },
    homeBox: {
        height: 170,
        width: 170,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
    },
    macTitle: {
        top: 20 ,
        left: 53,
    },

})