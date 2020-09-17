import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <Text style={styles.memoHeaderTitle}>跡部様</Text>
          <Text style={styles.memoHeaderDate}>2020/10/4</Text>
        </View>

        <View style={styles.memoContent}>
          <Text>跡部様の誕生日です。</Text>
        </View>
        <CircleButton
          name="pencil"
          color="white"
          style={styles.editButton}
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
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#aac3f1',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
    backgroundColor: '#fff',
    flex: 1,
  },
  editButton: {
    top: 75,
  },
});

export default MemoDetailScreen;
