import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

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
  //constructor
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      oneMore: "nema Nista ođe"
    };
  }

  //icon
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="mail" style={{ fontSize: 24, color: tintColor }} />
    )
  };

  //send Email
  sendFunction = () => {
    console.warn(this.state.mail);
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "white"
          }}
        >
          <Left>
            <Icon
              name="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
        </Header>

        <View style={styles.sendBoxContainer}>
          <TextInput
            style={styles.sendBox}
            placeholder="Send us Pickup Line"
            onChangeText={mail => this.setState({ mail })}
            value={this.state.mail}
          />

          <Button onPress={() => this.sendFunction()} style={styles.sendButton}>
            <Text style={styles.buttonText}> Send</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default sendScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange"
  },
  sendBox: {
    backgroundColor: "black",
    color: "white",
    height: 50,
    width: "70%",
    marginRight: "15%",
    marginLeft: "15%",
    borderRadius: 60,
    padding: 10
  },
  sendBoxContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignContent: "center",
    marginTop: "40%"
  },
  sendButton: {
    backgroundColor: "white",
    borderRadius: 60,
    width: "40%",
    justifyContent: "center",
    alignContent: "center",
    marginRight: "30%",
    marginLeft: "30%",
    marginTop: 10,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderColor: "black"
  },
  buttonText: {
    color: "black"
  }
});
