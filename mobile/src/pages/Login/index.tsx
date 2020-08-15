import React, { useState } from "react"
import { Text, View, Image, TextInput, Alert, KeyboardAvoidingView, Platform } from "react-native"
import Feather from "react-native-vector-icons/Feather"
import { useNavigation } from "@react-navigation/native"
import { RectButton, BorderlessButton } from "react-native-gesture-handler"
import api from "../../services/api"

import styles from "./styles"

const Login = () => {
  const navigation = useNavigation()
  const [ username, setUsername ] = useState<string>("")
  const [ password, setPassword ] = useState<string>("")

  async function handleLogin() {
    if(username.length <= 0 || password.length <= 0) {
      Alert.alert("Preencha os campos vazios!")
      return
    }

    try {
      const response = await api.post("login", {username, password})
  
      navigation.navigate("Matters", {id: response.data.id})
    } catch(err) {
      Alert.alert("Usuario ou senha não existem!")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../images/logo.png")} />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Username</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Username"    
          onChangeText={text  => setUsername(text)} />

        <Text style={styles.label}>Senha</Text>
        <TextInput 
          style={styles.input}
          secureTextEntry={true}
          placeholder="Senha" 
          onChangeText={text => setPassword(text)} />

        <RectButton
          style={styles.loginBtn}
          onPress={handleLogin}
        >
          <Feather name="log-in" size={30} color="#fff" />
          <Text style={styles.loginBtnTxt}>Login</Text>
        </RectButton>

        <BorderlessButton
          style={styles.registerBtn}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerBtnTxt}>Registrar-se</Text>
        </BorderlessButton>
      </View>
    </View>
  )
}

export default Login
