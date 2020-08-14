import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Matters from "./pages/Matters"
import AddMatter from "./pages/AddMatter"
import EditMatter from "./pages/EditMatter"
import Subjects from "./pages/Subjects"
import AddSubject from "./pages/AddSubject"
import EditSubject from "./pages/EditSubject"
import SubjectDetail from "./pages/SubjectDetail"

const Stack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Matters" component={Matters} />
        <Stack.Screen name="AddMatter" component={AddMatter} />
        <Stack.Screen name="EditMatter" component={EditMatter} />
        <Stack.Screen name="Subjects" component={Subjects} />
        <Stack.Screen name="AddSubject" component={AddSubject} />
        <Stack.Screen name="EditSubject" component={EditSubject} />
        <Stack.Screen name="SubjectDetail" component={SubjectDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
