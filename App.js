import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { NativeRouter, Route, Link } from "react-router-native";
import chateau from './img/chateau.jpg';

export default function App() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>Château de Champs-Sur-Marne</Text>
      {/* <img src={chateau} style={tw`rounded-xl`} /> */}
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
