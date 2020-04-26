import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { SplashScreen } from 'expo';
import { Ionicons } from '@expo/vector-icons';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import LoginView from './UI/views/LoginView';
import { SafeAreaProvider } from 'react-native-safe-area-context';


//import BottomTabNavigator from './UI/navigation/BottomTabNavigator';
//import useLinking from './UI/navigation/useLinking';

//const Stack = createStackNavigator();

export default function App(props) {

  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [isUserLoggedIn, setUserLoggedIn] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  //const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

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
      <LoginView />
    </SafeAreaProvider>
    );
  } else return null; /*(
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Root" component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  ); */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
