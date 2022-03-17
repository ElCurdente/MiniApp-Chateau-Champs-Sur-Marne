import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Quizz from './Quizz';
import Localisation from './Localisation';
import About from './About'
import tw from 'tailwind-react-native-classnames';
import { NativeRouter, Route, Routes, Link } from "react-router-native";
import chateau from './img/chateau.jpg';

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default function App() {

  return (
      <NativeRouter>
        <View style={styles.container}>
          <View style={styles.nav}>
            <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text>Home</Text>
            </Link>
            <Link to="/quizz" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text>Quizz</Text>
            </Link>
            <Link to="/localisation" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text>Localisation</Text>
            </Link>
          </View>
          <Routes>
            <Route exact path="/" element={<About/>} />
            <Route path="/quizz" element={<Quizz/>} />
            <Route path="/localisation" element={<Localisation/>} />
          </Routes>
        </View>
      </NativeRouter>
  );
}

