import React from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, Button, Picker } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import logo from '../../assets/images/login_logo.png';
import MajorPicker from '../components/MajorPicker';

export default function LoginView({ isAutoLoginOn, setUserLoggedIn }) {
    const [id, onChangeIDText] = React.useState(isAutoLoginOn ? '미리 저장된 ID' : null);
    const [password, onChangePWText] = React.useState();
    const [isButtonDisabled, setButtonDisabled] = React.useState(true);
    const [selectedPickerValue, setSelectedPickerValue] = React.useState('심화컴퓨터전공(ABEEK)');
    const onPressLogIn = () => {
        setButtonDisabled(true);
        setUserLoggedIn(true);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.logoArea}>
                    <Image source={logo}></Image>
                </View>

                <View style={styles.pickeArea}>
                    <MajorPicker 
                        selectedPickerValue={selectedPickerValue}
                        setSelectedPickerValue={setSelectedPickerValue}    
                    />
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

    logoArea: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -60
    },

    pickeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },

    inputArea: {
        flex: 5,
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

    loginButton: {
        backgroundColor: 'rgb(219, 33, 39)',
        width:'66%',
        fontFamily: 'bold',
    }
});