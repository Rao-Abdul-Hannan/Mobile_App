import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import PhoneInput from 'react-native-phone-number-input';
import { Picker } from '@react-native-picker/picker';
import CountryPicker from 'react-native-country-picker-modal';
import { RadioButton } from 'react-native-paper';

const StudentRegistrationForm = () => {

    const [studentRegistration, setStudentRegistration] = useState({
        name: '',
        email: '',
        selectedCountry: null,
        phoneNumber: '',
        course: '',
        enrollmentType: '',
        message: '',
    })

    const handleInput = (key, value) => {
        setStudentRegistration({
            ...studentRegistration, [key]: value
        })
    }

    const { name, email, selectedCountry, phoneNumber, course, enrollmentType, message } = studentRegistration;

    const handleSubmit = () => {

        if (!name || !email || !selectedCountry || !phoneNumber || !course || !enrollmentType || !message) {
            // Display an error message or handle the error accordingly
            console.log('Please fill in all fields.');
            return; // Prevent form submission
        }

        // Handle form submission here
        else {
            console.log(studentRegistration);

            setStudentRegistration({
                name: '',
                email: '',
                selectedCountry: null,
                phoneNumber: '',
                course: '',
                enrollmentType: '',
                message: '',
            })
        }
    };

    return (
        <View style={styles.formContainer}>
            <View style={{ flex: 1 }}>
                <Text style={styles.formHeading}>Get Your Free Trial Now!</Text>
                <Text style={{ fontSize: 13, color: 'white', backgroundColor: 'rgba(234,179,8, 0.9)', marginBottom: 10, flex: 1, textAlign: 'center' }}>OR CLAIM 10% OFF ON YOUR FIRST PURCHASE</Text>
            </View>
            <View style={{ padding: 10 }}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="black"
                    value={studentRegistration.name}
                    onChangeText={(text) => handleInput('name', text)}
                    autoFocus={true}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="black"
                    value={studentRegistration.email}
                    onChangeText={(text) => handleInput('email', text)}
                    keyboardType="email-address"
                />
                <View style={[styles.input, { padding: 10}]}>
                    <CountryPicker
                        withFilter
                        withFlag
                        withCountryNameButton={selectedCountry ? true : false}
                        withEmoji
                        onSelect={(country) => handleInput('selectedCountry', country)}
                        countryCode={selectedCountry?.cca2}
                    />
                </View>

                <PhoneInput
                    defaultCode="PK"
                    value={studentRegistration.phoneNumber}
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

                <View style={styles.input}>
                    <Picker
                        selectedValue={studentRegistration.course}
                        onValueChange={(itemValue) => handleInput('course', itemValue)}
                    >
                        <Picker.Item label="Select Course" value="" />
                        <Picker.Item label="Online Noorani Qaida" value="Online Noorani Qaida" />
                        <Picker.Item label="Quran with Tajweed" value="Quran with Tajweed" />
                        <Picker.Item label="Quran tafseer course" value="Quran tafseer course" />
                        <Picker.Item label="Memorisation of Holy Quran" value="Memorisation of Holy Quran" />
                        <Picker.Item label="40 Ahadith for kids" value="40 Ahadith for kids" />
                        <Picker.Item label="Daily Masnoon Prayers (Dua)" value="Daily Masnoon Prayers (Dua)" />
                        <Picker.Item label="Quran Fiqh Course" value="Quran Fiqh Course" />
                        <Picker.Item label="Quranic Arabic Grammar" value="Quranic Arabic Grammar" />
                    </Picker>
                </View>
                {/* radio buttons */}
                <View style={styles.radioButtonContainer}>
                    <Text>I want to Enroll For</Text>
                    {/* for my self */}
                    <TouchableOpacity
                        onPress={() => handleInput('enrollmentType', 'for my self')}
                    >
                        <View style={styles.radioButton}>
                            <RadioButton
                                value="for my self"
                                status={enrollmentType === 'for my self' ? 'checked' : 'unchecked'}
                                onPress={() => handleInput('enrollmentType', 'for my self')}
                                color="#009688" // Customize the selected color
                            />
                            <Text>for my self</Text>
                        </View>
                    </TouchableOpacity>
                    {/* for my kid */}
                    <TouchableOpacity
                        onPress={() => handleInput('enrollmentType', 'for my kid')}
                    >
                        <View style={styles.radioButton}>
                            <RadioButton
                                value="for my kid"
                                status={enrollmentType === 'for my kid' ? 'checked' : 'unchecked'}
                                onPress={() => handleInput('enrollmentType', 'for my kid')}
                                color="#009688" // Customize the selected color
                            />
                            <Text style={styles.label}>For my kid</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Query/Message"
                    placeholderTextColor="black"
                    multiline
                    numberOfLines={8}
                    value={studentRegistration.message}
                    onChangeText={(text) => handleInput('message', text)}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit} title="Submit">
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default StudentRegistrationForm

const styles = StyleSheet.create({
    formContainer: {
        borderWidth: 2,
        borderRadius: 5,
        flex: 1,
        flexDirection: 'column',
        margin: 30,
        shadowColor: 'black',
        elevation: 1,
    },
    formHeading: {
        textAlign: 'center',
        fontSize: 30,
        color: 'rgb(234,179,8)',
        padding: 20,
        flex: 1,
    },
    input: {
        margin: 5,
        borderWidth: 2,
        borderRadius: 7,
        borderColor: 'white',
        backgroundColor: 'rgb(55, 65, 81)',
    },
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