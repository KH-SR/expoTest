import React from 'react';
import {
  StyleSheet, View, Text, TextInput, TouchableHighlight,
} from 'react-native';
import firebase from 'firebase';

class SignupScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((result) => {
        this.props.navigation.navigate('list');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>メンバー登録</Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Address"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
        />
        {/* Buttonメソッドは設定をいじれないので、これでボタンを作る */}
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} underlayColor="#139BFF">
          <Text style={styles.buttonTitle}>送信する</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 25,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    alignSelf: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#eee',
    height: 40,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  button: {
    backgroundColor: '#005bff',
    height: 40,
    width: '70%',
    borderRadius: 4,
    justifyContent: 'center',
    // こっちはbuttonの中のアイテム（文字など）を中央に揃える
    alignItems: 'center',
    // こっちはbutton自体の画面での位置を中央にする
    alignSelf: 'center',
  },
  buttonTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SignupScreen;
