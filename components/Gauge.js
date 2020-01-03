import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Gauge = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="md-arrow-dropdown"
        size={30}
        color="black"
        style={styles.cursor}
      />
      <View
        style={styles.colorBar}
        onLayout={event => {
          const { width } = event.nativeEvent.layout;
          console.log(width);
        }}
      >
        <View style={[styles.colorBox, { backgroundColor: "#228B22" }]}></View>
        <View style={[styles.colorBox, { backgroundColor: "#90EE90" }]}></View>
        <View style={[styles.colorBox, { backgroundColor: "orange" }]}></View>
        <View style={[styles.colorBox, { backgroundColor: "red" }]}></View>
      </View>
      <View style={styles.valueBar}>
        <Text style={{ flex: 1 }}>0</Text>
        <Text style={{ flex: 1 }}>9</Text>
        <Text style={{ flex: 1 }}>18</Text>
        <Text style={{ flex: 1 }}>31</Text>
        <Text>45+</Text>
      </View>
    </View>
  );
};

export default Gauge;

const generalPadding = 20;
const cursorPadding = 7;

const styles = StyleSheet.create({
  container: {
    padding: generalPadding,
    position: "relative"
  },
  colorBar: { flex: 1, flexDirection: "row" },
  // valueBar: { flex: 1, flexDirection: "row", justifyContent: "space-between" },
  valueBar: { flex: 1, flexDirection: "row" },
  colorBox: {
    flex: 1,
    height: 5,
    marginRight: 1
  },
  cursor: { position: "absolute", left: generalPadding - cursorPadding }
});
