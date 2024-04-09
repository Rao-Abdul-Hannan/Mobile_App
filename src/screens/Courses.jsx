import { Animated, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { dummyCourses } from '../serivces/dummyCourses';
import { useNavigation } from '@react-navigation/native';

const Courses = () => {
    const navigation = useNavigation();

    const handleCardPress = (course) => {
        navigation.navigate('Course Detail', { course });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleCardPress(item)}>
            <View style={styles.card}>
                <Image source={{ uri: item.img }} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    );

    const animLeft = useRef(new Animated.Value(-500)).current;
    const [upperFlex, setUpperFlex] = useState(1);
    const [paragraphVisible, setParagraphVisible] = useState(true);
    
    const handleScroll = (event) => {
        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
        const scrollY = contentOffset.y;
        // console.log(scrollY) // 130
        const scrollHeight = contentSize.height;
        // console.log(scrollHeight) // 3094
        const screenHeight = layoutMeasurement.height;
        // console.log(screenHeight) // 400
        const maxScroll = scrollHeight - screenHeight;
        // console.log(maxScroll) // 2700
        const scrollFraction = maxScroll > 0 ? scrollY / maxScroll : 0;
        // console.log(scrollFraction) // 0.02 and decreasing when scroll up
        const newFlex = 1 - scrollFraction * 5; // Adjust the multiplier to control the rate of flex decrease
        setUpperFlex(newFlex < 0.15 ? 0.15 : newFlex); // Ensure upperFlex does not go below 0.25
        setParagraphVisible(scrollY <= 0); // Hide paragraph content when scrolling up
    };

    useEffect(() => {
        Animated.timing(animLeft, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [animLeft]);

    return (
        <View style={{ backgroundColor: 'rgba(0, 0, 0, .808)', flex: 1 }}>
            <View style={{ flex: upperFlex, justifyContent: 'center', alignItems: 'center' }}>
                <Animated.View style={{ transform: [{ translateX: animLeft }] }}>
                    <Text style={{ fontSize: 30, textAlign: 'center', margin: 20, color: 'rgb(254,240,138)' }}>Explore Our Online Courses</Text>
                </Animated.View>
                {/* Conditionally render the paragraph content based on visibility */}
                {paragraphVisible && (
                    <Text style={{ color: 'rgb(229, 231, 235)', textAlign: 'center', fontSize: 15, padding: 15 }}>At our educational institution, we are committed to providing a diverse selection of internet-based courses tailored to meet the requirements of contemporary learners. Our web-based courses offer a flexible, easily accessible, and inclusive approach to education, enabling individuals to pursue their learning journey from any location worldwide, at their convenience.</Text>
                )}
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={dummyCourses}
                    renderItem={renderItem}
                    onScroll={handleScroll}
                    scrollEventThrottle={16} // Adjust the throttle value as needed
                />
            </View>
        </View>
    );
};

export default Courses;

const styles = StyleSheet.create({
    card: {
        flex: 1,
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
    readMoreText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'red'
    },
});
