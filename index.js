/**
 * @format
 */

import {AppRegistry,View,Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import notifee, { EventType } from '@notifee/react-native';

notifee.onBackgroundEvent(async ({ type, detail }) => {
    if (type===EventType.ACTION_PRESS && detail.pressAction?.id === 'default'){
        await notifee.cancelNotification(detail.notification?.id)
    }    
});

import React from 'react';
function CustomComponent() {
    return (
      <View>
        <Text>A custom component</Text>
      </View>
    );
}
  
AppRegistry.registerComponent('custom-component', () => CustomComponent);  

AppRegistry.registerComponent(appName, () => App);
