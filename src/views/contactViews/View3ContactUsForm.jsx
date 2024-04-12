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
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    submitButton: {
        backgroundColor: '#007bff', // Adjust color as needed
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    // Add more styles as needed
});

export default View3ContactUsForm;
