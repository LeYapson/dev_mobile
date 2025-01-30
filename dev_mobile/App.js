import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native';
import Hello from './components/Exo1/Hello';
import HelloChildren from './components/Exo2/HelloChildren';
import HelloComplet from './components/Exo3/HelloComplet';
import MyButton from './components/Exo4/MyButton';
import HelloStyle from './components/Exo5/HelloStyle';
import ExternalStyle from './components/Exo6/ExternalStyle';
import FlexBox from './components/Exo7/FlexBox';
import CheckBoxList from './components/Exo8/CheckBoxList';
import BorderGrow from './components/Exo9/BorderGrow';
import TicTacToe from './components/Bonus/TicTacToe';

const App = () => {
  return (
      <SafeAreaView style={{ flex: 1 }}>
          <TicTacToe />
      </SafeAreaView>
  );
};

export default App;