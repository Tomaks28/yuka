import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";

const ShadowScreen = () => {
  return (
    // <View opacity={0.8}>
    <View style={styles.scanZone}>
      <View style={styles.shadow}></View>
    </View>
  );
};

export default ShadowScreen;

const styles = StyleSheet.create({
  shadow: {
    // flex: 1,
    // height: Dimensions.get("window").height,
    // width: Dimensions.get("window").width,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  scanZone: {
    // flex: 1,
    position: "absolute",
    top: "40%",
    height: "30%",
    width: "80%",
    // borderColor: "white",
    // borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.5)"
  }
});
