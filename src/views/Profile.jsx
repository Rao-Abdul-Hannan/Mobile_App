import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import 'firebase/auth';
import { deleteUser, getAuth } from 'firebase/auth';
import { app } from '../db/config';

const auth = getAuth(app)

const Profile = () => {
    const user = auth.currentUser;
    const handleLogout = async () => {
        try {
            await deleteUser(user).then(() => {
                Alert.alert("Account Deleted successfully")
            });
        } catch (error) {
            Alert.alert(error.message);
        }
    };
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Delete Account</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgb(234,179,8)',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        margin: 10,
        width: 150
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
})