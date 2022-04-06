import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Button} from 'react-native';
import tw from 'twrnc';
import { NativeRouter, Route, Link } from "react-router-native";
import chateau from './img/chateau.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
// import {Share} from 'react-native-share';

export default function Quizz() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [numberAnswer, setNumberAnswer] = useState(0)

// Fetch API questions
  useEffect(() => {
    fetch("https://api-miniapp.antoine-droyer.fr/api-questions.php")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setQuestions(result.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  // Fetch API réponses aux questions
  useEffect(() => {
    fetch("https://api-miniapp.antoine-droyer.fr/api-answers.php")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setAnswers(result.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  //Si l'utilisateur appuie sur la bonne réponse --> score + 1
  function onPressAnswer() {
    if (this.type == 1) {
      setScore(score + 1);
      console.log(this)
    }
    setAnswers(prevState => [...prevState, this.ext_id_question]);
    setNumberAnswer(numberAnswer + 1);
  }

  const styles = StyleSheet.create({
    container: {
      zIndex: -1,
      position: "relative",
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

  let answersTemp;

  const title = "Awesome Contents";
const message = "Please check this out.";

const options = {
  title,
  message,
};

  return (

    //Section Quiz
    <ScrollView style={styles.container}>
      <Text style={tw.style('text-xl mx-auto mb-5 mt-4 font-bold')}>Quiz</Text>
      <View style={tw.style('pb-24 mx-4')}>
        //Liste des différentes questions grâce à la méthode map() et au fetch vers l'API https://api-miniapp.antoine-droyer.fr/api-questions.php
        {questions.map(q => (
          answersTemp = answers.filter(x => x.ext_id_question == q.id_question),
          // Le key est représente l'identifiant unique d'un élément de la liste
          <View key={q.id_question} style={tw.style('relative z-40 mb-5')}>
            <Text key={q.name} style={tw.style('mb-2 text-lg font-semibold')}>{q.name}</Text>
       
        //Liste des différentes réponses grâce à la méthode map() et au fetch vers l'API https://api-miniapp.antoine-droyer.fr/api-answers.php
            {answersTemp.map(a => (
              <View>
                {answers.find(x => x == q.id_question) ?
                // Si le bouton de réponse est déjà pressé une fois, on désactive les deux boutons associés à chaque questions
                  <Pressable
                    onPress={onPressAnswer.bind(a)}
                    
                    color="#841584"
                    accessibilityLabel="Bouton non accessible"
                    disabled="true"
                    style={styles.disabled}
                  ><Text style={styles.text}>{a.contenu}</Text></Pressable>
                  :

                  //Sinon on affiche les deux boutons cliquables
                  <Pressable
                    onPress={onPressAnswer.bind(a)}
                    accessibilityLabel="Bouton cliquable"
                    style={styles.button}
                  ><Text style={styles.text}>{a.contenu}</Text></Pressable>
                }
              </View>
            ))}
          </View>
        ))}

        // Affichage du score qui s'incrémente de 1 à chaque fois que l'utilisateur appuie sur la réponse correcte
        <Text style={tw.style('text-xl font-bold text-center')}>Score : {score}</Text>

        //Fonctionnalité partage sur les réseaux sociaux que nous n'avons pas réussi à faire fonctionner
        {/* {numberAnswer == 7 &&
          // <Text>Quizz terminé !</Text>
          <Button
          onPress={async () => {
            await share();
          }}
            title="Partager"
            color="#841584"
            accessibilityLabel="Partgez votre score"
          />
        } */}
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}