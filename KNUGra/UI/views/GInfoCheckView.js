import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function GInfoCheckView() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>gigigi</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 26, 
        color: '#000',
    }
});

