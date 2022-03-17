import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import Quizz from './Quizz';
import Localisation from './Localisation';
import About from './About'
import tw from 'tailwind-react-native-classnames';
import { NativeRouter, Route, Routes, Link } from "react-router-native";
import chateau from './img/chateau.jpg';
import Info from './img/icon/information.svg';

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    position: "fixed",
    zIndex: "50",
    width: "100vw",
    height: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: "0",
    left: "0",
    backgroundColor: "#000",
    color: "#fff"
  },
  nav: {
    position: "fixed",
    zIndex: "50",
    width: "100vw",
    height: "50px",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    bottom: "0",
    left: "0",
    backgroundColor: "#000",
    color: "#fff"
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
        <View style={tw.style('h-full w-full flex relative')}>
          <View style={styles.header}>
            <Text style={tw.style('text-white')}>Château de Champs-Sur-Marne</Text>
          </View>
          <View style={styles.nav}>
            <Link to="/" underlayColor="#f0f4f7" style={tw.style('')}>
              {/* <Text style={tw.style('text-white')}>Home</Text> */}
              <Image
              style={tw.style('w-10 h-10 z-50')}
                source={require('./img/icon/information.svg')}
              />
            </Link>
            <Link to="/quizz" underlayColor="#f0f4f7" style={tw.style('')}>
              <Text style={tw.style('text-white')}>Quizz</Text>
            </Link>
            <Link to="/localisation" underlayColor="#f0f4f7" style={tw.style('')}>
              <Text style={tw.style('text-white')}>Localisation</Text>
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

