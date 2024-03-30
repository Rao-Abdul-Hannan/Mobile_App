import { Animated, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import dummyCourses from '../serivces/dummyCourses'

const Courses = () => {

    const renderItem = ({ item }) =>
    (
        <View style={styles.card}>
            <Image source={{ uri: item.img }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );


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
            <View style={{ backgroundColor: 'rgba(0, 0, 0, .808)', flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Animated.View style={{ transform: [{ translateX: animLeft }] }}>
                        <Text style={{ fontSize: 30, textAlign: 'center', margin: 20, color: 'rgb(254,240,138)' }}>Explore Our Online Courses</Text>
                    </Animated.View>
                    <Text style={{ color: 'rgb(229, 231, 235)', textAlign: 'center', fontSize: 15, padding: 15 }}>At our educational institution, we are committed to providing a diverse selection of internet-based courses tailored to meet the requirements of contemporary learners. Our web-based courses offer a flexible, easily accessible, and inclusive approach to education, enabling individuals to pursue their learning journey from any location worldwide, at their convenience.</Text>
                </View>
                <View>
                    <FlatList data={dummyCourses} renderItem={renderItem} />
                </View>
            </View>
        </ScrollView>
    )
}

export default Courses

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 8,
        padding: 16,
        margin: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: 'black',
    },
})