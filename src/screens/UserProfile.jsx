import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Admin from './Admin';
import Login from './Login';

const Stack = createStackNavigator();

const UserProfile = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Admin" component={Admin} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default UserProfile

const styles = StyleSheet.create({})