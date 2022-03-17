import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Quizz from './Quizz';
import Localisation from './Localisation';
import tw from 'tailwind-react-native-classnames';
import { NativeRouter, Route, Routes, Link } from "react-router-native";
import chateau from './img/chateau.jpg';


export default function About() {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <Text>About</Text>
        <StatusBar style="auto" />
      </View>
    );
  }