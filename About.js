import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Button, Share, Image } from 'react-native';
import Quizz from './Quizz';
import Localisation from './Localisation';
import tw from 'tailwind-react-native-classnames';
import { NativeRouter, Route, Routes, Link } from "react-router-native";
import chateau from './img/chateau.jpg';


export default function About() {

  const styles = StyleSheet.create({
    container: {
      zIndex: -1,
      position: "relative",
      display: "flex",
      paddingBottom: 24
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
      marginBottom: 10
    },
    disabled: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: "#F1F1F1",
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={tw.style('w-full flex items-center')}>
        <View style={tw.style('absolute bg-white w-60 rounded-lg z-20')}>
          <Text style={tw.style('text-lg mx-auto mb-5 mt-3 font-bold')}>Infos pratiques</Text>
        </View>
      </View>
      <View style={tw.style('h-60 mx-4 mt-7')}>
        <Image source={require('./img/chateau.jpg')} style={{
          resizeMode: 'cover',
          width: '100%',
          height: '100%',
          borderRadius: 10
        }} />
      </View>
      <View>
        <Text style={tw.style('mx-4 mt-5 font-bold text-base')}>
          Le monument est ouvert et vous accueille en toute sécurité.
        </Text>
        <Text style={tw.style('mx-4 mt-5 text-base')}>
          Toutes nos équipes vous accueillent en toute sécurité, en suivant les nouvelles modalités de visite présentée sur cette page. A l’intérieur du château, le port du masque est fortement recommandé à partir de 6 ans. Du gel hydroalcoolique est à votre disposition à l’entrée du monument et à l’entrée de la boutique.
        </Text>
        <Text style={tw.style('mx-4 mt-5 font-bold text-base')}>
          Très bonne visite.
        </Text>
      </View>
      <View style={tw.style('pb-5')}>
      <View style={tw.style('w-full flex items-center z-20 mt-12')}>
        <View style={tw.style('absolute bg-white w-60 rounded-lg ')}>
          <Text style={tw.style('text-lg mx-auto mb-5 mt-3 font-bold')}>Tarifs</Text>
        </View>
      </View>
        <View style={tw.style('h-60 mx-4 mt-7')}>
        <Image source={require('./img/tarifs.jpg')} style={{
          resizeMode: 'cover',
          width: '100%',
          height: '100%',
          borderRadius: 10
        }} />
      </View>
        <Text style={tw.style('mx-4 mt-5 font-bold text-lg')}>
          Tarif individuel : 8€
        </Text>
        <Text style={tw.style('mx-4 mt-2 font-bold  text-base')}>
          Tarif réduit : 6,50€
        </Text>

        <Text style={tw.style('mx-4 mt-3 text-base')}>
          - Passe Navigo Culture : sous réserve de présenter un pass navigo en cours de validité
        </Text>
        <Text style={tw.style('mx-4 mt-3 text-base')}>
          - 18-25 ans non-ressortissants des pays de l'Union Européenne
        </Text>
        <Text style={tw.style('mx-4 mt-3 text-base')}>
          - Enseignants du supérieur non détenteurs du Pass éducation
        </Text>
        <Text style={tw.style('mx-4 mt-3 text-base')}>
          - Tarif de groupe hors scolaire de plus de 20 personne (sur réservation)
        </Text>
        <Text style={tw.style('mx-4 mt-3 text-base')}>
          - Carte Balad'pass77 (en cours de validité)
        </Text>

        <Text style={tw.style('mx-4 mt-8 font-bold  text-base')}>
          Gratuité :
        </Text>
        <Text style={tw.style('mx-4 mt-3 text-base')}>
          - Les premiers dimanches du mois
        </Text>
        <Text style={tw.style('mx-4 mt-3 text-base')}>
          - Moins de 18 ans (en famille et hors groupes scolaires)
        </Text>
        <Text style={tw.style('mx-4 mt-3 text-base')}>
          - 18-25 ans (ressortissants des pays de l’Union Européenne et résidents réguliers non-européens sur le territoire français)
        </Text>
        <Text style={tw.style('mx-4 mt-3 text-base')}>
          - Personne handicapée et son accompagnateur
        </Text>
        <Text style={tw.style('mx-4 mt-3 text-base')}>
          - Demandeur d’emploi (sur présentation d’une attestation de moins de 6 mois)
        </Text>
        <Text style={tw.style('mx-4 mt-3 text-base')}>
          - Passe éducation (en cours de validité)
        </Text>
      </View>

      <View style={tw.style('pb-5')}>
      <View style={tw.style('w-full flex items-center z-20 mt-12')}>
        <View style={tw.style('absolute bg-white w-60 rounded-lg ')}>
          <Text style={tw.style('text-lg mx-auto mb-5 mt-3 font-bold')}>Horaires</Text>
        </View>
      </View>
        <View style={tw.style('h-60 mx-4 mt-7')}>
        <Image source={require('./img/horaires.jpg')} style={{
          resizeMode: 'cover',
          width: '100%',
          height: '100%',
          borderRadius: 10
        }} />
      </View>
        <Text style={tw.style('mx-4 mt-5 font-bold text-base')}>
          De fin juin à septembre :
        </Text>
        <Text style={tw.style('mx-4 mt-5 text-base')}>
          10h - 12h15 /13h30 - 18h
        </Text>
        <Text style={tw.style('mx-4 italic')}>Fermé le mardi</Text>
        <Text style={tw.style('mx-4 mt-5 font-bold text-base')}>
          D'octobre à mai :
        </Text>
        <Text style={tw.style('mx-4 mt-5 text-base')}>
          10h - 12h15 / 13h30 - 17h
        </Text>
        <Text style={tw.style('mx-4 italic')}>Fermé le mardi</Text>

        <Text style={tw.style('mx-4 mt-5  text-base')}>
          La <Text style={tw.style('font-bold')}>dernière admission</Text> dans le château se fait 30 minutes avant la fermeture.
        </Text>
        <Text style={tw.style('mx-4 mt-5  text-base')}>
          Le parc <Text style={tw.style('font-bold')}>ferme</Text> 30 minutes après le château.
        </Text>
        <Text style={tw.style('mx-4 mt-5  text-base')}>
          <Text style={tw.style('font-bold')}>Fermeture</Text> les 1er janvier, 1er mai et 25 décembre.
        </Text>
      </View>

      <View style={tw.style('pb-5')}>
      <View style={tw.style('w-full flex items-center z-20 mt-12')}>
        <View style={tw.style('absolute bg-white w-60 rounded-lg ')}>
          <Text style={tw.style('text-lg mx-auto mb-5 mt-3 font-bold')}>Accès</Text>
        </View>
      </View>
        <View style={tw.style('h-60 mx-4 mt-7')}>
        <Image source={require('./img/accès.png')} style={{
          resizeMode: 'cover',
          width: '100%',
          height: '100%',
          borderRadius: 10
        }} />
      </View>
        <Text style={tw.style('mx-4 mt-5 font-bold text-lg')}>
          CHÂTEAU DE CHAMPS-SUR-MARNE
        </Text>

        <Text style={tw.style('mx-4 mt-2 text-base')}>
          31, rue de Paris
        </Text>
        <Text style={tw.style('mx-4 mt-2 text-base')}>
          77420 Champs-sur-Marne
        </Text>
        <Text style={tw.style('mx-4 mt-2 text-base')}>
          Tél. : 33 / (0)1 64 62 74 42
        </Text>

        <Text style={tw.style('mx-4 mt-5 font-bold text-lg')}>
          COORDONNEES GPS
        </Text>
        <Text style={tw.style('mx-4 mt-2 text-base')}>
          Latitude : 48.8524
        </Text>
        <Text style={tw.style('mx-4 mt-2 text-base')}>
          Longitude : 2.6049
        </Text>

        <Text style={tw.style('mx-4 mt-5 font-bold text-lg')}>
          EN TRANSPORT EN COMMUN
        </Text>
        <Text style={tw.style('mx-4 mt-2 text-base')}>
          De Paris : RER A, descendre à Noisiel le Luzard puis prendre le bus n°220 (8') ou bus n°100 direction Bry-sur-Marne, arrêt mairie de Champs ou 20' à pied de la gare.
        </Text>

        <Text style={tw.style('mx-4 mt-5 font-bold text-lg')}>
          EN VOITURE
        </Text>
        <Text style={tw.style('mx-4 mt-2 text-base')}>
        De Paris : A 4, sortie n°10 Champs, suivre le fléchage "château de Champs", 30 min de trajet. // De province : A4, sortie Noisiel suivre le fléchage
        </Text>
      </View>

      <View style={tw.style('pb-24')}>
      <View style={tw.style('w-full flex items-center z-20 mt-12')}>
        <View style={tw.style('absolute bg-white w-60 rounded-lg ')}>
          <Text style={tw.style('text-lg mx-auto mb-5 mt-3 font-bold')}>Contact</Text>
        </View>
      </View>
        <View style={tw.style('h-60 mx-4 mt-7')}>
        <Image source={require('./img/contact.jpg')} style={{
          resizeMode: 'cover',
          width: '100%',
          height: '100%',
          borderRadius: 10
        }} />
      </View>
        <Text style={tw.style('mx-4 mt-5  text-base')}>
        Pour toute demande de location de salle, de tournage, mariage ou shooting photo, écrivez à : <Text style={tw.style('font-bold')}>champs@monuments-nationaux.fr</Text>
        </Text>
        <Text style={tw.style('mx-4 mt-5  text-base')}>
        Pour toute demande de réservation de groupes et de scolaires, écrivez à : <Text style={tw.style('font-bold')}>reservations.champs@monuments-nationaux.fr</Text>
        </Text>
        <Text style={tw.style('mx-4 mt-5  text-base')}>
        Pour toute autre demande, contactez le standard du domaine, au 01.60.05.24.43, où vous serez redirigés vers nos services. 
        </Text>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}