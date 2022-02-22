import React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import AppNavigator from "./src/navigation/AppNavigator";



export default function App() {
  const [loaded] = useFonts({
    'Ubuntu': require("./assets/fonts/Ubuntu-Regular.ttf"),
    'Ubuntu-Bold': require("./assets/fonts/Ubuntu-Bold.ttf")
  })

  if(!loaded) {
    return null
  }
  
  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
