/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable
} from 'react-native';
import List from './components/List.component';
import AddModal from './components/AddModal.component'


const App = () => {
 
  return (
    <View>
      <List></List>
      <AddModal></AddModal>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
