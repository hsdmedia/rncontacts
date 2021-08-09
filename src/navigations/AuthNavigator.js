import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { LOGIN, REGISTER } from '../constants/routeNames';
import Login from '../screens/Login';

const Register = () =>
{
    return (
        <View>
            <Text>Hi, this is Register component</Text>
        </View>
    )
}
const AuthNavigator = () =>
{
    const AuthNavigator = createStackNavigator();
    return (
        <AuthNavigator.Navigator>
            <AuthNavigator.Screen name={LOGIN} component={Login}></AuthNavigator.Screen>
            <AuthNavigator.Screen name={REGISTER} component={Register}></AuthNavigator.Screen>
        </AuthNavigator.Navigator>
    )
}
export default AuthNavigator