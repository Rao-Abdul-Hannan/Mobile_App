import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const View5OurFemaleFaculty = () => {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>
                Explore our Quranic education program tailored exclusively for sisters and daughters. We prioritize creating a secure and supportive learning environment. Our qualified female instructors specialize in teaching Quranic studies, Tajweed, memorization, and various Islamic subjects.
            </Text>
            <Text style={styles.text}>
                Embrace the advantages of learning from our dedicated and skilled female educators by joining our program today.
            </Text>
        </View>
    )
}

export default View5OurFemaleFaculty

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        paddingHorizontal: 33,
        paddingVertical: 8,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        color: 'white',
    },
})