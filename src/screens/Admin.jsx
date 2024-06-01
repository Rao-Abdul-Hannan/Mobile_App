import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Profile from '../views/Profile';
import SignUp from '../views/signUpLogin/SignUp';
import { app } from '../db/config';

const auth = getAuth(app);

const Admin = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {user ? <Profile /> : <SignUp />}
        </ScrollView>
    )
}

export default Admin

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})