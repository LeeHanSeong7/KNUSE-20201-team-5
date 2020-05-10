import React from 'react';
import { StyleSheet, View, SectionList, Text } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Font } from '../constants/Constants';
export default function ButtonList({ list }) {
    const [listExpanded, setListExpanded] = React.useState(false);
    const onPress = () => { setListExpanded(!listExpanded); }
    return (
        <View style={styles.container}>
            <SimpleLineIcons.Button
            style={styles.button}
            name={ listExpanded? 'arrow-up' :'arrow-down' }
            onPress={onPress}
            size={10}
            >{listExpanded? '접어 보기':'펼쳐 보기'}</SimpleLineIcons.Button>
            {listExpanded? (
            <View style={styles.listArea}>
                {Header(list)}
                {list.data.map( ( item, index ) => (
                    <Item key={item + index} name={item.name} value={item.value} ></Item>
                ))}
            </View>) : null }
     
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
                        <Text style={styles.subHeaderText}>교과목명</Text>
                        <View style={styles.spacer}/>
                        <Text style={styles.subHeaderText}>이수여부</Text>
                    </View>
                </View>
            );
    }
}

function Item({name, value}) {
    return (
        <View style={styles.item}>
            <View style={styles.itemBasic}>
                <Text style={styles.itemText}>{name}</Text>
                <Text style={styles.spacer}></Text>
                {value!==null? (
                    <Text style={styles.itemText}>{value}</Text>
                ) : <View style={styles.spacer} />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    button: {
    },

    listArea: {
        flex: 10,
        paddingHorizontal: '4%',
    },
    item: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },  
    itemBasic: {
        flexDirection: 'row',
        padding: 20,
        textAlignVertical: 'bottom',
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
        textAlign: 'center',
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
    },


    itemText: {
        alignSelf: 'center',
    },

    spacer: {
        flex: 1,
        width:'50%',
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
});