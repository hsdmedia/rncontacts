import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
// import { GlobalContext } from '../context/Provider';


const AppNavContainer = () =>
{
    const isLoggedIn = false;
    // const state = useContext(GlobalContext);
    console.log('initial state: ', state);
    return (
        <NavigationContainer>
            {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
}
export default AppNavContainer