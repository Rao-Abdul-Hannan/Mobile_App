import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <View>
            <Text style={{ color: "red" }} >HomeScreen</Text>
            <Text style={styles.apniCss}>HomeScreen</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    apniCss: {
        fontSize: 24,
    }
})