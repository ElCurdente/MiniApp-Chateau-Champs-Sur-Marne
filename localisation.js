import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { NativeRouter, Route, Link } from "react-router-native";
import chateau from './img/chateau.jpg';

export default function Localisation() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>Localisation</Text>
      <StatusBar style="auto" />
    </View>
  );
}