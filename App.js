/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/home/Home';
import SettingsScreen from './src/home/ProfileScreen';
import ProfileScreen from './src/home/ProfileScreen';
import BookingScreen from './src/home/BookingScreen';
import AppointmentScreen from './src/home/AppointmentScreen';
import AccountScreen from './src/home/AccountScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import IconHome from './src/images/home.svg';
import IconProfile from './src/images/folder.svg';
import IconAppointment from './src/images/calendar.svg';
import IconAccount from './src/images/account.svg';
import IconAdd from './src/images/add.svg';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home"
                            component={HomeScreen}
                            options={{
                                tabBarIcon: () => (
                                    <IconHome width={20} height={40}/>
                                ),
                            }}/>
                <Tab.Screen name="Profile" component={ProfileScreen}
                            options={{
                                tabBarIcon: () => (
                                    <IconProfile width={20} height={40}/>
                                ),
                            }}/>
                <Tab.Screen name="Booking" component={BookingScreen}
                            options={{
                                tabBarIcon: () => (
                                    <View style={{backgroundColor: Colors.black,
                                        width: 60,
                                        height: 60,
                                        marginBottom: 30,
                                        borderRadius: 100,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    borderColor:Colors.white,
                                    borderWidth: 4}}>
                                        <IconAdd width={30} height={30}/>
                                    </View>
                                ),
                            }}
                />
                <Tab.Screen name="Appointment" component={AppointmentScreen} options={{
                    tabBarIcon: () => (
                        <IconAppointment width={20} height={40}/>
                    ),
                }}/>
                <Tab.Screen name="Account" component={AccountScreen}
                            options={{
                                tabBarIcon: () => (
                                    <IconAccount width={20} height={40}/>
                                ),
                            }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
