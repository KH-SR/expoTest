import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  handlePress() {
    this.props.navigation.navigate('create', { uid: this.props.route.params });
    console.log('転送', this.props.route.params);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* ナビゲーションに登録してある画面でないとnavigationが使えないので、メモリスト用クラスに渡してあげる */}
        <MemoList navigation={this.props.navigation} />
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
