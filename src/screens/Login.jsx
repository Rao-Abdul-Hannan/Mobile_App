// import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import React, { useState } from 'react'
// import { app } from '../db/config'
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
// import { useNavigation } from '@react-navigation/native'

// const auth = getAuth(app)

// const Login = () => {
//     const navigation = useNavigation();

//     const [login, setLogin] = useState({
//         email: '',
//         password: ''
//     })

//     const handleInput = (key, value) => {
//         setLogin({ ...login, [key]: value })
//     }

//     const handleSubmit = async () => {

//         try {
//             await signInWithEmailAndPassword(auth, login.email, login.password);

//             Alert.alert("Login is successful");

//             setLogin({
//                 email: "",
//                 password: "",
//             })

//             navigation.navigate('Admin')

//         } catch (error) {
//             Alert.alert(error.message);
//         }
//     }

//     return (
//         <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, .808)' }}>
//             <View style={styles.formContainer}>
//                 <TextInput
//                     style={styles.formInput}
//                     placeholder='Email'
//                     onChangeText={text => handleInput("email", text)}
//                     value={login.email}
//                     autoFocus={true}
//                 />
//                 <TextInput
//                     style={styles.formInput}
//                     placeholder='Password'
//                     onChangeText={text => handleInput("password", text)}
//                     value={login.password}
//                 />
//                 <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//                     <Text style={styles.buttonText}>Login</Text>
//                 </TouchableOpacity>
//             </View>
//         </ScrollView>
//     )
// }

// export default Login

// const styles = StyleSheet.create({
//     formContainer: {
//         borderWidth: 2,
//         borderRadius: 5,
//         shadowColor: 'black',
//         elevation: 1,
//         padding: 20,
//         marginHorizontal: 10,
//     },
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
// })

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View>
            <Text>Login</Text>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})