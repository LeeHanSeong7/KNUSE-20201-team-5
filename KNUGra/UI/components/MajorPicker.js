import React from 'react';
import { StyleSheet, Picker, Platform, ActionSheetIOS, Button, View, Text } from 'react-native';
import { Color, Font } from '../constants/Constants';


export default function MajorPicker({ selectedPickerValue, setSelectedPickerValue }) {

    const options = ["취소", "심화컴퓨터전공(ABEEK)", "t2", "t3", "t4"];

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
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            setSelectedPickerValue(options[buttonIndex]);
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
                onValueChannge={(itemValue, itemIndex) => setSelectedPickerValue(itemValue)}

            >
                <Picker.Item label="test" value="test" />
                <Picker.Item label="test1" value="test1" />
                <Picker.Item label="test2" value="test2" />
                <Picker.Item label="test4" value="test4" />
                <Picker.Item label="test5" value="test5" />
                <Picker.Item label="test6" value="test6" />
                <Picker.Item label="test7" value="test7" />
            </Picker>
        );
    }
}

const styles = StyleSheet.create({
    picker_android: {
        alignSelf: 'center',
        fontSize: Font.size - 4,
        color: '#2e78b7',
        paddingLeft: 5,
        minWidth: '66%',
        maxWidth: '80%',
    },
    picker_ios: {
        minWidth: '66%',
        maxWidth: '80%',
        height: '50%',
        textAlignVertical: 'center',
        textAlign: 'center',
        borderBottomColor: 'red',
        borderBottomWidth: 10,
        padding: '30%',
    },


});
