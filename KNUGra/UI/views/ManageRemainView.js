import React from 'react';
import { View, StyleSheet, Text, SectionList, Button } from 'react-native';
import MajorPicker from '../components/MajorPicker';
import { Font } from '../constants/Constants';
import ProgressBar from 'react-native-progress/Bar';
import ButtonList from '../components/ButtonList';
import ManageRemainViewModel from '../../PD/RemainManageViewModel';

export default function ManageRemain() {
    const [selectedPickerValue, setSelectedPickerValue] = React.useState('심화컴퓨터전공(ABEEK)');

    const manageRemainViewModel = new ManageRemainViewModel();
    const data = manageRemainViewModel.getManageRemainUIstring(selectedPickerValue);
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
                    renderItem={({ item }) => <Item name={item.name} value={item.value} progress={item.progress} list={item.list} ></Item>}
                    renderSectionHeader={({section: {title}}) => <Header style={styles.header} title={title}/>}
                >
                </SectionList>
            </View>
        </View>
    );
}

function Header({title}) {

    switch(title) {
        default:
            return( 
                <View style={styles.header}>
                    <Text style={styles.headerText}>{title}</Text>
                    <View style={styles.subHeader}>
                        <Text style={styles.subHeaderText}>항목</Text>
                        <View style={styles.spacer}/>
                        <Text style={styles.subHeaderText}>학생/졸업기준</Text>
                        <View style={styles.spacer}/>
                        <Text style={styles.subHeaderText}>달성도</Text>
                    </View>
                </View>
            );
    }
}

function Item({name, value, progress, list}) {
    return (
        <View style={styles.item}>
            <View style={styles.itemBasic}>
                <Text style={styles.itemText}>{name}</Text>
                {value!==null? (
                    <Text style={styles.itemText}>{value}</Text>
                ) : <View style={styles.spacer} />}
                
                {progress!==null? (
                <View style={styles.progressArea}>
                    <Text style={styles.progressText}>{Math.round(progress*100)}%</Text>
                    <ProgressBar 
                        style={styles.progressBar} 
                        width={null} 
                        height={16}
                        progress={progress}/>
                </View>
                ) : null }
            </View>
            {list? (
                <View style={styles.buttonListArea}>
                    <ButtonList list={list}></ButtonList>
                </View>
            ) : null }
        </View>
    );
}

const DATA = [
    {
      title: '졸업요건 달성현황',
      data: [
            {name: '총   합', progress: .7},
            {name: '이수학점', value: '76/150학점', progress: 0}, 
            {name: '교양', value: '36/24학점', progress: 1}, 
            {name: '전공', value: '39/51학점', progress: 0.76}, 
            {name: '창업역량', value: '6/3학점', progress: 1, 
            list:
                {title: '창업 과목 이수 현황',
                data: [
                    {name: '창업가정신', value: 'X'},
                    {name: '혼자하는창업실무', value: 'X'},
                    {name: '창업가정신', value: 'X'},
                    {name: '창업가정신', value: 'X'},
                    {name: '창업가정신', value: 'X'},
                ]}
            }
         ],
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    buttonListArea: {
        justifyContent: 'center',
        paddingBottom: 3,
    },

    itemText: {
        flex: 1,
    },

    spacer: {
        flex: 1,
        width: '50%',
    },

    progressArea: {
        flex: .5,
        flexDirection: 'row',
    },

    progressText: {
        position: 'absolute',
        color: '#fff',
        zIndex: 1,
        width: '100%',
        textAlign: 'center',
       // fontWeight: 'bold',
        fontSize: Font.size - 10,
        textAlignVertical: 'center',
    },

    pickerArea: {
        flex: 1,
        alignItems:'flex-start',
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
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },  
    itemBasic: {
        flexDirection: 'row',
        padding: 20,
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

    progressBar: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'gray'
    }

});

