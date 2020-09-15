import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>MEMOT</Text>
        </View>
      </View>

      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>跡部様</Text>
          <Text style={styles.memoDate}>2020/10/4</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>跡部様</Text>
          <Text style={styles.memoDate}>2020/10/4</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>跡部様</Text>
          <Text style={styles.memoDate}>2020/10/4</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>跡部様</Text>
          <Text style={styles.memoDate}>2020/10/4</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>跡部様</Text>
          <Text style={styles.memoDate}>2020/10/4</Text>
        </View>
      </View>

      <View style={styles.memoAddButton}>
        <Text style={styles.memoAddBtnTitle}>+</Text>
      </View>

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
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 30,
    height: 60,
    backgroundColor: '#00adff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 10,
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  memoList: {
    width: '100%',
    // メモがflexとして指定してるコンテナサイズいっぱいになる様にする
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#ababab',
  },
  memoAddButton: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    width: 50,
    height: 50,
    backgroundColor: '#005bff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  memoAddBtnTitle: {
    // fontsizeとlineHeight(行の高さ)を一緒にしてあげないと位置が中央にならない
    fontSize: 30,
    lineHeight: 30,
    color: '#fff',
  },
});
