import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/Provider';


const AppNavContainer = () =>
{
    const isLoggedIn = useContext(GlobalContext);
    console.log('initial logged In state: ', isLoggedIn);
    return (
        <NavigationContainer>
            {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
}
export default AppNavContainer;