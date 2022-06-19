import React, { Component, useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import Home from "../Home";

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
  }, [isLoading]);

  return (
    <View style={styles.SplashScreen_RootView}>
      {isLoading ? (
        <>
          <View style={styles.SplashScreen_ChildView}>
            <Image
              source={require("../../../assets/splash-basket-ball.gif")}
              style={{ width: "70%", height: "70%", resizeMode: "contain" }}
            />
          </View>
        </>
      ) : (
        <Home />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: Platform.OS === 'ios' ? 20 : 0
  },

  SplashScreen_RootView: {
    justifyContent: "center",
    flex: 1,
    margin: 10,
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  SplashScreen_ChildView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    flex: 1,
  },
});
