// This form component will need a bit more adjustments and implementation of form input components in React Native.
// You can use TextInput, TouchableOpacity, and other relevant components for form input and submission in React Native.
// Here's a simplified version for illustration purposes:

import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const View3ContactUsForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log('Form submitted:', { name, email, message });
    };

    return (
        <ScrollView>
            <View style={styles.formContainer}>
                <Text style={styles.subtitle}>Contact Us</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={[styles.input, { height: 100 }]}
                    placeholder="Your Query / Message"
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        borderWidth: 2,
        borderRadius: 5,
        flex: 1,
        flexDirection: 'column',
        margin: 30,
        shadowColor: 'black',
        elevation: 1,
        padding: 10
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 30,
        color: 'rgb(234,179,8)',
        padding: 20,
        flex: 1,
    },
    input: {
        margin: 5,
        padding: 10,
        borderWidth: 2,
        borderRadius: 7,
        borderColor: 'white',
        backgroundColor: 'rgb(55, 65, 81)',
    },
    submitButton: {
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
});

export default View3ContactUsForm;
