import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyHeader = ({ title }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/Images/logo.webp')} // Adjust the path to your logo image
                style={styles.logo}
            />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default MyHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingTop: 40,
    },
    logo: {
        width: 50, // Adjust width and height as per your logo size
        height: 50,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
})