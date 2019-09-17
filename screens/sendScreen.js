import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import {
  Icon,
  Button,
  Container,
  Header,
  Content,
  Left,
  ScrollView
} from "native-base";

class sendScreen extends Component {
  //icon
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="mail" style={{ fontSize: 24, color: tintColor }} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "orange"
          }}
        >
          <Left>
            <Icon
              name="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
        </Header>
        <Text> Send Screen Samirami </Text>
      </View>
    );
  }
}

export default sendScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange"
  }
});
