import { SimpleLineIcons } from '@expo/vector-icons';
import React from 'react';

export default function TabBarIcon({name, focused}) {
    return (
        <SimpleLineIcons
            name={name}
            size={30}
            color={focused? '#2f95dc':'#000'}
        />
    )


}