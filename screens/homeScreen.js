import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import {
  Icon,
  Button,
  Container,
  Header,
  Content,
  Left,
  Right
} from "native-base";

class homeScreen extends Component {
  //icon
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
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
          <Icon
            name="menu"
            onPress={() => this.props.navigation.openDrawer()}
          />
        </Header>
        <Text
          style={{
            margin: 30,
            backgroundColor: "black",
            color: "white",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          Home
        </Text>
      </View>
    );
  }
}

export default homeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange"
  }
});
