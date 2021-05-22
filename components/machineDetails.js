import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import {
    LineChart,
} from "react-native-chart-kit";
import EStyleSheet from 'react-native-extended-stylesheet';


export default function machine(props) {

    const { navigation } = props;

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 20 }}>

                <View style={styles.homeBox}>
                    <Text style={styles.box1Text}>Day</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.box1Text}>Period</Text>
                    <TextInput style={styles.inputPeriod} />
                    <Image style={styles.refreshImage} source={require('../icons/rotateleft.png')} />
                </View>

                <View style={styles.notificationBox} >
                    <Text style={styles.notificationHead}>Notification </Text>
                </View>

                <View style={styles.box3}>
                    <View style={styles.setTemp}>
                        <Image style={styles.thermoImage} source={require('../icons/thermometer.png')} />
                        <Text style={styles.textTemp}>Set Temparature</Text>
                    </View>
                    <View style={styles.setHumidity}>
                        <Image style={styles.thermoImage} source={require('../icons/water-drop.png')} />
                        <Text style={styles.textTemp}>Set Humidity</Text>
                    </View>
                </View>

                <View style={styles.graph1}>
                    <Text style={styles.graphHead}> Temperature graph </Text>
                    <LineChart
                        data={{
                            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width - 50} // from react-native
                        height={220}

                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#f5e571",
                            backgroundGradientFrom: "#f5e571",
                            backgroundGradientTo: "#d1c35a",
                            // decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",

                                // stroke: "#000"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }}
                    />
                </View>

                <View style={styles.graph1}>
                    <Text style={styles.graphHead}>Humidity Graph</Text>
                    <LineChart
                        data={{
                            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width - 50} // from react-native
                        height={220}

                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#f5e571",
                            backgroundGradientFrom: "#f5e571",
                            backgroundGradientTo: "#d1c35a",
                            // decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",

                                // stroke: "#000"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }}
                    />
                </View>

            </ScrollView>
        </View>

    )
}



const styles = EStyleSheet.create({

    homeBox: {
        height: '11rem',
        width: '90%',
        left: '1.25rem',
        borderRadius: '1.25rem',
        backgroundColor: '#E9E9E9',
        marginBottom: '1.25 rem'
    },
    box1Text: {
        height: '3.125rem',
        width: '5.125rem',
        marginLeft: '1.25rem',
        top: '1.25rem',
        fontSize: '1.0625rem',
        fontWeight: '500',
    },
    input: {
        width: '9.125rem',
        marginLeft: '8rem',
        height: '2.75rem',
        top: '-2.25rem',
        backgroundColor: '#fff',
        borderRadius: '0.625rem',
    },
    inputPeriod: {
        width: '9.125rem',
        marginLeft: '8rem',
        height: '2.75rem',
        top: '-3.25rem',
        backgroundColor: '#fff',
        borderRadius: '0.625rem',

    },
    refreshImage: {
        marginLeft: '18rem',
        top: '-5rem',
        width: '1.75rem',
        height: '1.75rem'
    },
    notificationBox: {
        height: '11rem',
        width: '90%',
        left: '1.25rem',
        borderRadius: '1.25rem',
        backgroundColor: '#F2C94C',
        marginBottom: '1.25 rem'
    },
    notificationHead: {
        marginLeft: '1.75 rem',
        marginTop: '0.75 rem',
        fontSize: '1rem',
    },
    box3: {
        flex: 1,
        flexDirection: 'row',
        left: '1.25rem',
        marginBottom: '1.25 rem'
    },
    setTemp: {
        borderRadius: '1.25rem',
        height: '4.375 rem',
        width: '40%',
        backgroundColor: "#FFF"
    },
    thermoImage: {
        width: '1.2 rem',
        height: '1.2 rem',
        marginLeft: '0.5 rem',
        top: '1.25 rem',
    },
    textTemp: {
        marginLeft: '2.25 rem',
    },
    setHumidity: {
        left: '1.25rem',
        borderRadius: '1.25rem',
        height: '4.375 rem',
        width: '40%',
        backgroundColor: "#FFF"
    },
    graph1: {
        justifyContent: 'center', alignItems: 'center',
        backgroundColor: "#fff",
        borderRadius: '1.25rem',
        width: '90%',
        left: '1.25rem',
        height: '15.75rem',
        marginBottom: '1.25 rem'
    },
    graphHead:{
        marginTop: '0.5 rem',
        alignSelf: "flex-start",
        marginLeft: '1 rem',
    }
})