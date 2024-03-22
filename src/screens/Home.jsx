import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import MaskedView from '@react-native-masked-view/masked-view';

const GradientText = ({ colors, style, children }) => {
    return (
        <MaskedView maskElement={<Text style={style}>{children}</Text>}>
            <LinearGradient
                colors={colors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}>
                <Text style={[style, { opacity: 0 }]}>{children}</Text>
            </LinearGradient>
        </MaskedView>
    );
};


const Home = () => {

    const animLeft = useRef(new Animated.Value(-500)).current;
    const animRight = useRef(new Animated.Value(500)).current;

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
    }, [animLeft, animRight]);

    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <View style={styles.headingContainer}>
                    <Animated.View style={{ transform: [{ translateX: animLeft }] }}>
                        <View style={[styles.individualHeading]}>
                            <GradientText style={{ fontSize: 30, padding: 10, textAlign: 'center', color: 'white' }} colors={['yellow', 'red']}>Discover the Digital Way to Study & Explore the Quran!</GradientText>
                        </View>
                    </Animated.View>
                    <Animated.View style={{ transform: [{ translateX: animRight }] }}>
                        <View style={[styles.individualHeading]}>
                            <GradientText style={{ fontSize: 30, padding: 10, textAlign: 'center', color: 'white' }} colors={['blue', 'orange']}>Through our E-Islamic Education system</GradientText>
                        </View>
                    </Animated.View>
                    <View style={[styles.individualHeading]}>

                        <Text style={{ fontSize: 15, padding: 10, textAlign: 'center', color: 'white' }}>We extend a warm invitation to individuals of all backgrounds and genders to embark on a journey of Quranic knowledge.</Text>

                    </View>
                    <View style={[styles.individualHeading]}>

                        <Text style={{ fontSize: 15, padding: 10, textAlign: 'center', color: 'white' }}>Join us today and take the first step towards a lifelong path of Quranic education.</Text>

                    </View>
                </View>
                <View style={{flex: 1, backgroundColor: 'blue'}}><Text>lkasdlkfslkfjlf</Text></View>
                
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        zIndex: 0,
    },
    headingContainer: {
        flex: 2,    
        backgroundColor: 'rgba(0, 0, 0, .808)',
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