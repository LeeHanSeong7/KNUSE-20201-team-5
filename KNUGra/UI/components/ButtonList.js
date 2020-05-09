import React from 'react';
import { StyleSheet, View, SectionList } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function ButtonList({ list }) {
    const [listExpanded, setListExpanded] = React.useState(false);
    const onPress = () => { setListExpanded(!listExpanded); }
    return (
        <View>
            <SimpleLineIcons.Button
            style={styles.button}
            name={ listExpanded? 'arrow-up' :'arrow-down' }
            onPress={onPress}
            size={10}
            >{listExpanded? '접어 보기':'펼쳐 보기'}</SimpleLineIcons.Button>
            {listExpanded? (      
                <SectionList>

                </SectionList>) : null }
     
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
    }
});