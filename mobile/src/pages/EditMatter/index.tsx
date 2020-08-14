import React, { useState } from "react"
import { Text, View, TextInput, Image, FlatList, ScrollView, Alert } from "react-native"
import { RectButton, BorderlessButton } from "react-native-gesture-handler"
import Feather from "react-native-vector-icons/Feather"
import { useNavigation, useRoute } from "@react-navigation/native"

import styles from "./styles"
import api from "../../services/api"

interface Params {
  id: number,
  name: string,
  days: string
}

const EditMatter = () => {
  const route = useRoute()
  const routeParams = route.params as Params
  const navigation = useNavigation()
  const days = routeParams.days.split(",").map(day => day.trim())

  const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
  const [ selectedDays, setSelectedDays ] = useState<string[]>(days)
  const [ name, setName ] = useState(routeParams.name)

  function handleSelectedDays(name: string) {
    const alreadySelected = selectedDays.findIndex( item => item === name )

    if(alreadySelected >= 0) {
      const filteredItems = selectedDays.filter( item => item !== name  )

      setSelectedDays(filteredItems)
    } else {
      setSelectedDays([ ...selectedDays, name ])
    }
  }

  async function handleEditMatter() {
    try {
      await api.put("matters", {
        id: routeParams.id,
        name,
        days: selectedDays
      })

      navigation.goBack()
    } catch(err) {
      Alert.alert("Erro ao editar, tente novamente!")
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
        <Text style={styles.title}>Editar {routeParams.name}</Text>

        <Text style={styles.label}>Nome</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Ex: Matemática"
          value={name}
          onChangeText={text => setName(text)}
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
        <FlatList
          data={weekDays}
          contentContainerStyle={styles.daysBtnContainer}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <RectButton
              style={[styles.dayBtn, selectedDays.includes(item)? styles.selected:{}]}
              onPress = {() => handleSelectedDays(item)}
            >
              <Text style={[styles.dayBtnTxt, selectedDays.includes(item)? styles.selected:{}]}>{item}</Text>
            </RectButton>
          )}
        />
        </ScrollView>
        <RectButton
          style={styles.addBtn}
          onPress = {handleEditMatter}
        ><Text style={styles.addBtnTxt}>Editar</Text></RectButton>
      </View>
    </View>
  )
}

export default EditMatter