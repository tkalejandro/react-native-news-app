import React, {useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/components/Card';
import Header from './src/components/Header';
import { useFonts } from "expo-font";




export default function App() {
  const [loaded] = useFonts({
    'Ubuntu': require("./assets/fonts/Ubuntu-Regular.ttf"),
    'Ubuntu-Bold': require("./assets/fonts/Ubuntu-Bold.ttf")
  })

  if(!loaded) {
    return null
  }
  
  return (
    <View>
      <Header />
      <Card />
      <StatusBar style="auto" />
    </View>
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
