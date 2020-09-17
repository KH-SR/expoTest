import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* ナビゲーションに登録してある画面でないとnavigationが使えないので、メモリスト用クラスに渡してあげる */}
        <MemoList navigation={this.props.navigation} />
        <CircleButton
          name="plus"
          onPress={() => { this.props.navigation.navigate('edit'); }}
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
