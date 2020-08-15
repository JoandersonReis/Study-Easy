import React, { useState } from "react"
import { View, Text, Image, FlatList, Alert } from "react-native"
import Feather from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native"
import { RectButton, BorderlessButton } from "react-native-gesture-handler"

import api from "../../services/api"

import styles from "./styles"

interface Matters {
  id: number,
  propertyId: number,
  name: string,
  days: string
}

interface Params {
  id: number
}

const Matters = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const routeParams = route.params as Params
  
  const [ matters, setMatters ] = useState<Matters[]>([])

  async function handleDeleteMatter(id: number) {
    try {
      await api.delete(`/matters/${id}`)
    } catch(err) {
      Alert.alert("Erro ao deletar, tente novamente")
    }
  }


  useFocusEffect(() => {
    api.get("/matters", {headers: {Authorization: Number(routeParams.id)}}).then(response => {
      setMatters(response.data)
    })
  })

  function handleLogout() {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../images/logo.png")} />

        <BorderlessButton
          style={styles.headerBtn}
          onPress={handleLogout}
        >
          <Feather name="power" size={20} color="#c0392b" />
          <Text style={styles.headerBtnTxt}>Logout</Text>
        </BorderlessButton>
      </View>

      <Text style={styles.title}>Matérias</Text>

      <FlatList 
        style={styles.content}
        data={matters}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => ( 
        <View style={styles.matterContainer}>
          <BorderlessButton
            style={styles.matterName}
            onPress={() => navigation.navigate("Subjects", { matterId: item.id, name: item.name })}
          >
            <Text style={styles.matterNameTxt}>{item.name}</Text>
          </BorderlessButton>

          <FlatList  
            data={item.days.split(",").map((day: string) => day.trim().slice(0, 3))}
            keyExtractor={item => item}
            style={styles.dayWeekContainer}
            renderItem={({item}) => (
              <View style={styles.dayWeek}>
                <Text style={styles.dayWeekTxt}>{item}</Text>
              </View>
            )}
          />

          <View style={styles.matterBtnContainer}>
            <RectButton
              style={styles.editMatter}
              onPress={() => {
                navigation.navigate("EditMatter", {
                  name: item.name, 
                  days: item.days,
                  id: item.id
                })
              }}
            >
              <Feather name="edit" size={25} color="#fff" />
              <Text style={styles.editMatterTxt}>Editar</Text>
            </RectButton>

            <RectButton
              style={styles.removeMatter}
              onPress={() => handleDeleteMatter(item.id)}
            >
              <Feather name="trash-2" size={25} color="#fff" />
              <Text style={styles.removeMatterTxt}>Remover</Text>
            </RectButton>
          </View>
        </View>
        )}
      />

      <RectButton
        style={styles.addMatter}
        onPress={() => navigation.navigate("AddMatter", { propertyId: routeParams.id })}
      >
        <Feather name="plus" size={40} color="#fff" />
      </RectButton>
    </View>
  )
}

export default Matters
