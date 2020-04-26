import React from 'react';
import { Text, StyleSheet, View, Platform, StatusBar, Image, KeyboardAvoidingView, Button, Picker } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import logo from '../../assets/images/login_logo.png';


export default function LoginView({ isAutoLoginOn }) {
    const [id, onChangeIDText] = React.useState(isAutoLoginOn ? '미리 저장된 ID' : null);
    const [password, onChangePWText] = React.useState();
    const [isButtonDisabled, setButtonDisabled] = React.useState(true);
    const [selectedPickerValue, setSelectedPickerValue] = React.useState();
    const onPressLogIn = () => {
        setButtonDisabled(true);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.logoArea}>
                    <Image source={logo}></Image>
                </View>

                <View style={styles.pickeArea}>
                    <Picker
                        style={styles.picker}
                        selectedValue={selectedPickerValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedPickerValue(itemValue)}
                    >
                        <Picker.Item label="test" value="test"/>
                        <Picker.Item label="test1" value="test1"/>
                        <Picker.Item label="test2" value="test2"/>
                        <Picker.Item label="test4" value="test4"/>
                        <Picker.Item label="test5" value="test5"/>
                        <Picker.Item label="test6" value="test6"/>
                        <Picker.Item label="test7" value="test7"/>
                    </Picker>

                </View>
            
                <View style={styles.inputArea}>
                    <TextInput 
                    style={styles.textInput} 
                    onChangeText={text => {onChangeIDText(text); setButtonDisabled(false)}}
                    textContentType='username'
                    value={id}
                    placeholderTextColor='#9f9f9f'
                    placeholder='YES 시스템 ID'
                    />
                    <TextInput 
                    style={styles.textInput} 
                    onChangeText={text => {onChangePWText(text); setButtonDisabled(false)}}
                    textContentType='password'
                    value={password}
                    secureTextEntry={true}
                    placeholderTextColor='#9f9f9f'
                    placeholder='Password'
                    onSubmitEditing={onPressLogIn}
                    />

                    <Button 
                        style={styles.loginButton}
                        onPress={onPressLogIn}
                        title='로그인'
                        accessibilityLabel="Login button"
                        disabled={isButtonDisabled}
                    />

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    textInput: {
        alignSelf: 'center',
        fontSize: 26,
        color: '#2e78b7',
        borderRadius: 3,
        borderBottomColor: 'rgb(219, 33, 39)',
        borderBottomWidth: 3,
        paddingLeft: 5,
        marginBottom: 10,
        minWidth: '66%',
        maxWidth: '80%',
    },

    logoArea: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    pickeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '10%',

    },


    inputArea: {
        flex: 6,
    },

    picker: {
        alignSelf: 'center',
        fontSize: 13,
        color: '#2e78b7',
        paddingLeft: 5,
        minWidth: '66%',
        maxWidth: '80%',
    },

    loginButton: {
        backgroundColor: 'rgb(219, 33, 39)',
        width:'66%',
        fontFamily: 'bold',
    }
});