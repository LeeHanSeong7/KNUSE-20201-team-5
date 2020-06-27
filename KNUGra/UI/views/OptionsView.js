import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Database from '../../DM/Database';
import types from '../../DM/actions/types';

export default function OptionsView({route:{ params:{ setUserLoggedIn }}}) {
    

    const onLogoutButtonPress = () => {
        setUserLoggedIn(false);
        Database.getStore().dispatch({type: types.LOGOUT});
    };
    return (
        <View style={styles.container}>
            <Button style={styles.logoutButton} title='로그아웃' onPress={onLogoutButtonPress} />
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
    },

    logoutButton: {
    }
});

