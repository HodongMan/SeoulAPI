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
  View,
  Alert
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

  constructor(props){
    super(props);

    this.state = {
      courseData : [],
      courseName : ""
    }
  }

  componentDidMount(){

    fetch("https://mplatform.seoul.go.kr/api/dule/courseInfo.do?course=3")
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({
            courseData : responseJson.body,
            coruseName : responseJson.body[0].THM_THEME_NAME
        });
        Alert.alert(this.state.courseData[0].COT_MBR_MAX_Y);

    })
    .catch(error => console.log(error));
  }

  render() {
    if (this.state.courseData.length == 0) {
      return (
        <View><Text>Loading...</Text></View>
      );
    }
    
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
              latitude: parseFloat(this.state.courseData[0].COT_MBR_MAX_Y),
              longitude: parseFloat(this.state.courseData[0].COT_MBR_MAX_X),
              latitudeDelta: 0.51222,
              longitudeDelta: 0.51221,
            }}
            
          >
            {this.state.courseData.map((marker, index) => (
              <MapView.Marker
                coordinate={
                  {
                   latitude: parseFloat(marker.COT_MBR_MAX_Y),
                   longitude: parseFloat(marker.COT_MBR_MAX_X),
                 }
                 
                }
                key={index}
              />
            ))}
          </MapView>
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
