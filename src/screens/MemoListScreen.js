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
    .get()
    .then((snapshot) => {
      const memoList = [];
      snapshot.forEach((doc) => {
        console.log(doc.data());
        memoList.push(doc.data());
      });
      this.setState({ memoList });
    })
    .catch((error) => {
      console.log(error);
    });
}

handlePress() {
  this.props.navigation.navigate('create');
  console.log('転送', this.props.route.params);
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
