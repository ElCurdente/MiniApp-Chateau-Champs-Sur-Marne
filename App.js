import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import Quizz from './Quizz';
import Localisation from './Localisation';
import About from './About'
import tw from 'twrnc';
import { NativeRouter, Route, Routes, Link } from "react-router-native";
import chateau from './img/chateau.jpg';
import Info from './img/icon/information.svg';
import { useTailwind } from 'tailwind-rn';

export default function App() {

  const tailwind = useTailwind();

  return (
    // Navigation
    <NativeRouter>
      <View style={tw.style('h-full w-full flex relative z-50')}>
        // Header
        <View style={tw.style('bg-black relative top-0 left-0 h-20 w-full items-center justify-center ')}>
          <Text style={tw.style('text-white text-lg font-bold')}>Château de Champs-Sur-Marne</Text>
        </View>

        //Bottom Nav bar
        <View style={tw.style('absolute bottom-0 left-0 flex flex-row justify-evenly items-center w-full h-20 bg-black')}>
          <View style={tw.style('flex-row justify-evenly w-full h-full items-center relative z-50')}>
            <Link to="/" underlayColor="#f0f4f7" style={tailwind('')}>
              <Text style={tw.style('text-white font-bold')}>Home</Text>
            </Link>
            <Link to="/quizz" underlayColor="#f0f4f7" style={tailwind('')}>
              <Text style={tw.style('text-white font-bold')}>Quizz</Text>
            </Link>
            <Link to="/localisation" underlayColor="#f0f4f7" style={tailwind('')}>
              <Text style={tw.style('text-white font-bold')}>Localisation</Text>
            </Link>
          </View>
        </View>

        // Route vers les différents composants
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/quizz" element={<Quizz />} />
          <Route path="/localisation" element={<Localisation />} />
        </Routes>
      </View>
    </NativeRouter>
  );
}

