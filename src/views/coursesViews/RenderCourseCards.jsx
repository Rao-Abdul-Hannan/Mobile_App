import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const RenderCourseCards = ({ item }) => {
    return (
        <TouchableOpacity onPress={() => handleCardPress(item)}>
            <View style={styles.card}>
                <Image source={{ uri: item.img }} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <TouchableOpacity style={styles.readMoreButton} onPress={() => handleCardPress(item)}>
                    <Text style={styles.readMoreText}>Read More</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default RenderCourseCards

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

    readMoreButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Opaque background color
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
    },
    readMoreText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})