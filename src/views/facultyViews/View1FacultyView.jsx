import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import View3OurFaculty from './View3OurFaculty'
import View5OurFemaleFaculty from './View5OurFemaleFaculty'
import { LinearGradient } from 'expo-linear-gradient'

const View1FacultyView = () => {
    const [text, setText] = useState('');
    const fullText = "Meet Our Online Faculty";

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                setText('')
                currentIndex = 0;
            }
        }, 250); // Adjust the speed by changing the interval time
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <LinearGradient colors={['#4b5563', '#1f2937']}>
            <Text style={styles.header}>{text}</Text>
                {/* Molana Muhammad Azeem */}
                <View style={styles.bgContainer}>
                    <View style={styles.photoContainer}>
                        <Image
                            source={{ uri: "https://www.islamiccenterworldwide.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fazeem.1ee79fd5.jpeg&w=384&q=75" }}
                            style={styles.image}
                        />
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Molana Muhammad Azeem</Text>
                        </View>
                    </View>
                    <View3OurFaculty />
                </View>

                {/* female faculty */}
                <View style={[styles.bgContainer, styles.femaleBg]}>
                    <View style={styles.photoContainer}>
                        <Image
                            source={{ uri: "https://www.islamiccenterworldwide.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquran.5bda0a5f.jpg&w=640&q=75" }}
                            style={styles.image}
                        />
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Islamic Center WoldWide</Text>
                        </View>
                    </View>
                    <View5OurFemaleFaculty />
                </View>
            </LinearGradient>
        </>
    )
}

export default View1FacultyView

const styles = StyleSheet.create({
    header: {
        textAlign: "center",
        margin: 10,
        fontWeight: "bold",
        fontSize: 24,
        color: 'rgb(234,179,8)',
    },
    bgContainer: {
        paddingVertical: 16,
        flexDirection: 'column',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        margin: 20,
        shadowColor: 'black',
        elevation: 1,
    },
    photoContainer: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    titleContainer: {
        marginTop: 8,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'rgb(234,179,8)',
    },
})