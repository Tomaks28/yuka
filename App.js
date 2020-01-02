import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";

import SplashScreen from "./containers/SplashScreen";
import ProductsScreen from "./containers/ProductsScreen";
import ProductScreen from "./containers/ProductScreen";
import FavoritesScreen from "./containers/FavoritesScreen";
import CameraScreen from "./containers/CameraScreen";
import NavBar from "./components/NavBar";
import NavCam from "./components/NavCam";

const apiUrl = "https://world.openfoodfacts.org/api/v0/product/";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function App() {
  const [screen, setScreen] = useState("Splash");
  const [hasPermissions, setHasPermissions] = useState(false);

  const handleChangeScreen = screen => {
    switch (screen) {
      case "Products":
        scrollToItem(0);
        break;
      case "Product":
        scrollToItem(1);
        break;
      case "Favorites":
        scrollToItem(2);
        break;
      case "Camera":
        break;
      default:
        break;
    }
  };

  const handlePermissions = permissions => {
    setHasPermissions(permissions);
    if (permissions) {
      setScreen("Products");
    }
  };

  const scrollToItem = randomIndex => {
    flatListRef.scrollToIndex({ animated: true, index: "" + randomIndex });
  };

  return (
    <View style={{ flex: 1, position: "relative" }}>
      {screen === "Camera" ? (
        <CameraScreen apiUrl={apiUrl} />
      ) : (
        <>
          <NavBar handleChangeScreen={handleChangeScreen} screen={screen} />
          {screen === "Splash" && (
            <SplashScreen handlePermissions={handlePermissions} />
          )}
          <FlatList
            keyExtractor={item => String(item.id)}
            ref={ref => {
              flatListRef = ref;
            }}
            data={[
              { id: 1, screen: <ProductsScreen /> },
              { id: 2, screen: <ProductScreen /> },
              { id: 3, screen: <FavoritesScreen /> }
            ]}
            horizontal={true}
            pagingEnabled={true}
            onMomentumScrollEnd={event => {
              const itemWidth = event.nativeEvent.layoutMeasurement.width;
              const itemPosition =
                event.nativeEvent.contentOffset.x / itemWidth;
              switch (itemPosition) {
                case 0:
                  setScreen("Products");
                  break;
                case 1:
                  setScreen("Product");
                  break;
                case 2:
                  setScreen("Favorites");
                  break;
                case "Camera":
                  break;
                default:
                  break;
              }
            }}
            renderItem={({ item }) => (
              <View
                style={{
                  flex: 1,
                  width: width
                }}
              >
                {item.screen}
              </View>
            )}
          />
        </>
      )}
      <NavCam handleChangeScreen={handleChangeScreen} />
    </View>
  );
}
