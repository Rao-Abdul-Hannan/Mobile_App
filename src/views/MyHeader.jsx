import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyHeader = ({ title }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{uri:"https://www.islamiccenterworldwide.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.a22c808c.jpg&w=64&q=75"}} // Adjust the path to your logo image
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
        width: 45, // Adjust width and height as per your logo size
        height: 45,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
})