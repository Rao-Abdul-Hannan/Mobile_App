import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const View3ContactUsForm = () => {
    const [contactUs, setContactUs] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
    })

    const handleInput = (key, value) => {
        setContactUs({...contactUs, [key]: value})
    }

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log('Form submitted:',  contactUs );
        setContactUs({
            name: "",
            email: "",
            phoneNumber: "",
            message: "",
        })
    };

    return (
        <ScrollView>
            <View style={styles.formContainer}>
                <Text style={styles.subtitle}>Contact Us</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={contactUs.name}
                    onChangeText={(text) => handleInput('name', text)}
                    autoFocus={true}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={contactUs.email}
                    onChangeText={(text) => handleInput('email', text)}
                />
                <PhoneInput
                    defaultCode="PK"
                    value={contactUs.phoneNumber}
                    onChangeText={(number) => handleInput('phoneNumber', number)}
                    containerStyle={{ margin: 5, width: '97%', borderColor: 'white', borderWidth: 2, borderRadius: 7 }}
                    textContainerStyle={{
                        backgroundColor: 'rgb(55, 65, 81)',
                        borderLeftColor: 'rgb(0,0,0)',
                        borderLeftWidth: 1,
                    }}
                    textStyle={{
                        color: '#CBD5E0',
                    }}
                    flagButtonStyle={{ backgroundColor: 'rgb(55, 65, 81)' }}
                    textInputProps={{ keyboardType: 'phone-pad' }}
                />
                <TextInput
                    style={[styles.input, { height: 100 }]}
                    placeholder="Your Query / Message"
                    multiline
                    value={contactUs.message}
                    onChangeText={(text) => handleInput('message', text)}
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
