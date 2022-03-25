import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import notifee from '@notifee/react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import HomeScreen from './src/Screens/HomeScreen'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {

  function timer(){
    console.log('empezo');

    setInterval(() => {
      console.log('Interval triggered');
    }, 1000);
  }
  
  async function onDisplayNotification() {

    // Create a channel
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        pressAction: {
          id: 'default',
          mainComponent: 'custom-component',
        },
        // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
      },
    });

  }

    // <View>
    //   <Text>Hola</Text>
    //   <Button title="Display Notification" onPress={() => onDisplayNotification()} />
    //   <Button title="TIMer" onPress={() => timer()} />
    // </View>
  return (
    <NavigationContainer > 
      <Stack.Navigator >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
