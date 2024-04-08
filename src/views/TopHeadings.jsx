import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { GradientText } from '../components/commons/GradientText'

const TopHeadings = () => {

    const animLeft = useRef(new Animated.Value(-500)).current;
    const animRight = useRef(new Animated.Value(500)).current;
    const animUp = useRef(new Animated.Value(500)).current;

    useEffect(() => {
        Animated.timing(animLeft, {
            toValue: 0,
            duration: 1000, // adjust the duration as per your preference
            useNativeDriver: true,
        }).start();

        Animated.timing(animRight, {
            toValue: 0,
            duration: 1000, // adjust the duration as per your preference
            useNativeDriver: true,
        }).start();
        Animated.timing(animUp, {
            toValue: 0,
            duration: 1000, // adjust the duration as per your preference
            useNativeDriver: true,
        }).start();
    }, [animLeft, animRight, animUp]);

    return (
        <View style={styles.headingContainer}>
            <Animated.View style={{ transform: [{ translateX: animLeft }] }}>
                <View style={[styles.individualHeading]}>
                    <GradientText style={{ fontSize: 30, padding: 10, textAlign: 'center' }} colors={['yellow', 'red']}>Discover the Digital Way to Study & Explore the Quran!</GradientText>
                </View>
            </Animated.View>
            <Animated.View style={{ transform: [{ translateX: animRight }] }}>
                <View style={[styles.individualHeading]}>
                    <GradientText style={{ fontSize: 30, padding: 10, textAlign: 'center' }} colors={['blue', 'orange']}>Through our E-Islamic Education system</GradientText>
                </View>
            </Animated.View>
            <View style={[styles.individualHeading]}>
                <Text style={{ fontSize: 15, padding: 10, textAlign: 'center', color: 'white' }}>We extend a warm invitation to individuals of all backgrounds and genders to embark on a journey of Quranic knowledge.</Text>
            </View>
            <Animated.View style={{ transform: [{ translateY: animUp }] }}>
                <View style={[styles.individualHeading]}>
                    <Text style={{ fontSize: 15, padding: 10, textAlign: 'center', color: 'rgb(134,239,172)' }}>Join us today and take the first step towards a lifelong path of Quranic education.</Text>
                </View>
            </Animated.View>
        </View>
    )
}

export default TopHeadings

const styles = StyleSheet.create({
    headingContainer: {
        flex: 2,
        zIndex: 1,
    },
    individualHeading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        zIndex: 2,
    },
})