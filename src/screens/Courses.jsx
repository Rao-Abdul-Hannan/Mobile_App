import { Animated, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { dummyCourses } from '../serivces/dummyCourses';
import { useNavigation } from '@react-navigation/native';
import handleScroll from '../utils/scroll/handleScroll';
import RenderCourseCards from '../views/coursesViews/RenderCourseCards';

const Courses = () => {
    // hooks
    const navigation = useNavigation();
    const animLeft = useRef(new Animated.Value(-500)).current;
    // state variables
    const [upperFlex, setUpperFlex] = useState(1);
    const [paragraphVisible, setParagraphVisible] = useState(true);

    // funtion to navigate dynamically
    const handleCardPress = (course) => {
        navigation.navigate('Course Detail', { course });
    };
    // function to shrink flex upon scroll
    const handleFlexShrink = (event) => {
        handleScroll(event, setUpperFlex, setParagraphVisible);
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
                    renderItem={({ item }) => RenderCourseCards({ item, handleCardPress })}
                    onScroll={handleFlexShrink} // Use onScroll instead of handleScroll directly
                    scrollEventThrottle={16} // Adjust the throttle value as needed
                />
            </View>
        </View>
    );
};

export default Courses;

const styles = StyleSheet.create({});
