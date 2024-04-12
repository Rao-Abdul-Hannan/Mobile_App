import React from 'react';
import { Text, View, Linking, StyleSheet } from 'react-native';

const View2GetInTouch = () => {
    const contactInfo = [
        { label: 'Phone:', value: '+92 316 4125 265', link: 'tel:+923164125265' },
        { label: 'Email:', value: 'islamiccenterworldwide@outlook.com', link: 'mailto:islamiccenterworldwide@outlook.com' },
        { label: 'Skype:', value: 'Islamic Center WorldWide', link: 'https://join.skype.com/invite/w17XvYvU8Z4H' },
        // Add more contact info as needed
    ];

    return (
        <View style={{ marginBottom: 20 }}>
            <Text style={styles.subtitle}>Get in Touch</Text>
            {contactInfo.map((info, index) => (
                <Text key={index} style={styles.contactText} onPress={() => Linking.openURL(info.link)}>
                    {info.label} {info.value}
                </Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    contactText: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333', // Adjust color as needed
    },
    // Add more styles as needed
});

export default View2GetInTouch;
