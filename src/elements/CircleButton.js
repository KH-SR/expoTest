import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
  render() {
    // 引数として渡ってきたpropsからstyleだけ抜き出すという意味
    const { style, color } = this.props;

    let bgColor = '#005bff';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#005bff';
    }

    return (
    // 配列で渡すと、最初にこのclassで定義したものが反映された後に、渡ってきたものが反映される
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        <Text style={[styles.circleBtnTitle, { color: textColor }]}>
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
  },
});

export default CircleButton;
