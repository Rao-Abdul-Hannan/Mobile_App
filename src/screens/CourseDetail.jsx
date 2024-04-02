import { Animated, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const CourseDetail = ({ route }) => {

    const { course } = route.params;

    const animLeft = useRef(new Animated.Value(-500)).current;

    useEffect(() => {
        Animated.timing(animLeft, {
            toValue: 0,
            duration: 1000, // adjust the duration as per your preference
            useNativeDriver: true,
        }).start();
    }, [animLeft])

    return (
        <ScrollView>
            <LinearGradient colors={['#4b5563', '#1f2937']} style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={{ uri: course.img }} style={{ width: 412, height: 500 }} />
                    <Animated.View style={{ transform: [{ translateX: animLeft }] }}>
                        <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'rgb(254,240,138)', paddingBottom: 10, paddingTop: 10 }}>{course.title}</Text>
                    </Animated.View>
                    <Text style={{ fontSize: 16, color: 'rgb(209, 213, 219)', paddingLeft: 40, paddingRight: 40, paddingBottom: 40, paddingTop: 10 }}>{course.description}</Text>
                </View>
            </LinearGradient>
        </ScrollView>
    )
}

export default CourseDetail

const styles = StyleSheet.create({})