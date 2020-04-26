import React from 'react';
import { StyleSheet, View, Platform, StatusBar, YellowBox } from 'react-native';
import { SplashScreen } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from './UI/views/LoginView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNavigator from './UI/navigation/BottomTabNavigator';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);


const Stack = createStackNavigator();

export default function App(props) {


  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [isUserLoggedIn, setUserLoggedIn] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load fonts if we want
      } catch(e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else if (!isUserLoggedIn) {
    return (
    <SafeAreaProvider>
      <LoginView setUserLoggedIn={setUserLoggedIn} />
    </SafeAreaProvider>
    );
  } else return (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Root'>
          {props => <BottomTabNavigator {...props} setUserLoggedIn={setUserLoggedIn} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});