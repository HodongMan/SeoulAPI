/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import SideMenu from 'react-native-side-menu';

import {NavigationBar, SideBar} from './components';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class ContentView extends Component<{}> {

  render() {
    return (
      
        <View>
          <NavigationBar/>
          <Text style={styles.welcome}>
            React Native로 서울 공공앱 개발중
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
          <MapView
            style={styles.map}
            initialRegion={{
            latitude: 37.67889641679633,
            longitude: 127.0784050666653,
            latitudeDelta: 0.03222,
            longitudeDelta: 0.03221,
            }}
          />
        </View>
    );
  }
}
export default class App extends Component<{}> {
    
    render() {
      const menu = <SideBar navigator={navigator}/>;
      return (
        <SideMenu menu={menu}>
          <ContentView/>
        </SideMenu>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map : {
    height: 400,
    width: 400,
  }
});
