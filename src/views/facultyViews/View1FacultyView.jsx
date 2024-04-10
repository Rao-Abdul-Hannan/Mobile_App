import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import View3OurFaculty from './View3OurFaculty'
import View5OurFemaleFaculty from './View5OurFemaleFaculty'
const View1FacultyView = () => {
    return (
        <>
            {/* Molana Muhammad Azeem */}
            <View style={styles.bgContainer}>
                <View style={styles.photoContainer}>
                    {/* <Image
                        source={{uri: '../../assets/Images/favicon_io/android-chrome-192x192.png'}}
                        style={styles.image}
                    /> */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Molana Muhammad Azeem</Text>
                    </View>
                </View>
                <View3OurFaculty />
            </View>

            {/* female faculty */}
            <View style={[styles.bgContainer, styles.femaleBg]}>
                <View style={styles.photoContainer}>
                    {/* <Image
                        source={require('../assets/photos/quran.jpg')}
                        style={styles.image}
                    /> */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Islamic Center WoldWide</Text>
                    </View>
                </View>
                <View5OurFemaleFaculty />
            </View>
        </>
    )
}

export default View1FacultyView

const styles = StyleSheet.create({
    bgContainer: {
        backgroundColor: '#1E90FF',
        paddingVertical: 16,
        flexDirection: 'row',
    },
    femaleBg: {
        backgroundColor: '#FF69B4',
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
        color: '#FFFF00',
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333333',
    },
})