import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import * as Font from "expo-font";
import Home from "./screens/Home";
import { AppLoading } from "expo";
import Navigator from "./routes/drawer";

const getFonts = () => {
  return Font.loadAsync({
    "dancing-regular": require("./assets/fonts/dancing.ttf"),
    "dancing-bold": require("./assets/fonts/dancingBold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (fontLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontLoaded(true)} />
    );
  }
}
