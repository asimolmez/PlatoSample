/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Row, Col} from "./src/components";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Row size={12}>
        <Col size={4}>
          <Col size={12}>
            <Row size={4}></Row>
            <Row size={4}></Row>
            <Row size={4}></Row>
          </Col>
        </Col>
        <Col size={4}>
        <Col size={12}>
            <Row size={4}></Row>
            <Row size={4}></Row>
            <Row size={4}></Row>
          </Col>
        </Col>
        <Col size={4}>
        <Col size={12}>
            <Row size={4}></Row>
            <Row size={4}></Row>
            <Row size={4}></Row>
          </Col>
        </Col>
      </Row>

    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 12,
    backgroundColor: '#F5FCFF',
    flexDirection: 'row'
  },
  col4: {
    flex: 4,
    backgroundColor: '#FF0000',
    borderWidth: 1,
    borderColor: '#000000'
  },
  col: {
    flex: 12,
    backgroundColor: '#F5FCFF',
  },
  row4: {
    flex: 4,
    backgroundColor: '#FF0000',
    borderWidth: 1,
    borderColor: '#000000'
  }
});
