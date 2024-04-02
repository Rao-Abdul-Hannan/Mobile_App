import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Courses from './Courses';
import CourseDetail from './CourseDetail';

const Stack = createStackNavigator();

const CoursesStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Course" component={Courses} />
            <Stack.Screen name="CourseDetail" component={CourseDetail} />
        </Stack.Navigator>
    )
}

export default CoursesStack

const styles = StyleSheet.create({})