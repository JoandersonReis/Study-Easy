import React, { useState } from "react"
import { Text, View, TextInput, Image, Alert } from "react-native"
import Feather from "react-native-vector-icons/Feather"
import { useNavigation, useRoute } from "@react-navigation/native"
import { RectButton, BorderlessButton } from "react-native-gesture-handler"

import styles from "./styles"
import api from "../../services/api"

interface Params {
  matterId: number
}

const AddSubject = () => { 
  const navigation = useNavigation()
  const route = useRoute()
  const routeParams = route.params as Params

  const [ name, setName ] = useState("")

  async function handleAddNewSubject() {
    try {
      await api.post("/subjects", {name, matterId: routeParams.matterId})

      navigation.goBack()
    } catch(err) {
      Alert.alert("Erro ao adicionar novo assunto, tente novamente")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../images/logo.png")} />

        <BorderlessButton
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={20} color="#fff" />
          <Text style={styles.backBtnTxt}>Voltar</Text>
        </BorderlessButton>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Adicionar Assunto</Text>

        <Text style={styles.label}>Nome</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Ex: Relevo Brasileiro"
          value={name}
          onChangeText={text => setName(text)} 
        />

        <RectButton
          style={styles.addBtn}
          onPress = {handleAddNewSubject}
        ><Text style={styles.addBtnTxt}>Adicionar</Text></RectButton>
      </View>
    </View>
  )
}

export default AddSubject
