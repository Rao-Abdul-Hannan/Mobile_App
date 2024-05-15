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
                    </Text>
                    {/* Updated styling for visually focused and attractive section */}
                    <View style={styles.courseContainer}>
                        <Text style={styles.listTitle}>Our Courses Include:</Text>
                        <View style={styles.listItems}>
                            <Text style={styles.listItem}>- Online Noorani Qaida</Text>
                            <Text style={styles.listItem}>- Quran Tafseer Course</Text>
                            <Text style={styles.listItem}>- Quran Tajweed Course</Text>
                            <Text style={styles.listItem}>- Quran Memorisation</Text>
                            <Text style={styles.listItem}>- 40 Ahadith for Kids</Text>
                            <Text style={styles.listItem}>- Daily Masnoon Prayers</Text>
                            <Text style={styles.listItem}>- Quranic Arabic Grammar</Text>
                            <Text style={styles.listItem}>- Quran Fiqh Course</Text>
                        </View>
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
        fontWeight: 'bold',
        color: '#FFD700', // Golden color for title
        marginBottom: 10,
        fontSize: 17,
    },
    description: {
        fontSize: 16,
        color: 'white', // Dark gray color for description
    },
    courseContainer: {
        backgroundColor: '#1E90FF', // Dodger blue for course container
        paddingHorizontal: 20, // Increased padding in horizontal direction
        paddingVertical: 15, // Padding in vertical direction
        borderRadius: 8,
        marginBottom: 20,
        marginTop: 20, // Margin from the top
    },

    listTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF6347', // Tomato color for list title
        marginBottom: 10,
    },
    listItems: {
        marginLeft: 20,
    },
    listItem: {
        fontSize: 14,
        color: '#FFFFFF', // White color for list items
        marginBottom: 5,
    },
    paragraph: {
        fontSize: 16,
        color: '#2E8B57', // Sea green color for paragraphs
        paddingTop: 10,
    },
});
