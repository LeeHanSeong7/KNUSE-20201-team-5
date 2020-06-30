import React from 'react';
import { StyleSheet, Picker, Platform, ActionSheetIOS, Button, View, AsyncStorage } from 'react-native';
import { Color, Font } from '../constants/Constants';
import { allMajors } from '../../DM/DAPATH';


export default function MajorPicker({ selectedPickerValue, setSelectedPickerValue }) {

    const options = [ 
        "취소", ...allMajors,
    ];

    if (true && Platform.OS === 'ios') {
        const onPress = () => {
            ActionSheetIOS.showActionSheetWithOptions(
                {
                    options: options,
                    cancelButtonIndex: 0
                },
                buttonIndex => {
                    switch (buttonIndex) {
                        case 0: break;
                        default:
                            setSelectedPickerValue(options[buttonIndex]);
                            AsyncStorage.setItem('selected', options[buttonIndex]);
                            break;
                    }
                }
            )
        }

        return (
            <View>
                <Button
                    style={styles.picker_ios}
                    onPress={onPress}
                    title={selectedPickerValue}
                />
            </View>

        );
    } else {
        return (
            <Picker
                style={styles.picker_android}
                selectedValue={selectedPickerValue}
                onValueChange={(itemValue, itemIndex) => setSelectedPickerValue(itemValue)}
            >
                {allMajors.map(major => (<Picker.Item label={major} value={major} />))}
            </Picker>
        );
    }
}

const styles = StyleSheet.create({
    picker_android: {
        minWidth: '66%',
        maxWidth: '80%',
    },
    picker_ios: {
        minWidth: '66%',
        maxWidth: '80%',
    },


});
