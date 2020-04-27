import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function HomeView({ navigation }) {

    const onPressButton1 = () => { navigation.navigate('ManageRemain') };
    const onPressButton2 = () => { navigation.navigate('GInfoCheck') };

    return (
        <View style={styles.container}>
            <SimpleLineIcons.Button 
                style={styles.button}
                backgroundColor="#000"
                name='graduation'
                size={80}
                onPress={onPressButton1}

            >
            졸업관리
            </SimpleLineIcons.Button>
            <View style={styles.spacer} />
            <SimpleLineIcons.Button 
                style={styles.button}
                backgroundColor="#000"
                name='list'
                size={80}
                onPress={onPressButton2}

            >
            졸업목록
            </SimpleLineIcons.Button>
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

    spacer: {
        height: '5%',

    },

    button: {
        padding: 30,
        //margin: 20,
        width: '80%',
    },
});

