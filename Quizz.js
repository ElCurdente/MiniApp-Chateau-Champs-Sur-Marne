import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { NativeRouter, Route, Link } from "react-router-native";
import chateau from './img/chateau.jpg';
import { useState } from 'react';
import { useEffect } from 'react';

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
  },[])

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
  },[])

  function onPressAnswer() {
    if(this.type == 1) {
      setScore(score + 1);
      console.log(this)
    }
    setAnswers(prevState => [...prevState, this.ext_id_question]);
    setNumberAnswer(numberAnswer + 1);
  }


  let answersTemp

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>Quizz</Text>
      {questions.map(q => (
        answersTemp = answers.filter(x => x.ext_id_question == q.id_question),
        <View>
      <Text>{q.name}</Text>
      {answersTemp.map(a => (
        <View>
          {answers.find(x => x == q.id_question) ?
          <Button
          onPress={onPressAnswer.bind(a)}
          title={a.contenu}
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          disabled="true"
        />
        :
        <Button
        onPress={onPressAnswer.bind(a)}
        title={a.contenu}
        color="#f1f1f1"
        accessibilityLabel="Learn more about this purple button"
        />
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
      <StatusBar style="auto" />
    </View>
  );
}