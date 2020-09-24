import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
state = {
  memoList: [],
}

async componentDidMount() {
  const { currentUser } = firebase.auth();
  const db = firebase.firestore();
  await db.collection(`users/${currentUser.uid}/memos`)
    .onSnapshot((snapshot) => {
      const memoList = [];
      // eslint-disable-next-line consistent-return
      snapshot.forEach((doc) => {
        if (snapshot == null) { return null; }
        // キーを渡さないと警告が出るので、memoのユニークidを渡してあげる（...で数が不明瞭のデータを表せる）
        memoList.push({ ...doc.data(), key: doc.id });
      });
      this.setState({ memoList });
    });
}

handlePress() {
  this.props.navigation.navigate('create');
}

render() {
  return (
    <View style={styles.container}>
      {/* ナビゲーションに登録してある画面でないとnavigationが使えないので、メモリスト用クラスに渡してあげる */}
      <MemoList memoList={this.state.memoList} navigation={this.props.navigation} />
      <CircleButton
        name="plus"
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
    backgroundColor: '#ebfeff',
  },
});

export default MemoListScreen;
