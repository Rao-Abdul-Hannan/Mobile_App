import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import TopHeadings from '../views/TopHeadings';
import StudentRegistrationForm from '../views/StudentRegistrationForm';

const Home = () => {

    return (
        <ScrollView>
            <View style={styles.mainContainer}>

                {/* top headings start */}

                <TopHeadings />

                {/* top headings end */}

                {/* form starts */}

                <StudentRegistrationForm />

                {/* form ends */}

                
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
})