import { Animated, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import CountryPicker from 'react-native-country-picker-modal';
import { RadioButton } from 'react-native-paper';
import {GradientText} from '../components/commons/GradientText';
import PhoneInput from 'react-native-phone-number-input';




const Home = () => {

    const animLeft = useRef(new Animated.Value(-500)).current;
    const animRight = useRef(new Animated.Value(500)).current;
    const animUp = useRef(new Animated.Value(500)).current;

    useEffect(() => {
        Animated.timing(animLeft, {
            toValue: 0,
            duration: 1000, // adjust the duration as per your preference
            useNativeDriver: true,
        }).start();

        Animated.timing(animRight, {
            toValue: 0,
            duration: 1000, // adjust the duration as per your preference
            useNativeDriver: true,
        }).start();
        Animated.timing(animUp, {
            toValue: 0,
            duration: 1000, // adjust the duration as per your preference
            useNativeDriver: true,
        }).start();
    }, [animLeft, animRight, animUp]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState();
    const [course, setCourse] = useState('');
    const [enrollmentType, setEnrollmentType] = useState('');
    const [message, setMessage] = useState('');


    const handleEnrollmentSelection = (value) => {
        setEnrollmentType(value);
    };

    const handleSubmit = () => {

        if (!name || !email || !selectedCountry || !phoneNumber || !course || !enrollmentType || !message) {
            // Display an error message or handle the error accordingly
            console.log('Please fill in all fields.');
            return; // Prevent form submission
        }

        // Handle form submission here
        else {
            console.log('Form submitted!');
            console.log(name)
            console.log(email)
            console.log(selectedCountry)
            console.log(phoneNumber)
            console.log(course)
            console.log(message)
            console.log('Selected Enrollment Type:', enrollmentType);
        }

        setName('');
        setEmail('');
        setSelectedCountry(null);
        setPhoneNumber();
        setCourse('');
        setMessage('');
        setEnrollmentType('');
    };

    return (
        <ScrollView>
            <View style={styles.mainContainer}>

                {/* top headings */}
                <View style={styles.headingContainer}>
                    <Animated.View style={{ transform: [{ translateX: animLeft }] }}>
                        <View style={[styles.individualHeading]}>
                            <GradientText style={{ fontSize: 30, padding: 10, textAlign: 'center' }} colors={['yellow', 'red']}>Discover the Digital Way to Study & Explore the Quran!</GradientText>
                        </View>
                    </Animated.View>
                    <Animated.View style={{ transform: [{ translateX: animRight }] }}>
                        <View style={[styles.individualHeading]}>
                            <GradientText style={{ fontSize: 30, padding: 10, textAlign: 'center' }} colors={['blue', 'orange']}>Through our E-Islamic Education system</GradientText>
                        </View>
                    </Animated.View>
                    <View style={[styles.individualHeading]}>
                        <Text style={{ fontSize: 15, padding: 10, textAlign: 'center', color: 'white' }}>We extend a warm invitation to individuals of all backgrounds and genders to embark on a journey of Quranic knowledge.</Text>
                    </View>
                    <Animated.View style={{ transform: [{ translateY: animUp }] }}>
                        <View style={[styles.individualHeading]}>
                            <Text style={{ fontSize: 15, padding: 10, textAlign: 'center', color: 'rgb(134,239,172)' }}>Join us today and take the first step towards a lifelong path of Quranic education.</Text>
                        </View>
                    </Animated.View>
                </View>

                {/* form starts */}

                <View style={styles.formContainer}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.formHeading}>Get Your Free Trial Now!</Text>
                        <Text style={{ fontSize: 13, color: 'white', backgroundColor: 'rgba(234,179,8, 0.9)', marginBottom: 10, flex: 1, textAlign: 'center' }}>OR CLAIM 10% OFF ON YOUR FIRST PURCHASE</Text>
                    </View>
                    <View style={{ padding: 10 }}>
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
                            keyboardType="email-address"
                        />
                        <View style={styles.input}>
                            <CountryPicker
                                withFilter
                                withFlag
                                withCountryNameButton={selectedCountry ? true : false}
                                withEmoji
                                onSelect={(country) => setSelectedCountry(country)}
                                countryCode={selectedCountry?.cca2}
                            />
                        </View>

                        <PhoneInput
                            defaultCode="PK"
                            value={phoneNumber}
                            onChangeText={(number) => setPhoneNumber(number)}
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
                                selectedValue={course}
                                onValueChange={(itemValue) => setCourse(itemValue)}
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
                                onPress={() => handleEnrollmentSelection('for my self')}
                            >
                                <View style={styles.radioButton}>
                                    <RadioButton
                                        value="for my self"
                                        status={enrollmentType === 'for my self' ? 'checked' : 'unchecked'}
                                        onPress={() => handleEnrollmentSelection('for my self')}
                                        color="#009688" // Customize the selected color
                                    />
                                    <Text>for my self</Text>
                                </View>
                            </TouchableOpacity>
                            {/* for my kid */}
                            <TouchableOpacity
                                onPress={() => handleEnrollmentSelection('for my kid')}
                            >
                                <View style={styles.radioButton}>
                                    <RadioButton
                                        value="for my kid"
                                        status={enrollmentType === 'for my kid' ? 'checked' : 'unchecked'}
                                        onPress={() => handleEnrollmentSelection('for my kid')}
                                        color="#009688" // Customize the selected color
                                    />
                                    <Text style={styles.label}>For my kid</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Query/Message"
                            multiline
                            numberOfLines={8}
                            value={message}
                            onChangeText={setMessage}
                        />
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        zIndex: 0,
        backgroundColor: 'rgba(0, 0, 0, .808)',
    },
    headingContainer: {
        flex: 2,
        zIndex: 1,
    },
    individualHeading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        zIndex: 2,
    },
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
        padding: 10,
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