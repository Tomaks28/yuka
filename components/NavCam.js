import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NavBar = props => {
  return (
    <View style={styles.position}>
      <MaterialCommunityIcons
        name="barcode-scan"
        size={20}
        color="green"
        onPress={() => {
          props.handleChangeScreen("Camera");
        }}
      />
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  position: {
    right: 30,
    bottom: 30,
    position: "absolute",
    backgroundColor: "#5DCC71",
    borderRadius: 30,
    padding: 10
  }
});
