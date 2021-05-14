import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

import signIn from './components/signIn';
import signUp from './components/signUp';
import homepage from './components/homepage';
import machineDetails from './components/machineDetails';
import addDevice from './components/addDevice';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={signIn} />
        <Stack.Screen name="signUp" component={signUp}/>
        <Stack.Screen name="homepage" component={homepage}/>
        <Stack.Screen name="machineDetails" component={machineDetails}/>
        <Stack.Screen name="addDevice" component={addDevice}/>
        {/* <Stack.Screen name="Home" component={DrawerRoutes} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#878787',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
