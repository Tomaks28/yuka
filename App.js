import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import SplashScreen from "./containers/SplashScreen";
import ProductsScreen from "./containers/ProductsScreen";
import CameraScreen from "./containers/CameraScreen";
import NavHeader from "./components/NavHeader";

export default function App() {
  const [screen, setScreen] = useState("Splash");

  const handleChangeScreen = screen => {
    setScreen(screen);
  };

  return (
    <View style={{ flex: 1 }}>
      <NavHeader handleChangeScreen={handleChangeScreen} />
      {screen === "Splash" && <SplashScreen />}
      {screen === "Products" && <ProductsScreen />}
      {screen === "Camera" && <CameraScreen />}
    </View>
  );
}
