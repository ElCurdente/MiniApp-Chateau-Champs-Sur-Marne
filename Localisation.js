import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { NativeRouter, Route, Link } from "react-router-native";
import chateau from './img/chateau.jpg';
import MapView from 'react-native-maps';

export default function Localisation() {
    return (
        <View style={tw`flex-1 justify-center items-center`}>
            <Text>Localisation</Text>
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <StatusBar style="auto" />
        </View>
    );
}