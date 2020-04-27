import React from 'react';
import { StyleSheet, Picker, Platform, ActionSheetIOS, Button, View, Text } from 'react-native';
import { Color, Font } from '../constants/Constants';


export default function MajorPicker({selectedPickerValue, setSelectedPickerValue}) {

    const options = ["취소", "심화컴퓨터전공(ABEEK)", "t2", "t3", "t4"];
       
    if (true  && Platform.OS === 'ios') {
        const onPress = () => {
            ActionSheetIOS.showActionSheetWithOptions(
                {
                    options: options,
                    cancelButtonIndex: 0
                },
                buttonIndex => {
                    switch(buttonIndex) {
                        case 0 : break;
                        case 1 :
                        case 2 :
                        case 3 :    
                        case 4 :    
                            setSelectedPickerValue(options[buttonIndex]);
                            break;
                    }
                }
            )
        }
        
        return (
            <Text style={styles.picker_ios} onPress={onPress} >{selectedPickerValue}</Text>
        );
    } else {
        return (
        <Picker
            style={styles.picker_android}
            selectedValue={selectedPickerValue}
            onValueChannge={(itemValue, itemIndex) => setSelectedPickerValue(itemValue)}

        >
            <Picker.Item label="test" value="test"/>
            <Picker.Item label="test1" value="test1"/>
            <Picker.Item label="test2" value="test2"/>
            <Picker.Item label="test4" value="test4"/>
            <Picker.Item label="test5" value="test5"/>
            <Picker.Item label="test6" value="test6"/>
            <Picker.Item label="test7" value="test7"/>
        </Picker>
        );
    }
}

const styles = StyleSheet.create({
    picker_android: {
        alignSelf: 'center',
        fontSize: 13,
        color: '#2e78b7',
        paddingLeft: 5,
        minWidth: '66%',
        maxWidth: '80%',
    },
    picker_ios: {
        minWidth: '66%',
        maxWidth: '80%',
        borderColor: Color.red,
        borderWidth: 3,
        borderRadius: 5,
        color: '#000',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: Font.size - 4,
        paddingVertical: 10,
        

    },

    
});
