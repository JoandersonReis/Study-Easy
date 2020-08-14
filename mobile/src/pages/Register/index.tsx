import React, { useState } from "react"
import { Text, View, Image, TextInput, Alert, KeyboardAvoidingView } from "react-native"
import Feather from "react-native-vector-icons/Feather"
import { useNavigation } from "@react-navigation/native"
import { BorderlessButton, RectButton } from "react-native-gesture-handler"

import api from "../../services/api"
import styles from "./styles"

const Register = () => {
  const navigation = useNavigation()
  const [ username, setUsername ] = useState<string>("")
  const [ password, setPassword ] = useState<string>("")
  const [ secondPassword, setSecondPassword ] = useState<string>("")

  async function handleRegister() {
    if(username.length <= 0 || password.length <= 0 || secondPassword.length <= 0) {
      Alert.alert("Preencha todos os Campos")
      return
    }

    if(password != secondPassword) {
      Alert.alert("As senhas devem ser iguais!")
      return
    }

    try {
      await api.post("/accounts", {username, password})

      Alert.alert("Conta criaa com sucesso!")
      navigation.goBack()
    } catch(err) {
      Alert.alert("Ja existe uma conta com esse nome!")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../images/logo.png")} />
      </View>

      <View style={styles.content}>
        <KeyboardAvoidingView behavior="position">
          <Text style={styles.label}>Username</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Ex: abc123"
            onChangeText={text => setUsername(text)} />

          <Text style={styles.label}>Senha</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Ex: 123714192" 
            onChangeText={text => setPassword(text)} />

          <Text style={styles.label}>Reescreva a senha</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Ex: 123714192" 
            onChangeText={text => setSecondPassword(text)} />

          <RectButton
            style={styles.registerBtn}
            onPress={handleRegister}
          >
            <Feather name="edit-3" size={30} color="#fff" />
            <Text style={styles.registerBtnTxt}>Cadastrar</Text>
          </RectButton>
        </KeyboardAvoidingView>

        <BorderlessButton
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={20} color="#fff" />
          <Text style={styles.backBtnTxt}>Voltar</Text>
        </BorderlessButton>
      </View>
    </View>
  )
}

export default Register