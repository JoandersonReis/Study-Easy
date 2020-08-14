import React, { useState } from "react"
import { View, Text, Image, Alert } from "react-native"
import Feather from "react-native-vector-icons/Feather"
import { useNavigation, useRoute } from "@react-navigation/native"
import { RectButton, BorderlessButton } from "react-native-gesture-handler"

import styles from "./styles"
import api from "../../services/api"

interface Params {
  id: number,
  name: string,
  does: number
}


const SubjectDetail = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const routeParams = route.params as Params

  const [ does, setDoes ] = useState(routeParams.does)

  async function handleDoneSubject() {
    try {
      await api.put("/subjects", {
        name: routeParams.name,
        id: routeParams.id,
        does: does == 0? 1 : 0
      })

      if(does == 0) {
        setDoes(1)
      } else {
        setDoes(0)
      }
    } catch(err) {
      Alert.alert("Erro ao completar assunto!")
    }
  }

  function handleNavigateToEditSubject() {
    navigation.navigate("EditSubject", {
      name: routeParams.name,
      id: routeParams.id,
      does
    })
  }

  async function handleRemoveSubject() {
    try {
      await api.delete(`/subjects/${routeParams.id}`)
      navigation.goBack()
    } catch(err) {
      Alert.alert("Erro ao remover assunto!")
    }
  }

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

      <Text style={styles.title}>{routeParams.name}</Text>

      <RectButton
        style={does == 1? styles.doneBtn:[styles.doneBtn, {backgroundColor: "#FFF"}]}
        onPress={handleDoneSubject}
      >
        <Feather name="check" size={40} color={does == 1? "#fff": "#27ae60"} />
        <Text style={does == 1? styles.doneBtnTxt: [styles.doneBtnTxt, {color:"#27ae60"}]}>{does == 1? "Feito": "Fazer"}</Text>
      </RectButton>

      <RectButton
        style={styles.editBtn}
        onPress={handleNavigateToEditSubject}
      >
        <Feather name="edit" size={35} color="#fff" />
        <Text style={styles.editBtnTxt}>Editar</Text>
      </RectButton>

      <RectButton
        style={styles.removeBtn}
        onPress={handleRemoveSubject}
      >
        <Feather name="trash-2" size={35} color="#fff" />
        <Text style={styles.removeBtnTxt}>Remover</Text>
      </RectButton>
    </View>
  )
}

export default SubjectDetail
