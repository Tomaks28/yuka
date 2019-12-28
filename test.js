import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { AsyncStorage } from "react-native";
import { NavigationNativeContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/* Import of all containers - Screens */
import SplashScreen from "./containers/SplashScreen";
import ProductsScreen from "./containers/ProductsScreen";
import ProductScreen from "./containers/ProductScreen";
import CameraScreen from "./containers/CameraScreen";
import FavoritesScreen from "./containers/FavoritesScreen";

/* Api URL to get all product infos */
const apiUrl =
  "https://world.openfoodfacts.org/api/v0/product/737628064502.json";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const setToken = async token => {
    if (token) {
      AsyncStorage.setItem("userToken", token);
    } else {
      AsyncStorage.removeItem("userToken");
    }

    setUserToken(token);
  };

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      // We should also handle error for production apps
      const userToken = await AsyncStorage.getItem("userToken");

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      setIsLoading(false);
      setUserToken(userToken);
    };

    bootstrapAsync();
  }, []);

  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        {isLoading ? (
          // We haven't finished checking for the token yet
          <Stack.Screen name="Splash" component={() => null} />
        ) : (
          // User is signed in
          <Stack.Screen name="Tab" options={{ header: () => null }}>
            {() => (
              <Tab.Navigator
                screenOptions={({ route }) => {
                  return {
                    tabBarIcon: ({ focused, color, size }) => {
                      if (route.name === "Products") {
                        return (
                          <AntDesign name="isv" size={size} color={color} />
                        );
                      } else if (route.name === "Scan") {
                        return (
                          <AntDesign name="scan1" size={size} color={color} />
                        );
                      } else {
                        return;
                      }
                    },
                    title: route.name === "undefined" ? "Products" : route.name // known issue : route.name shouldn't be undefined
                  };
                }}
                tabBarOptions={{
                  activeTintColor: "tomato",
                  inactiveTintColor: "gray"
                }}
              >
                <Tab.Screen>
                  {() => (
                    <Stack.Navigator>
                      {/* Products Screen */}
                      <Stack.Screen
                        name="Products"
                        options={{
                          title: "Products",
                          headerStyle: { backgroundColor: "#5DCC71" },
                          headerTitleStyle: { color: "white" }
                        }}
                      >
                        {() => <ProductsScreen />}
                      </Stack.Screen>
                      {/* Camera Screen */}
                      <Stack.Screen
                        name="Scan"
                        options={{
                          title: "Scan",
                          headerStyle: { backgroundColor: "#5DCC71" },
                          headerTitleStyle: { color: "white" }
                        }}
                      >
                        {() => <CameraScreen />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
