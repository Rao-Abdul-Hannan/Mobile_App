import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const About = () => {
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

                    <Animated.View style={{ transform: [{ translateX: animLeft }] }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'rgb(254,240,138)', paddingBottom: 10, paddingTop: 10 }}>
                            🌟 Unveiling the Essence of Our Mission 🌟
                        </Text>
                    </Animated.View>
                    <Text style={{ fontSize: 16, color: 'rgb(209, 213, 219)', paddingLeft: 40, paddingRight: 40, paddingBottom: 40, paddingTop: 10 }}>
                        Welcome to a sanctuary of Quranic enlightenment, where our mission resonates with providing a transformative platform for individuals eager to deepen their understanding of the Quran. Whether you're setting foot on the path of learning or already an advanced scholar, our meticulously designed courses cater to a diverse range of needs and proficiency levels.

                        🚀 Guided by our team of seasoned teachers and scholars, our courses delve into various dimensions of the Quran, including fiqh, tajweed, and tafseer. We firmly believe that the Quran, with its wealth of guidance and inspiration, is a beacon for all. Our unwavering goal is to assist students in unlocking its treasures and seamlessly integrating its teachings into the fabric of their lives.

                        🌈 Embark on this captivating journey of discovery and learning with us. Let us be your companions in deepening your understanding of the Quran, revealing its profound beauty, and unraveling the timeless wisdom it holds.

                        🚀 Join us on this extraordinary expedition—where the Quran comes to life, and its transformative power shapes your journey of knowledge and connection.
                    </Text>
                </View>
            </LinearGradient>
        </ScrollView>
    )
}

export default About

const styles = StyleSheet.create({})