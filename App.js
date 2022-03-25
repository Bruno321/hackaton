import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import notifee from '@notifee/react-native';



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

  return (
    <View>
      <Text>Hola</Text>
      <Button title="Display Notification" onPress={() => onDisplayNotification()} />
      <Button title="TIMer" onPress={() => timer()} />
    </View>
  );
};


export default App;
