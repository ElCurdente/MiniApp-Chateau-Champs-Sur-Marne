import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import benef from './img/logo_benef.svg';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>BENEF</Text>
      <img src={benef}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff5640',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
