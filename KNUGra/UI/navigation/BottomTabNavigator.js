import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from '../views/HomeView';
import GInfoCheckView from '../views/GInfoCheckView';
import ManageRemainView from '../views/ManageRemainView';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
    navigation.setOptions({ headerTitle: getHeaderTitle(route)});

    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <BottomTab.Screen
                name="Home"
                component={HomeView}
                options={{
                    title: 'Home Screen!!!',
                    tabBarIcon: ({ focused }) => <tabBarIcon focused={focused} name="haha" />,
                }}
            />
             <BottomTab.Screen
                name="ManageRemain"
                component={ManageRemainView}
                options={{
                    title: 'ManageRemain',
                    tabBarIcon: ({ focused }) => <tabBarIcon focused={focused} name="haha" />,
                }}
            />
             <BottomTab.Screen
                name="GInfoCheck"
                component={GInfoCheckView}
                options={{
                    title: 'GInfoCheck',
                    tabBarIcon: ({ focused }) => <tabBarIcon focused={focused} name="haha" />,
                }}
            />
        </BottomTab.Navigator>
    );
}



function getHeaderTitle(route) {
    const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

    switch (routeName) {
        case 'Home':
            return 'test';
    }
    return 'df';
} 