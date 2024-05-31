import React from 'react';
import { Text, View, Linking, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const View2GetInTouch = () => {
    const contactInfo = [
        { icon: 'call-outline', value: '+92 316 4125 265', link: 'tel:+923164125265' },
        { icon: 'mail-outline', value: 'islamiccenterworldwide@outlook.com', link: 'mailto:islamiccenterworldwide@outlook.com' },
        { icon: 'logo-skype', value: 'Islamic Center WorldWide', link: 'https://join.skype.com/invite/w17XvYvU8Z4H' },
    ];

    return (
        <View style={{ margin: 30, }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'rgb(234,179,8)', marginBottom: 30}}>You can also reach us at these platforms</Text>
            {contactInfo.map((info, index) => (
                <Text key={index} style={styles.contactText} onPress={() => Linking.openURL(info.link)}>
                    <Ionicons name={info.icon} size={20} color='white' /> {info.value}
                </Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    contactText: {
        fontSize: 16,
        marginBottom: 5,
        color: 'white', // Adjust color as needed
    },
    // Add more styles as needed
});

export default View2GetInTouch;
