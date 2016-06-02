'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import t from 'tcomb-form-native';
var Form = t.form.Form;

var Inquiry = t.struct({
  name: t.String,              // a required string
  surname: t.maybe(t.String),  // an optional string
  email: t.String,               // a required string
  age: t.Number,               // a required number
  rememberMe: t.Boolean        // a boolean
});

var options = {}; // optional rendering options (see documentation)

class InquiryPage extends Component {

  onPress() {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
    }
  }

  render() {
    var property = this.props.property;

    return (
      <View style={styles.container}>
        <Text>{property.title}</Text>
        <Form
          ref="form"
          type={Inquiry}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

module.exports = InquiryPage;
