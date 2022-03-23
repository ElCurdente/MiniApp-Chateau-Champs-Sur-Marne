import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Button } from 'react-native';
import tw from 'twrnc';
import { NativeRouter, Route, Link } from "react-router-native";
import chateau from './img/chateau.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function Quizz() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [numberAnswer, setNumberAnswer] = useState(0)


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

  return (
    <ScrollView style={styles.container}>
      <Text style={tw.style('text-lg mx-auto mb-5 mt-2 font-bold')}>Quizz</Text>
      <View style={tw.style('pb-24 mx-4')}>
        {questions.map(q => (
          answersTemp = answers.filter(x => x.ext_id_question == q.id_question),
          <View key={q.id_question} style={tw.style('relative z-40 mb-5')}>
            <Text style={tw.style('mb-2 text-lg font-semibold')}>{q.name}</Text>
            {answersTemp.map(a => (
              <View>
                {answers.find(x => x == q.id_question) ?
                  <Pressable
                    onPress={onPressAnswer.bind(a)}
                    
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    disabled="true"
                    style={styles.disabled}
                  ><Text style={styles.text}>{a.contenu}</Text></Pressable>
                  :
                  <Pressable
                    onPress={onPressAnswer.bind(a)}
                    accessibilityLabel="Learn more about this purple button"
                    style={styles.button}
                  ><Text style={styles.text}>{a.contenu}</Text></Pressable>
                }
              </View>
            ))}
          </View>
        ))}
        <Text>Score : {score}</Text>
        {numberAnswer == 7 &&
          // <Text>Quizz terminé !</Text>
          <Button
            title="Partager"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        }
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}