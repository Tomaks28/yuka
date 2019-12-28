import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const NavHeader = props => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          props.handleChangeScreen("Splash");
        }}
      >
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../assets/logo-carotte.png")}
        />
      </TouchableOpacity>
      <FontAwesome
        name="exchange"
        size={30}
        color="green"
        onPress={() => {
          props.handleChangeScreen("Products");
        }}
      />
      <Foundation
        name="graph-pie"
        size={30}
        color="green"
        onPress={() => {
          props.handleChangeScreen("Camera");
        }}
      />
    </View>
  );
};

export default NavHeader;

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#5DCC71"
  }
});
