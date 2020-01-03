import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image
} from "react-native";
import Gauge from "../components/Gauge";

const height = Dimensions.get("window").height;

const ProductScreen = props => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://static.openfoodfacts.org/images/products/541/004/137/6609/front_fr.36.400.jpg"
            }}
          />
          <View>
            <Text style={styles.title}>Pim's l'original Fraise</Text>
            <Text style={styles.brand}>Lu</Text>
          </View>
        </View>
        <Gauge />
      </ScrollView>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(243,243,243)"
  },
  header: {
    width: Dimensions.get("window").width,
    // height: 200,
    borderTopWidth: 3,
    borderTopColor: "rgba(169,169,169,0.5)",
    borderBottomWidth: 7,
    borderBottomColor: "rgba(169,169,169,0.5)",
    // alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20
  },
  image: {
    width: Dimensions.get("window").width * 0.4,
    height: 50,
    resizeMode: "contain"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  brand: {
    color: "grey"
  }
});
