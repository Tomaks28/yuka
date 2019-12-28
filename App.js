import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import SplashScreen from "./containers/SplashScreen";
import ProductsScreen from "./containers/ProductsScreen";
import ProductScreen from "./containers/ProductScreen";
import FavoritesScreen from "./containers/FavoritesScreen";
import CameraScreen from "./containers/CameraScreen";
import NavBar from "./components/NavBar";
import NavCam from "./components/NavCam";

const apiUrl = "https://world.openfoodfacts.org/api/v0/product/";

export default function App() {
  const [screen, setScreen] = useState("Splash");
  const [hasPermissions, setHasPermissions] = useState(false);

  const handleChangeScreen = screen => {
    setScreen(screen);
  };

  const handlePermissions = permissions => {
    setHasPermissions(permissions);
    if (permissions) {
      setScreen("Products");
    }
  };

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <NavBar handleChangeScreen={handleChangeScreen} screen={screen} />
      {screen === "Splash" && (
        <SplashScreen handlePermissions={handlePermissions} />
      )}
      {screen === "Products" && <ProductsScreen />}
      {screen === "Product" && <ProductScreen />}
      {screen === "Favorites" && <FavoritesScreen />}
      {screen === "Camera" && <CameraScreen apiUrl={apiUrl} />}
      <NavCam handleChangeScreen={handleChangeScreen} />
    </View>
  );
}
