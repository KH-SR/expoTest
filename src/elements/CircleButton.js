import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

// 使用するアイコンの名前とアイコンのidをセットで格納する
const glyphMap = { pencil: '\uf303', plus: '\uf067', check: '\uf00c' };
const CustomIcon = createIconSet(glyphMap, 'FontAwsome', 'custom-icon-font.ttf');

class CircleButton extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    fontLoaded: false,
  }

  // asyncを設定しておくと、awaitの処理が終わるまで次の処理には行かない
  async componentDidMount() {
    await Font.loadAsync({
      FontAwsome: fontAwsome,
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    // 引数として渡ってきたpropsからstyleだけ抜き出すという意味（欲しいものは,でつなげられる）
    const { name, style, color } = this.props;

    let bgColor = '#005bff';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#005bff';
    }

    return (
    // 配列で渡すと、最初にこのclassで定義したものが反映された後に、渡ってきたものが反映される
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        {
          // fontのロードが終わっていたら（true）だったらレンダリング、されてなかったらnullの三項演算子
  this.state.fontLoaded ? (
    <CustomIcon name={name} style={[styles.circleBtnTitle, { color: textColor }]} />
  ) : null
}
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
    fontFamily: 'FontAwsome',
    // fontsizeとlineHeight(行の高さ)を一緒にしてあげないと位置が中央にならない
    fontSize: 25,
    lineHeight: 30,
  },
});

export default CircleButton;
