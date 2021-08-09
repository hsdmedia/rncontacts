import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import { HOME_NAVIGATOR } from '../constants/routeNames';
const DrawerNavigator = () =>
{
    const DrawerNavigator = createDrawerNavigator();
    return (
        <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen name={HOME_NAVIGATOR} component={HomeNavigator}></DrawerNavigator.Screen>
        </DrawerNavigator.Navigator>
    )
}
export default DrawerNavigator