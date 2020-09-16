import React from 'react';
import { StyleSheet, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import Appbar from './src/components/Appbar';

import MemoEditScreen from './src/screens/MemoEditScreen';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Appbar />
      <MemoEditScreen />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexで画面自体を画面いっぱいに広げている
    flex: 1,
    backgroundColor: '#ebfeff',
    alignItems: 'center',
    justifyContent: 'center',
    // ヘッダーが見える様に、トップは常に画面から開けておいてあげる
    paddingTop: 60,
  },
});
