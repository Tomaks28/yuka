import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Permissions from "expo-permissions";

const SplashScreen = props => {
  useEffect(() => {
    const getPermissionsAsync = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      props.handlePermissions(status === "granted");
    };
    getPermissionsAsync();
  }, []);

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    ></View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
