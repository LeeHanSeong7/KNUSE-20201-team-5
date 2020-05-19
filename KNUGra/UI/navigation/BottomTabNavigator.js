import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from '../views/HomeView';
import GInfoCheckView from '../views/GInfoCheckView';
import ManageRemainView from '../views/ManageRemainView';
import OptionsView from '../views/OptionsView';
import TabBarIcon from '../components/TabBarIcon';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator(props) {

    props.navigation.setOptions({ 
        headerTitle: getHeaderTitle(props.route), 
    });

    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <BottomTab.Screen
                name="Home"
                component={HomeView}
                options={{
                    title: '홈',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
                }}
            />
             <BottomTab.Screen
                name="ManageRemain"
                component={ManageRemainView}
                options={{
                    title: '졸업관리',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="graduation" />,
                }}
                
            />
             <BottomTab.Screen
                name="GInfoCheck"
                component={GInfoCheckView}
                options={{
                    title: '졸업목록',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="list" />,
                }}
            />
            <BottomTab.Screen
                name="Options"
                component={OptionsView}
                options={{
                    title: '더보기',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='options' />,
                }}
                initialParams={{setUserLoggedIn: props.initialParams.setUserLoggedIn}}
            />
        </BottomTab.Navigator>
    );
}



function getHeaderTitle(route) {
    const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

    switch (routeName) {
        case 'Home':
            return '홈';
        case 'ManageRemain':
            return '졸업관리';
        case 'GInfoCheck':
            return '졸업목록';
        case 'Options':
            return '더보기';        
    }
} 
