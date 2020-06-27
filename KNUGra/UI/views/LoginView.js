import React from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import logo from '../../assets/images/login_logo.png';
import MajorPicker from '../components/MajorPicker';
import LoginViewModel from '../../PD/LoginViewModel';
import Database from '../../DM/Database';

let idStore;

export default function LoginView({ isAutoLoginOn, setUserLoggedIn }) {
    const [id, onChangeIDText] = React.useState(isAutoLoginOn ? '미리 저장된 ID' : "");
    const [password, onChangePWText] = React.useState();
    const [isButtonDisabled, setButtonDisabled] = React.useState(false);
    const [selectedPickerValue, setSelectedPickerValue] = React.useState('심화컴퓨터전공(ABEEK)');

    const onPressLogIn = () => {
        setButtonDisabled(true);
        idStore = (' ' + id).slice(1);
        console.log("onpress : " + idStore);
        LoginViewModel.login(id,password,selectedPickerValue);        
    }

    const loginSuccess = () => {
        console.log("database update : " + this);
        Database.update(idStore,selectedPickerValue);
        setUserLoggedIn(true);
    }

    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
          try {
            // load database at the beginning .. .
            console.log("123");
            const store = Database.getStore();

            let unsubscribe = store.subscribe(() => {
                console.log("subscribe");
                let {updateSucceed, loggedIn} = store.getState();
                if (loggedIn && !updateSucceed) {
                    console.log("loggedIn !updateSucced");
                    loginSuccess();
                } else if(!loggedIn && !updateSucceed) {
                    setUserLoggedIn(false);
                    setButtonDisabled(false);
                } else if (loggedIn && updateSucceed) {
                    console.log("loggedIn and updated Succeed");
                    unsubscribe();
                }
            });
            
            // Load fonts if we want
          } catch(e) {
            console.warn(e);
          } finally {
          }
        }
        loadResourcesAndDataAsync();
      }, []);


    // store.subscribe(() => {
    //     let {updateSucceed, loggedIn} = store.getState();
    //     console.log("haha");
    //     if (!loggedIn) {
    //       setButtonDisabled(false);
    //     }
    // });

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
                    onChangeText={text => {onChangeIDText(text);}}
                    textContentType='username'
                    value={id}
                    placeholderTextColor='#9f9f9f'
                    placeholder='YES 시스템 ID'
                    />
                    <TextInput 
                    style={styles.textInput} 
                    onChangeText={text => {onChangePWText(text);}}
                    textContentType='password'
                    value={password}
                    secureTextEntry={true}
                    placeholderTextColor='#9f9f9f'
                    placeholder='Password'
                    onSubmitEditing={onPressLogIn}
                    />
                    <View style={styles.loginButtonArea}>
                        <Button 
                            style={styles.loginButton}
                            onPress={onPressLogIn}
                            title='로그인'
                            accessibilityLabel="Login button"
                            disabled={isButtonDisabled}
                        />

                    </View>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    loginButtonArea: {
        marginTop: 10,
        minWidth: '66%',
        maxWidth: '80%',
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
        flex: 1,
    }
});