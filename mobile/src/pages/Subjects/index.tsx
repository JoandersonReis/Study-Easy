import React, { useState } from "react"
import { View, Text, Image, TouchableOpacity, FlatList, Alert } from "react-native"
import Feather from "react-native-vector-icons/Feather"
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native"
import { RectButton, BorderlessButton } from "react-native-gesture-handler"

import styles from "./styles"
import api from "../../services/api"

interface Params {
  matterId: number,
  name: string
}

interface Subjects {
  id: number,
  matterId: number,
  name: string,
  do: number
}

const Subjects = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const routeParams = route.params as Params

  const [ subjects, setSubjects ] = useState<Subjects[]>([])

  async function handleDoneSubject(id: number, name: string, done: number) {
    let number = 1;

    if(done == 1) {
      number = 0
    }

    await api.put("/subjects", {
      name,
      id,
      does: number
    })
  }

  async function handleDeleteSubject(id: number) {
    try {
      await api.delete(`/subjects/${id}`)
    } catch(err) {
      Alert.alert("Erro ao deletar assunto!")
    }
  }

  useFocusEffect(() => {
    api.get(`/subjects/${routeParams.matterId}`).then(response => {
      setSubjects(response.data)
    })
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../images/logo.png")} />

        <BorderlessButton
          style={styles.headerBtn}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={20} color="#fff" />
          <Text style={styles.headerBtnTxt}>Voltar</Text>
        </BorderlessButton>
      </View>

      <Text style={styles.title}>Asuntos de {routeParams.name}</Text>

      <FlatList 
        style={styles.content}
        data={subjects}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => ( 
        <View style={item.do == 1? [styles.subjectContainer, styles.doneSubjectContainer]: styles.subjectContainer}>
          <BorderlessButton
            style={styles.subjectName}
            onPress={() => {
              navigation.navigate("SubjectDetail", {
                name: item.name,
                id: item.id,
                does: item.do 
              })
            }}
          >
            <Text style={styles.subjectNameTxt}>{item.name}</Text>
          </BorderlessButton>

          <View style={styles.subjectBtnContainer}>
            <RectButton
                style={item.do == 1? [styles.doneSubject, {backgroundColor: "#fff"}]:styles.doneSubject}
                onPress={() => handleDoneSubject(item.id, item.name, item.do)}
              >
                <Feather name="check" size={30} color={item.do == 1? "#27ae60":"#fff"} />
            </RectButton>

            <RectButton
              style={styles.editSubject}
              onPress={() => {
                navigation.navigate("EditSubject", {
                  name: item.name,
                  id: item.id,
                  does: item.do
                })
              }}
            >
              <Feather name="edit" size={25} color="#fff" />
            </RectButton>

            <RectButton
              style={styles.removeSubject}
              onPress={() => handleDeleteSubject(item.id)}
            >
              <Feather name="trash-2" size={25} color="#fff" />
            </RectButton>
          </View>
        </View>
        )}
      />

      <RectButton
          style={styles.addSubject}
          onPress={() => navigation.navigate("AddSubject", {matterId: routeParams.matterId})}
        >
          <Feather name="plus" size={40} color="#fff" />
      </RectButton>
    </View>
  )
}

export default Subjects
