import React from 'react';
import {
  StyleSheet, KeyboardAvoidingView, TextInput,
} from 'react-native';
import firebase from 'firebase';
import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  state = {
    body: '',
    key: '',
  }

  componentDidMount() {
    // ...memoを使用してmemoの中身を一つずつ取り出して渡ってきたからこの記載になる
    const { body, key } = this.props.route.params;
    this.setState({ body, key });
  }

  handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const newDate = firebase.firestore.Timestamp.now();
    // 更新する箇所の設定
    db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key)
      .update({
        // 更新する内容の設定
        body: this.state.body,
        createdOn: newDate,
      })
      .then(() => {
        // 前の画面に値を反映させる
        this.props.route.params.returnMemo({
          body: this.state.body,
          key: this.state.key,
          createdOn: newDate,
        });
        this.props.navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
    // マルチラインで複数行のTextInputを可能にする
      <KeyboardAvoidingView style={styles.container} behavior="height" keyboardVerticalOffset={80}>
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
      </KeyboardAvoidingView>
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
