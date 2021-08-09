import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { CONTACT_DETAILS, CONTACT_LIST } from '../constants/routeNames';
import Contacts from '../screens/contacts';
import Settings from '../screens/Settings';
const ContactDetail = () =>
{
    return (
        <View>
            <Text>Hi, this is Contact Detail component</Text>
        </View>
    )
}
const CreateContact = () =>
{
    return (
        <View>
            <Text>Hi, this is create contact component</Text>
        </View>
    )
}

const HomeNavigator = () =>
{
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetail}></HomeStack.Screen>
            <HomeStack.Screen name={"Create Contacts"} component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name={"Settings"} component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}
export default HomeNavigator