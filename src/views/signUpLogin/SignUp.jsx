// import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
// import React, { useState } from 'react'
// import PhoneInput from 'react-native-phone-number-input'
// import { useNavigation } from '@react-navigation/native'
// import { app } from '../../db/config'

// const auth = getAuth(app)

// const SignUp = () => {
//     const navigation = useNavigation();

//     const [signUp, setSignUp] = useState({
//         name: "",
//         email: "",
//         cnic: "",
//         phoneNumber: "",
//         password: "",
//     })

//     const handleInput = (key, value) => {
//         setSignUp({
//             ...signUp, [key]: value
//         })
//     }

//     const handleSubmit = async () => {
//         try {
//             await createUserWithEmailAndPassword(auth, signUp.name, signUp.email, signUp.cnic, signUp.phoneNumber, signUp.password);
//             Alert.alert("Your account is successfully created");
//             setSignUp({
//                 name: "",
//                 email: "",
//                 cnic: "",
//                 phoneNumber: "",
//                 password: "",
//             })
//             navigation.navigate('Admin')
//         } catch (error) {
//             Alert.alert(error.message)
//         }
//     }

//     return (
//         <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20, backgroundColor: 'rgba(0, 0, 0, .808)' }}>

//             <View style={styles.formContainer}>
//                 <TextInput
//                     style={styles.formInput}
//                     placeholder='Name'
//                     onChangeText={text => handleInput("name", text)}
//                     value={signUp.name}
//                     autoFocus={true}
//                 />
//                 <TextInput
//                     style={styles.formInput}
//                     placeholder='Email'
//                     onChangeText={text => handleInput("email", text)}
//                     value={signUp.email}
//                 />
//                 <TextInput
//                     style={styles.formInput}
//                     placeholder='CNIC without dashes'
//                     onChangeText={text => handleInput("cnic", text)}
//                     value={signUp.cnic}
//                 />
//                 <PhoneInput
//                     defaultCode="PK"
//                     value={signUp.phoneNumber}
//                     onChangeText={(number) => handleInput('phoneNumber', number)}
//                     containerStyle={{ margin: 5, width: '97%', borderColor: 'white', borderWidth: 2, borderRadius: 7 }}
//                     textContainerStyle={{
//                         backgroundColor: 'rgb(55, 65, 81)',
//                         borderLeftColor: 'rgb(0,0,0)',
//                         borderLeftWidth: 1,
//                     }}
//                     textStyle={{
//                         color: '#CBD5E0',
//                     }}
//                     flagButtonStyle={{ backgroundColor: 'rgb(55, 65, 81)' }}
//                     textInputProps={{ keyboardType: 'phone-pad' }}
//                 />
//                 <TextInput
//                     style={styles.formInput}
//                     placeholder='Password'
//                     onChangeText={text => handleInput("password", text)}
//                     value={signUp.password}
//                 />
//                 <View >
//                     <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//                         <Text style={styles.buttonText}>Sign Up</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={[styles.button, { width: 200 }]} onPress={() => navigation.navigate("Login")}>
//                         <Text style={styles.buttonText}>Already have an account?</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </ScrollView>
//     )
// }

// export default SignUp

// const styles = StyleSheet.create({
//     formInput: {
//         margin: 5,
//         height: 60,
//         padding: 8,
//         borderWidth: 2,
//         borderRadius: 7,
//         borderColor: 'white',
//         backgroundColor: 'rgb(55, 65, 81)',
//     },
//     button: {
//         backgroundColor: 'rgb(234,179,8)',
//         padding: 10,
//         borderRadius: 5,
//         alignItems: 'center',
//         margin: 10,
//         width: 150
//     },
//     buttonText: {
//         color: 'white',
//         fontWeight: 'bold',
//     },
//     formContainer: {
//         borderWidth: 2,
//         borderRadius: 5,
//         shadowColor: 'black',
//         elevation: 1,
//         padding: 20,
//     },
// })

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignUp = () => {
    return (
        <View>
            <Text>SignUp</Text>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({})