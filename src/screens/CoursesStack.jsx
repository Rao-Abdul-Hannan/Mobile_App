import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Courses from './Courses';
import CourseDetail from './CourseDetail';

const Stack = createStackNavigator();

const CoursesStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Courses" component={Courses} />
            <Stack.Screen name="Course Detail" component={CourseDetail} />
        </Stack.Navigator>
    )
}

export default CoursesStack

const styles = StyleSheet.create({})