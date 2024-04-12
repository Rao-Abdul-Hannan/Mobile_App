import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import View2GetInTouch from '../views/contactViews/View2GetInTouch ';
import View3ContactUsForm from '../views/contactViews/View3ContactUsForm';

const Contact = () => {
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
            <LinearGradient colors={['#4b5563', '#1f2937']} style={styles.container}>
                <View style={styles.content}>
                    <Animated.View style={[styles.animatedView, { transform: [{ translateX: animLeft }] }]}>
                        <Text style={styles.title}>
                            🌟 Get in Touch 🌟
                        </Text>
                    </Animated.View>
                </View>
                {/* translate the code of Next.js component wise */}
                <View2GetInTouch/>
                <View3ContactUsForm/>
            </LinearGradient>
        </ScrollView>
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
})