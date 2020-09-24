import React from 'react';
import {
  StyleSheet, View, TextInput,
} from 'react-native';
import firebase from 'firebase';
import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  state = {
    body: '',
    key: '',
  }

  componentDidMount() {
    const { memo } = this.props.route.params;
    this.setState({ body: memo.body, key: memo.key });
  }

  handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    // 更新する箇所の設定
    db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key)
      .update({
        // 更新する内容の設定
        body: this.state.body,
      })
      .then(() => {
        console.log('成功');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
    // マルチラインで複数行のTextInputを可能にする
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body: text }); }}
        />
        <CircleButton
          name="check"
          onPress={this.handlePress.bind(this)}
        />
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
    textAlignVertical: 'top',
  },
});

export default MemoEditScreen;
