import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const logoSize = 30;

const NavBar = props => {
  return props.screen === "Camera" ? null : (
    <View style={styles.header}>
      <TouchableOpacity
        style={
          props.screen === "Products" ? styles.selected : styles.unSelected
        }
        onPress={() => {
          props.handleChangeScreen("Products");
        }}
      >
        <Image
          style={{ width: logoSize, height: logoSize }}
          source={require("../assets/logo-carotte.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={props.screen === "Product" ? styles.selected : styles.unSelected}
        onPress={() => {
          props.handleChangeScreen("Product");
        }}
      >
        <FontAwesome name="exchange" size={logoSize} color="green" />
      </TouchableOpacity>
      <TouchableOpacity
        style={
          props.screen === "Favorites" ? styles.selected : styles.unSelected
        }
        onPress={() => {
          props.handleChangeScreen("Favorites");
        }}
      >
        <Foundation name="graph-pie" size={logoSize} color="green" />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#5DCC71"
  },
  selected: {
    borderBottomColor: "white",
    borderBottomWidth: 3,
    paddingBottom: 10
  },
  unSelected: {}
});
