import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function signIn(props) {

    const { navigation } = props;

    return (
        <View style={styles.container}>
            <Image style={styles.controlImage} source={require('../icons/control.png')}/>
            <Text style={styles.homeHead}> RD150 Smart Controller </Text>

            <View style={styles.flexBox}>

                <TouchableOpacity style={styles.homeBox} onPress={() => navigation.navigate('machineDetails')}>
                    <Text style={styles.macTitle}> Machine 1</Text>
                    <Image style={styles.macImage} source={require('../icons/machine.png')}/>
                    <Image style={styles.macImage} source={require('../icons/Rectangle.png')}/>
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

const styles = EStyleSheet.create({
    container: {
        justifyContent: 'center', alignItems: 'center',
      },
    homeHead: {
        height: '1.875rem',
        width: '100%',
        marginLeft: '12 rem',
        marginTop: '1 rem',
        fontSize: '1.1875rem',
        fontWeight: 'bold',

    },
    controlImage:{
        top: '3.125rem',
        alignSelf: "flex-start",
        marginLeft: '3 rem'
    },
    macImage:{
        marginLeft: '4 rem',
        marginTop: '1 rem'
    },
    thermoImage:{
        width: '1.25rem',
        height: '1.25rem',
        marginTop: '2 rem',
        marginLeft:'.5 rem'
    },
    thermoData:{
        marginTop: '-1 rem',
        marginLeft:'1.75 rem'
    },
    waterdropImage:{
        width: '1.25rem',
        height: '1.25rem',
        marginLeft:'5 rem',
        marginTop: '-1.5 rem',
    },
    waterdropData:{
        marginTop: '-1 rem',
        marginLeft:'6.5 rem'        
    },
    addImage:{
        alignSelf: "center",
        marginTop: '2 rem',
        width: '3rem',
        height: '3.125rem',
    },
    flexBox: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: '3 rem',
        justifyContent: 'space-around',
    },
    homeBox: {
        height: '11 rem',
        width: '10 rem',
        marginLeft: '.5 rem',
        borderRadius: '1.25rem',
        backgroundColor: '#FFFFFF',
        alignSelf:'flex-start',
        marginBottom: '1 rem',
    },
    macTitle: {
        alignSelf: "center",
        marginTop: '1 rem',
    },

})