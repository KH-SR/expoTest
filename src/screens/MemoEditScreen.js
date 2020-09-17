import React from 'react';
import {
  StyleSheet, View, TextInput,
} from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  render() {
    return (
    // マルチラインで複数行のTextInputを可能にする
      <View style={styles.container}>
        <TextInput style={styles.memoEditInput} multiline value="HYOTEI" />
        <CircleButton name="check" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  memoEditInput: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 36,
    fontSize: 16,
  },
});

export default MemoEditScreen;
