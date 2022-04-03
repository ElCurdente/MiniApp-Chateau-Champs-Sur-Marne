import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Button } from 'react-native';
import tw from 'twrnc';
import { NativeRouter, Route, Link } from "react-router-native";
import chateau from './img/chateau.jpg';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import Geolocation from 'react-native-geolocation-service';
import { data } from 'autoprefixer';


export default function Localisation() {

    const LOCATION_TASK_NAME = 'background-location-task';

    const [status, setStatus] = useState();

    TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
        if (error) {
            // Une erreur s'est produite - il faut vérifier `error.message` pour plus de détails.
            return;
        }
        if (data) {
            const { locations } = data;
            // faire quelque chose avec les lieux capturés en arrière-plan
            console.log(locations);
        }
    });

    const requestPermissions = async () => {
        const { status } = await Location.requestBackgroundPermissionsAsync();
        if (status === 'granted') {
            await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
                accuracy: Location.Accuracy.High,
                timeInterval: 10000,
                distanceInterval: 80,
            });
        }
    };

    const PermissionsButton = () => (
        <TouchableOpacity onPress={requestPermissions}>
            <Text>Enable background location</Text>
        </TouchableOpacity>
    );

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setStatus("L'autorisation d'accéder à l'emplacement a été refusée");
                return;
            } else {
                console.log('Accès accordé !')
                setStatus(status)
            }

        })();
    }, []);

    const watch_location = async () => {
        if (status === 'granted') {
            let location = await Location.watchPositionAsync({
                accuracy: Location.Accuracy.High,
                timeInterval: 10000,
                distanceInterval: 80,
            },
                false
                , (location_update) => {
                    console.log('localisation actualisée!', location_update.coords)
                }
            )
        }
    };

    




    //      const [location, setLocation] = useState({});
    //      const mapRef = React.createRef();

    //      useEffect(() => {
    //         (async () => {
    //             let { status } = await Location.requestForegroundPermissionsAsync();
    //             if (status !== 'granted') {
    //                 return;
    //             }

    //             let location = await Location.getCurrentPositionAsync({
    //                 accuracy: Location.Accuracy.Balanced,
    //                 enableHighAccuracy: true,
    //                 timeInterval: 5
    //             });
    //             setLocation(location);
    //         })();
    //     }, []);

    //     const goToMyLocation = async () => {
    //         mapRef.current.animateCamera({center: {"latitude":location.coords.latitude, "longitude": location.coords.longitude}});
    // }

    // const [location, setLocation] = useState({
    //     latitude: 1,
    //     longitude: 1
    // });

    // useEffect(() => {
    //     Geolocation.getCurrentPosition(
    //         position => {
    //             const { latitude, longitude } = position.coords;
    //             setLocation({
    //                 latitude,
    //                 longitude,
    //             });
    //         },
    //         error => {
    //             console.log(error.code, error.message);
    //         },
    //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    //     );
    // }, []);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: -1,
            position: "relative"
        },
        map: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        },
    });

    // const [status, requestPermission] = Location.useBackgroundPermissions();

    // const TASK_FETCH_LOCATION = 'TASK_FETCH_LOCATION';

    // // 1 define the task passing its name and a callback that will be called whenever the location changes
    // TaskManager.defineTask(TASK_FETCH_LOCATION, async ({ data: { locations }, error }) => {
    //     if (error) {
    //         console.error(error);
    //         return;
    //     }
    // });

    // Location.startLocationUpdatesAsync(TASK_FETCH_LOCATION, {
    //     accuracy: Location.Accuracy.Highest,
    //     distanceInterval: 1, // minimum change (in meters) betweens updates
    //     deferredUpdatesInterval: 1000, // minimum interval (in milliseconds) between updates
    //     // foregroundService is how you get the task to be updated as often as would be if the app was open
    //     foregroundService: {
    //         notificationTitle: 'Using your location',
    //         notificationBody: 'To turn off, go back to the app and switch something off.',
    //     },
    // });

    // // 3 when you're done, stop it
    // Location.hasStartedLocationUpdatesAsync(TASK_FETCH_LOCATION).then((value) => {
    //     if (value) {
    //         Location.stopLocationUpdatesAsync(TASK_FETCH_LOCATION);
    //     }
    // });

    return (
        <View style={styles.container}>
            <Button onPress={requestPermissions} style={tw.style('h-20 w-60 flex relative bg-white px-5 py-5 rounded-lg top-40 z-50')} title='Autoriser la géolocalisation de votre appareil'/>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 48.8536,
                    longitude: 2.604,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >

                <Marker
                    coordinate={{ latitude: 48.8536, longitude: 2.604 }}
                    title="Château"
                    description='31 Rue de Paris, 77420 Champs-sur-Marne'
                />
                <Marker
                    coordinate={{ latitude: 48.855588, longitude: 2.599672 }}
                    title="Jardin du château"
                    description='10 Sente des Sables, 77420 Champs-sur-Marne'
                />
                <Marker
                    coordinate={{ latitude: 48.856845, longitude: 2.620282 }}
                    title="Anciennes Écuries Menier"
                    description='5 Bd Pierre Carle, 77186 Noisiel'
                />

            </MapView>
        </View>
    );

}