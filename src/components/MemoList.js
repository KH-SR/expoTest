import React from 'react';
import {
  StyleSheet, View, Text, TouchableHighlight, FlatList,
} from 'react-native';

class MemoList extends React.Component {
  // {item}と直接引数に入れると、const {item} = data；として引数から必要なデータを取得する記載を省略出来る
  renderMemo({ item }) {
    console.log('データ', item);
    return (
      <TouchableHighlight onPress={() => this.props.navigation.navigate('detail')}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>{item.body}</Text>
          <Text style={styles.memoDate}>2020/10/4</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.memoList}>
        <FlatList data={this.props.memoList} renderItem={this.renderMemo.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});

export default MemoList;
