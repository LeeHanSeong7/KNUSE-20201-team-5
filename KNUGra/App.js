import React from 'react';
import { StyleSheet, View, Platform, StatusBar, YellowBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from './UI/views/LoginView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNavigator from './UI/navigation/BottomTabNavigator';
import Database from './DM/Database';
//import TcpSocket from 'react-native-tcp-socket';
//import { connect } from 'react-redux'; 
import types from './DM/actions/types';

const Stack = createStackNavigator();

export default function App(props) {

  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [isUserLoggedIn, setUserLoggedIn] = React.useState(false);
  const [isUpdateComplete, setUpdateComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // load database at the beginning .. .
        Database.load();
        const store = Database.getStore();
        store.subscribe(() => {
          let {updateSucceed} = store.getState();
          if (updateSucceed) {
            setUpdateComplete(true);
          } else { // error ui
            setUpdateComplete(false);
          }
          
        });
        // Load fonts if we want
      } catch(e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else if (!isUserLoggedIn || !isUpdateComplete) {
    return (
    <SafeAreaProvider>
      <LoginView setUserLoggedIn={setUserLoggedIn} />
    </SafeAreaProvider>
    );
  } else return (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Root'
        >
          {props => 
          (<BottomTabNavigator
            {...props} 
            initialParams={{setUserLoggedIn}}
          />)}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
  );
}

//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});