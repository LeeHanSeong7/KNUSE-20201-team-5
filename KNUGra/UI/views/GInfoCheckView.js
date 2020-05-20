import React from 'react';
import { View, StyleSheet, Text, SectionList } from 'react-native';
import MajorPicker from '../components/MajorPicker';
import { Font } from '../constants/Constants';
import GInfoCheckViewModel from '../../PD/GinfoCheckViewModel';

export default function GInfoCheckView() {
    const [selectedPickerValue, setSelectedPickerValue] = React.useState('심화컴퓨터전공(ABEEK)');

    const gInfoCheckViewModel = new GInfoCheckViewModel();
    const data = gInfoCheckViewModel.getGInfoCheckUIstring(selectedPickerValue)//05.14 22:34 수정됨
    return (
        <View style={styles.container}>
            <View style={styles.pickerArea}>
                <MajorPicker
                    selectedPickerValue={selectedPickerValue}
                    setSelectedPickerValue={setSelectedPickerValue}
                />
            </View>

            <View style={styles.listArea}>
                <SectionList
                    sections={data}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item name={item.name} value={item.value}></Item>}
                    renderSectionHeader={({section: {title}}) => <Header style={styles.header} title={title}/>}
                >
                </SectionList>
            </View>
        </View>
    );
}

function Header({title}) {

    switch(title) {
        case '졸업요건': 
            return( 
                <View style={styles.header}>
                    <Text style={styles.headerText}>{title}</Text>
                    <View style={styles.subHeader}>
                        <Text style={styles.subHeaderText}>항목</Text>
                        <View style={styles.spacer}></View>
                        <Text style={styles.subHeaderText}>졸업기준</Text>
                    </View>
                </View>
            );
        case '필수 교과목':
            return( 
                <View style={styles.header}>
                    <Text style={styles.headerText}>{title}</Text>
                    <View style={styles.subHeader}>
                        <Text style={styles.subHeaderText}>교과목명</Text>
                    </View>
                </View>
            );
        default:
            return (
                <View style={styles.header}>
                    <Text style={styles.headerText}>{title}</Text>
                    <View style={styles.subHeader}>
                        <Text style={styles.subHeaderText}>교과목명</Text>
                    </View>
                </View>
            );
    }
}

function Item({name, value}) {

    if (value === null) {
        return (
            <View style={styles.item}>
                <Text style={styles.itemText}>{name}</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.item}>
                <Text style={styles.itemText}>{name}</Text>
                <View style={styles.spacer}></View>
                <Text style={styles.itemText}>{value}</Text>
            </View>
        );
    }
}


const DATA = [
    {
      title: '졸업요건',
      data: [{name: '이수학점', value: '150학점'}, {name: '기본소양', value: '15학점'}, {name: '전공기반', value: '22학점'}],
    },
    {
      title: '필수 교과목',
      data: [{name: '자료구조'}, {name: '시스템프로그래밍'}, {name: '종합설계프로젝트2'}],
    },
    {
      title: '선택 교과목',
      data: [{name: '이수학점', value: '150학점'}, {name: '이수학점', value: '150학점'}, {name: '이수학점', value: '150학점'}],
    },
    {
      title: '하하',
      data: [{name: '이수학점', value: '150학점'}, {name: '이수학점', value: '150학점'}, {name: '이수학점', value: '150학점'}],
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    spacer: {
        flex: 1,
    },

    pickerArea: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: '3%',
        justifyContent: 'center',
    },

    listArea: {
        flex: 10,
        paddingHorizontal: '4%',
    },
    
    text: {
        color: '#000',
    },

    item: {
        flexDirection: 'row',
        padding: 20,

        borderBottomColor: 'black',
        borderBottomWidth: 1,
        //textAlignVertical: 'bottom',
    },  
    header: {
        marginTop: 3,
        backgroundColor: '#fff',
        borderBottomColor: 'black',
        borderBottomWidth: 3,
    },
    subHeader: {
        flexDirection: 'row',
        marginVertical: 8,
        //textAlign: 'center',
    },  
    headerText: {
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: Font.size - 8,
    },
    subHeaderText: {
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: 10,
    },

});

