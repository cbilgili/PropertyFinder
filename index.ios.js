'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
var SearchPage = require('./SearchPage');
var PropertyView = require('./PropertyView');
var InquiryPage = require('./InquiryPage');
var SearchResults = require('./SearchResults');

class HelloWorld extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

class PropertyFinder extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="searchPage" component={SearchPage} title="Property Finder" initial={true} />
          <Scene key="propertyView" component={PropertyView} title="Property Detail" />
          <Scene key="searchResults" component={SearchResults} title="Search Results" />
          <Scene key="inquiryPage" component={InquiryPage} title="Send Inquiry" />
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
