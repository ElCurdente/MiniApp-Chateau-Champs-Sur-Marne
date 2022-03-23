import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import tw from 'twrnc';
import { NativeRouter, Route, Link } from "react-router-native";
import chateau from './img/chateau.jpg';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';

export default function Localisation() {

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

    const [status, requestPermission] = Location.useBackgroundPermissions();

    const TASK_FETCH_LOCATION = 'TASK_FETCH_LOCATION';

    // 1 define the task passing its name and a callback that will be called whenever the location changes
    TaskManager.defineTask(TASK_FETCH_LOCATION, async ({ data: { locations }, error }) => {
        if (error) {
            console.error(error);
            return;
        }
    });

    Location.startLocationUpdatesAsync(TASK_FETCH_LOCATION, {
        accuracy: Location.Accuracy.Highest,
        distanceInterval: 1, // minimum change (in meters) betweens updates
        deferredUpdatesInterval: 1000, // minimum interval (in milliseconds) between updates
        // foregroundService is how you get the task to be updated as often as would be if the app was open
        foregroundService: {
            notificationTitle: 'Using your location',
            notificationBody: 'To turn off, go back to the app and switch something off.',
        },
    });

    // 3 when you're done, stop it
    Location.hasStartedLocationUpdatesAsync(TASK_FETCH_LOCATION).then((value) => {
        if (value) {
            Location.stopLocationUpdatesAsync(TASK_FETCH_LOCATION);
        }
    });

    return (
        <View style={styles.container}>
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
                />
                <Marker
                    coordinate={{ latitude: 48.855588, longitude: 2.599672 }}
                    title="Jardin du château"
                />
                <Marker
                    coordinate={{ latitude: 48.856845, longitude: 2.620282 }}
                    title="Anciennes Écuries Menier"
                />
            </MapView>
        </View>
    );

}