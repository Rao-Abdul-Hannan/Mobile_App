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
            <LinearGradient colors={['#4b5563', '#1f2937']} style={styles.container}>
                <View style={styles.content}>
                    <Animated.View style={[styles.animatedView, { transform: [{ translateX: animLeft }] }]}>
                        <Text style={styles.title}>
                            🌟 Unveiling the Essence of Our Mission 🌟
                        </Text>
                    </Animated.View>
                    <Text style={styles.description}>
                        Welcome to a sanctuary of Quranic enlightenment, where our mission resonates with providing a transformative platform for individuals eager to deepen their understanding of the Quran. Whether you're setting foot on the path of learning or already an advanced scholar, our meticulously designed courses cater to a diverse range of needs and proficiency levels.

                        <Text style={styles.listTitle}>Our Courses Include:</Text>
                        <View style={styles.listContainer}>
                            <Text style={styles.listItem}>- Online Noorani Qaida</Text>
                            <Text style={styles.listItem}>- Quran Tafseer Course</Text>
                            <Text style={styles.listItem}>- Quran Tajweed Course</Text>
                            <Text style={styles.listItem}>- Quran Memorisation</Text>
                            <Text style={styles.listItem}>- 40 Ahadith for Kids</Text>
                            <Text style={styles.listItem}>- Daily Masnoon Prayers</Text>
                            <Text style={styles.listItem}>- Quranic Arabic Grammar</Text>
                            <Text style={styles.listItem}>- Quran Fiqh Course</Text>
                        </View>

                        <Text style={styles.paragraph}>
                            🚀 Guided by our team of seasoned teachers and scholars, our courses delve into various dimensions of the Quran, including fiqh, tajweed, and tafseer. We firmly believe that the Quran, with its wealth of guidance and inspiration, is a beacon for all. Our unwavering goal is to assist students in unlocking its treasures and seamlessly integrating its teachings into the fabric of their lives.
                        </Text>

                        <Text style={styles.paragraph}>
                            🌈 Embark on this captivating journey of discovery and learning with us. Let us be your companions in deepening your understanding of the Quran, revealing its profound beauty, and unraveling the timeless wisdom it holds.
                        </Text>

                        <Text style={styles.paragraph}>
                            🚀 Join us on this extraordinary expedition—where the Quran comes to life, and its transformative power shapes your journey of knowledge and connection.
                        </Text>
                    </Text>
                </View>
            </LinearGradient>
        </ScrollView>
    )
}

export default About

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
    animatedView: {
        paddingBottom: 10,
        paddingTop: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgb(254,240,138)',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: 'rgb(209, 213, 219)',
    },
    listTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    listContainer: {
        marginLeft: 20,
        marginBottom: 10,
    },
    listItem: {
        fontSize: 14,
        color: 'rgb(209, 213, 219)',
    },
    paragraph: {
        fontSize: 16,
        color: 'rgb(209, 213, 219)',
        paddingTop: 10,
    },
});
