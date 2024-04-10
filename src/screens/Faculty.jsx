import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import View1FacultyView from '../views/facultyViews/View1FacultyView';

const Faculty = () => {
    return (
        <>
            <ScrollView>
                <View1FacultyView />
            </ScrollView>
        </>
    );
};


const styles = StyleSheet.create({
    bgContainer: {
        backgroundColor: '#1E90FF',
        paddingVertical: 16,
        flexDirection: 'row',
    },
    femaleBg: {
        backgroundColor: '#FF69B4',
    },
    photoContainer: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    titleContainer: {
        marginTop: 8,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFF00',
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333333',
    },
});

export default Faculty;
