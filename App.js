import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image
} from "react-native";

//navigator
import { createDrawerNavigator, DrawerItems } from "react-navigation";

//screens
import homeScreen from "./screens/homeScreen";
import sendScreen from "./screens/sendScreen";

export default function App() {
  return <AppDrawerNavigator />;
}

//something for picture
const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
    <View
      style={{
        height: 70,
        backgroundColor: "000000",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image
        source={require("./assets/logo.png")}
        style={{ height: 70, width: 70, borderRadius: 60 }}
      />
    </View>

    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: homeScreen,
    Send: sendScreen
  },
  {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: "orange",
      inactiveTintColor: "white",
      labelStyle: {
        color: "white"
      }
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
