import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  RefreshControl
} from "react-native";

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
  //constructor
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      refreshing: false
    };
  }

  //this runs when page loads
  componentDidMount() {
    return fetch(
      "https://sheet.best/api/sheets/39a00c22-30f5-4ab3-b159-d402f40c4eeb"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  //refreshing
  handleRefresh() {
    this.componentDidMount();

    this.setState({
      refreshing: false
    });
  }

  //icon
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
    )
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator
            color="black"
            size="large"
            style={styles.loadingCircle}
          />
        </View>
      );
    } else {
      let data = this.state.dataSource.map((val, key) => {
        if (val.approve == "yes") {
          return (
            <View key={key} style={styles.item}>
              <Text style={styles.pickupText}>{val.text}</Text>
            </View>
          );
        }
      });
      return (
        //display pickup lines
        <ScrollView
          refreshControl={
            <RefreshControl
              onRefresh={() => this.handleRefresh()}
              refreshing={this.state.refreshing}
            />
          }
          style={styles.container}
        >
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
          {data}
        </ScrollView>
      );
    }
  }
}

export default homeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange"
  },
  header: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white"
  },
  item: {
    backgroundColor: "black",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  pickupText: {
    color: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  loadingCircle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    color: "red"
  }
});
