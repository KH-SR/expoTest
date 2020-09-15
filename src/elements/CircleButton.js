import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
  render() {
    return (
      <View style={styles.circleButton}>
        <Text style={styles.circleBtnTitle}>
          {this.props.children}
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
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
  circleBtnTitle: {
    // fontsizeとlineHeight(行の高さ)を一緒にしてあげないと位置が中央にならない
    fontSize: 30,
    lineHeight: 30,
    color: '#fff',
  },
});

export default CircleButton;
